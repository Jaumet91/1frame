import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
  logoutFirebase
} from '../../../src/firebase/providers';
import {
  checkingCredentials,
  login,
  logout
} from '../../../src/store/auth/authSlice';
import {
  checkingAuthentication,
  startCreatingUserWithEmailPassword,
  startGoogleSignIn
} from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Tests in thunks.ts', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('checkingAuthentication should call checkingCredentials', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('startGoogleSignIn should call checkingCredentials and login - Success ', async () => {
    const loginData = { ok: true, ...demoUser };
    await (singInWithGoogle as jest.Mock).mockReturnValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startGoogleSignIn should call checkingCredentials and login - Error', async () => {
    const loginData = {
      ok: false,
      errorMessage: 'An error occurred with Google sing'
    };
    await (singInWithGoogle as jest.Mock).mockReturnValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test('startCreatingUserWithEmailPassword should call checkingCredentials and login - Success', async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = {
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName
    };
    await (registerUserWithEmailPassword as jest.Mock).mockReturnValue(
      loginData
    );
    await startCreatingUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startCreatingUserWithEmailPassword should call checkingCredentials and login - Error', async () => {
    const loginData = {
      ok: false,
      errorMessage: 'An error occurred with Login'
    };
    const formData = {
      email: demoUser.email,
      password: '123456',
      displayName: demoUser.displayName
    };
    await (registerUserWithEmailPassword as jest.Mock).mockReturnValue(
      loginData
    );
    await startCreatingUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
