import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/userActions";
import axios from "../store/axiosWraper";
// import "../styles/Start.css";

function Login() {
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(false)
  const nameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) return <Redirect to={`/profile/${user.id}`} />;
  if (register) return <Redirect to={`/register`} />;

  return (
    // <div className="start">
    <>
      <h1 id="landing-page-title">Welcome To Trivia Game</h1>
      <button className="redirect-button" onClick={() => {
        setRegister(true)
      }
      }>
        Sign Up
      </button>
      <form className="form">

        {error ? <div id="error" >{error}</div> : null}
        <input type="text" name="name" ref={nameRef} placeholder="Name" />

        <input
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="password"
        />

        <button id="login-button" onClick={login}>
          {" "}
          Login{" "}
        </button>
      </form>
      {/* </div> */}
    </>
  );
  async function login(e) {
    e.preventDefault();
    const nameInput = nameRef.current.value;
    const passwordInput = passwordRef.current.value;
    if (!nameInput || !passwordInput) return;
    try {

      const user = await axios.post("user/login", {
        name: nameInput,
        password: passwordInput,
      });

      if (user === "Password incorrect") {
        setError("Password incorrect...")
        return
      }
      else if (user === "cannot find user") {
        setError("No such user, please register first")
        return
      }
      const { id, name, avatarUrl } = user;
      const userStats = await axios.get("user/user-stats");
      const { email, gamesPlayed, highScore, totalScore } = userStats;
      dispatch(
        setUser({
          id,
          name,
          avatarUrl,
          email,
          gamesPlayed,
          highScore,
          totalScore,
        })
      );
    } catch (err) {
      console.log(err);
      return
    }
  }
}

export default Login;
