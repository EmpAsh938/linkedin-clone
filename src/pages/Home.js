import Header from "../components/Header";
import AppBody from "../components/AppBody";
import { auth } from "../firebase";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  auth.onAuthStateChanged((userCred) => {
    setUser(userCred.displayName);
    setPhotoURL(userCred.photoURL);
  });
  return (
    <>
      <Header username={user} photo={photoURL} />
      <AppBody username={user} photo={photoURL} />
    </>
  );
};

export default Home;
