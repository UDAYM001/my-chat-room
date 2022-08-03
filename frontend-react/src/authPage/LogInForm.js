import { useState, useContext } from "react";

import axios from "axios";

import TextInput from "./components/TextInput";
import Button from "./components/Button";
import Link from "./components/Link";

import { Context } from "../functions/context";

const LogInForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(Context);

  const onSubmit = (event) => {
    event.preventDefault();

    axios
      .get("http://127.0.0.1:8000/users/me/", {
        headers: {
          Authorization: `Basic ${btoa(username + ":" + password)}`,
        },
      })
      .then((r) => {
        setUser({
          first_name: r.data.first_name,
          last_name: r.data.last_name,
          email: r.data.email,
          username: r.data.username,
          secret: r.data.password,
        });
      })
      .catch((e) => console.log(e.response.data));
  };

  return (
    <div>
      <div className="form-title">Welcome Back</div>

      <div className="form-subtitle">
        New here? <Link onClick={() => props.onHasNoAccount()}>Sign Up</Link>
      </div>

      <form onSubmit={onSubmit}>
        <TextInput
          label="Username"
          name="username"
          placeholder="adam_lamorre"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
