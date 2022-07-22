interface State {
  displayName: null | string;
  email: null | string;
  errorMessage: null | string;
  photoURL: null | string;
  status: string;
  uid: null | string;
}

export const initialState: State = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  uid: null
};

export const authenticatedState: State = {
  displayName: 'Demo User Auth',
  email: 'isAuth@hola.com',
  errorMessage: null,
  photoURL: 'https://demoisAuth.jpg',
  status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
  uid: 'ABCAuth'
};

export const notAuthenticatedState: State = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
  uid: null
};

export const demoUser = {
  uid: 'DEF123',
  email: 'user@demo.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg'
};
