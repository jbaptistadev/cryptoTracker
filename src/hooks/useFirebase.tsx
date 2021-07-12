import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const useFirebase = () => {
  return {
    auth: auth(),
    firestore: firestore(),
  };
};

export default useFirebase;
