import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
  logoutFirebase
} from '../../firebase/providers';

import { checkingCredentials, logout, login } from './';

export const checkingAuthentication = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());

    const result: any = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
