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

  test('startGoogleSignIn shoul d call checkingCredentials and login - Success ', async () => {
    const loginData = { ok: true, ...demoUser };
    await (singInWithGoogle as jest.Mock).mockReturnValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });
});
