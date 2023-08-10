import React from "react";
import { loginEndpoint } from "../../Spotify";
import * as S from "./Login.styled";

export default function Login() {
  return (
    <S.Container>
      <div className="Login-page">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Logo-spotify"
          className="logo"
        />
        <a href={loginEndpoint}>
          <div className="login-btn">LOG IN</div>
        </a>
      </div>
    </S.Container>
  );
}
