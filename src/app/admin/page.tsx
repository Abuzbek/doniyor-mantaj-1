"use client";
import { redirect } from "next/navigation";
import React, {
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUserData } from "../database";
import { firebaseAuth } from "../../../initFirebase";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "./LoginForm";
import AdminPage from "./AdminPage";
type Props = {};

// const admin = {
//   username: "admin@gmail.com",
//   password: "*3=)v8YP5w8£cT%R3eR2BQ?}C",
// };

const Admin: FC<Props> = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<User>();
  const [data, setData] = useState<{ name: string; phone: string }[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = firebaseAuth;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const userId = userCredential.user;
        console.log(userId);
        setLogin(true);
        setUser(userId);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const getData = useCallback(async () => {
    getUserData().then((snapshot) => {
      if (snapshot.exists()) {
        setData(
          Object.entries<{ name: string; phone: string }>(snapshot.val()).map(
            ([key, val]) => val
          )
        );
      }
    });
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return !login ? (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      submit={submit}
    />
  ) : (
    data.length && <AdminPage users={data} />
  );
};

export default Admin;
