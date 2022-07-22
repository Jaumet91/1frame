import {
  authSlice,
  checkingCredentials,
  login,
  logout
} from '../../../src/store/auth/authSlice';
import {
  authenticatedState,
  demoUser,
  initialState
} from '../../fixtures/authFixtures';

describe('Tests in authSlice.ts', () => {
  test('should return initialState and called "auth"', () => {
    const state = authSlice.reducer(initialState, {
      type: undefined
    });
    expect(authSlice.name).toBe('auth');
    expect(state).toEqual(initialState);
  });

  test('should carry out the authentication', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      displayName: demoUser.displayName,
      email: demoUser.email,
      errorMessage: null,
      photoURL: demoUser.photoURL,
      status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
      uid: demoUser.uid
    });
  });

  test('should carry out the logout without arguments', () => {
    const state = authSlice.reducer(authenticatedState, logout());
    expect(state).toEqual({
      displayName: null,
      email: null,
      errorMessage: undefined,
      photoURL: null,
      status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
      uid: null
    });
  });

  test('should carry out the logout and show the error msg', () => {
    const errorMessage = 'Incorrect credentials. Try again.';
    const state = authSlice.reducer(authenticatedState, logout(errorMessage));
    expect(state).toEqual({
      displayName: null,
      email: null,
      errorMessage,
      photoURL: null,
      status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
      uid: null
    });
  });

  test('should change the status to checking', () => {
    const state = authSlice.reducer(initialState, checkingCredentials());
    expect(state.status).toBe('checking');
  });
});
