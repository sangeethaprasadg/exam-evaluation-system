


import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";

// Google Sign In
export const loginWithGoogle = async () => {
  try {


    googleProvider.setCustomParameters({
  prompt: "select_account",
});
    // Firebase Login
    const result = await signInWithPopup(auth, googleProvider);

    // Get Firebase ID Token
    const idToken = await result.user.getIdToken();

    // Send token to backend
    const response = await fetch("http://localhost:3000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json();

console.log("Backend Response:", data);


    if (!data.success) {
      await signOut(auth);

      return {
        success: false,
        error: data.message,
      };
    }

    return {
      success: true,
      user: result.user,
      mentor: data.mentor,
    };

  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

// Logout
export const logout = async () => {
  await signOut(auth);
};


export const verifyMentor = async (user) => {

  const idToken = await user.getIdToken();

  const response = await fetch("http://localhost:3000/api/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idToken,
    }),
  });

  return await response.json();

};