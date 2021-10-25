import { useNavigate } from "@reach/router";
import Button from "components/Button";
import Input from "components/Input";
import firebase from "firebase";
import React, { useCallback, useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { loginAnonymous } from "services/api";
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

  const [showAnonymous, setShowAnonymous] = useState(false);
  const [nickName, setNickName] = useState("");
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

  const onAnonymous = () => {
    if (nickName.length > 0) {
      loginAnonymous(nickName).then(() => {
        navigate("/menu");
      });
    }
  };

  return (
    <PageTemplate>
      <S.H1>Truco Jam</S.H1>
      <S.SignInArea>
        {signInCard()}
        or
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAnonymous();
          }}
        >
          {showAnonymous ? (
            <S.InputLine>
              <Input
                label="Enter your nickname"
                type="text"
                value={nickName}
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
              ></Input>
              <Button type="submit" color="secondary">
                ok
              </Button>
            </S.InputLine>
          ) : (
            <Button onClick={() => setShowAnonymous(true)}>
              login anonymously
            </Button>
          )}
        </form>
      </S.SignInArea>
    </PageTemplate>
  );
};
export default HomePage;
