import {
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  linkWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './config'

const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider)
  await ensureUserProfile(result.user, 'google')
  return result.user
}

export async function signInAsGuest() {
  const result = await signInAnonymously(auth)
  await ensureUserProfile(result.user, 'anonymous')
  return result.user
}

// Upgrade anonymous account to Google — merges progress data
export async function upgradeToGoogle() {
  const currentUser = auth.currentUser
  if (!currentUser) throw new Error('No current user')
  const result = await linkWithPopup(currentUser, googleProvider)
  await ensureUserProfile(result.user, 'google')
  return result.user
}

export async function signOutUser() {
  await signOut(auth)
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}

async function ensureUserProfile(user: User, provider: 'google' | 'anonymous') {
  const ref = doc(db, 'users', user.uid, 'profile', 'info')
  const snap = await getDoc(ref)
  if (!snap.exists()) {
    await setDoc(ref, {
      displayName: user.displayName ?? '訪客',
      email: user.email ?? null,
      photoURL: user.photoURL ?? null,
      authProvider: provider,
      createdAt: serverTimestamp(),
    })
  }
}
