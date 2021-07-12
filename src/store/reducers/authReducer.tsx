import {AuthAction, AuthState} from '../../interfaces/authReducerInterface';

const initialState: AuthState = {
  isLogged: false,
  email: '',
  name: '',
  id: '',
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return initialState;

    case 'setUser':
      const {name, email, id} = action.payload;
      return {
        isLogged: true,
        name,
        email,
        id,
      };

    default:
      return state;
  }
};

export default authReducer;
