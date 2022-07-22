import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  displayName: null | string;
  email: null | string;
  errorMessage: null | string;
  photoURL: null | string;
  status: string;
  uid: null | string;
}

const initialState: AuthState = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  uid: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<AuthState>) => {
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.errorMessage = null;
      state.photoURL = payload.photoURL;
      state.status = 'autenticated';
      state.uid = payload.uid;
    },
    logout: (state, { payload }: PayloadAction<AuthState>) => {
      state.displayName = null;
      state.email = null;
      state.errorMessage = payload.errorMessage;
      state.photoURL = null;
      state.status = 'not-autenticated';
      state.uid = null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
