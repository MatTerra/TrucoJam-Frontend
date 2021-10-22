import { useNavigate } from "@reach/router";
import { Link } from "@storybook/router";
import firebase from "firebase";
import React, { useCallback, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import PageTemplate from "templates/pageTemplate";
import "../../firebase-styling.global.css";
import * as S from "./styles";

// Configure FirebaseUI.
const uiConfig: firebaseui.auth.Config = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/signedIn",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = () => {
  const navigate = useNavigate();
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!!user) {
          try {
            navigate("/menu", { replace: true });
          } catch (error) {
            console.log(error);
          }
          return;
        }
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInCard = useCallback(
    () => (
      <>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </>
    ),
    []
  );

  return (
    <PageTemplate>
      <S.H1>Truco Jam</S.H1>
      <S.SignInArea>
        {signInCard()}
        or
        <Link to="/menu">login anonymously</Link>
      </S.SignInArea>
    </PageTemplate>
  );
};
export default HomePage;
