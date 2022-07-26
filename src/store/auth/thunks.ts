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

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  return async (dispatch: any) => {
    dispatch(checkingCredentials());

    const result: any = await registerUserWithEmailPassword({
      email,
      password,
      displayName
    });
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
