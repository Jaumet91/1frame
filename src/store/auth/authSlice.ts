import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
  displayName: null | string;
  email: null | string;
  errorMessage: null | string | undefined;
  photoURL: null | string;
  status: string;
  uid: null | string;
}

interface User {
  uid: string;
  email: null | string;
  displayName: null | string;
  photoURL: null | string;
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
    login: (state, { payload }: PayloadAction<User>) => {
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.errorMessage = null;
      state.photoURL = payload.photoURL;
      state.status = 'authenticated';
      state.uid = payload.uid;
    },
    logout: (state, { payload }: PayloadAction<string | undefined>) => {
      state.displayName = null;
      state.email = null;
      state.errorMessage = payload;
      state.photoURL = null;
      state.status = 'not-authenticated';
      state.uid = null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
