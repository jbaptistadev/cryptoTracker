import {useEffect, useState} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import useFirebase from './useFirebase';
import {useAppDispatch, useAppSelector} from './useReduxHooks';
import {PORTAFOLIO_INITIAL_STATE} from '../constant/constatsWallet';

interface authData {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  name: string;
  password: string;
}

const useAuth = () => {
  const {auth, firestore} = useFirebase();
  const {
    isLogged,
    name: userName,
    id,
    email: userEmail,
  } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = (userState: FirebaseAuthTypes.User | null) => {
      if (!userState) {
        dispatch({
          type: 'logout',
        });
      }

      if (loading) {
        setLoading(false);
      }
    };

    const subscriber = auth.onAuthStateChanged(getUser);

    return subscriber;
  }, [auth]);

  const logIn = async ({email, password}: authData) => {
    setLoading(true);

    try {
      await auth.signInWithEmailAndPassword(email, password);

      dispatch({
        type: 'setUser',
        payload: {
          email,
          name: auth.currentUser!.displayName!,
          id: auth.currentUser!.uid,
        },
      });
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await auth.signOut();
      dispatch({type: 'cleanWallet'});
      dispatch({type: 'logout'});
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  const setInitialWallet = async (userID: string) => {
    await firestore.collection('wallet').add({
      userID,
      balance: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
      currencyBalances: PORTAFOLIO_INITIAL_STATE,
    });
  };

  const signUp = async ({email, password, name}: SignUpData) => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await auth.currentUser?.updateProfile({
        displayName: name,
      });

      if (auth.currentUser && auth.currentUser.uid) {
        await setInitialWallet(auth.currentUser.uid);
      }

      dispatch({
        type: 'setUser',
        payload: {id: auth.currentUser?.uid!, email, name},
      });
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
    }
  };

  return {
    logIn,
    logOut,
    signUp,
    isLogged,
    loading,
    name: userName,
    id,
    email: userEmail,
  };
};

export default useAuth;
