import { auth, provider, database } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, set } from "firebase/database";

function Auth() {

  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  const signOutHandler = () => {
    signOut(auth);
  };

  const handleSaveUserData = () => {
    const userRef  = ref(database, `/usersInfo/${user.uid}`);
    const userData = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    }

    set(userRef, userData)

  };

  return (
    <div className="auth">
      {user ? (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="User Avatar" />
          <br />  
          <button onClick={handleSaveUserData}>
            Save data
          </button>
          <button onClick={signOutHandler}>Sign out</button>

        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}

export default Auth;
