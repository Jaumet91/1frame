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
import { checkingAuthentication } from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures';

describe('Tests in thunks.ts', () => {
  const dispatch = jest.fn();

  test('should call checking credentials', async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
