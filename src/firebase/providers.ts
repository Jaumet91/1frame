import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';

import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async (): Promise<{
  ok: boolean;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  uid?: string;
  errorMessage?: string;
}> => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid
    };
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser!, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    };
  } catch (error: any) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName
    };
  } catch (error: any) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
