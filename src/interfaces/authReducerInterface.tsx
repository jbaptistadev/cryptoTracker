export interface AuthState {
  isLogged: boolean;
  email: string;
  name: string;
  id: string;
}

export type SetUser = {
  email: string;
  name: string;
  id: string;
};

export type AuthAction = {type: 'logout'} | {type: 'setUser'; payload: SetUser};
