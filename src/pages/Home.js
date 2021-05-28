import { useDispatch } from "react-redux";

import { auth } from "../firebase";
import Header from "../components/Header";
import AppBody from "../components/AppBody";
import { createAccount } from "../redux/postSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        localStorage.setItem("UserCred", JSON.stringify(userCred));
        dispatch(
          createAccount({
            fname: userCred.displayName,
            mail: userCred.email,
            pic: userCred.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <>
      <Header />
      <AppBody />
    </>
  );
};

export default Home;
