import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/userActions";
import axios from "../store/axiosWraper";
// import "../styles/Start.css";

function Login({}) {
  const [register, setRegister] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) return <Redirect to={`/profile/${user.id}`} />;
  if (register) return <Redirect to={`/register`} />;

  return (
    // <div className="start">
    <>
      <button id="register" onClick={() => setRegister(true)}>
        {" "}
        Register{" "}
      </button>
      <form className="form">
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
    const user = await axios.post("user/login", {
      name: nameInput,
      password: passwordInput,
    });
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
  }
}

export default Login;
