import React from "react";
import { loginEndpoint } from "../../Spotify";
import * as S from "./Login.styled";
import SpotifyLogoGreen from "../../../image/SpotifyLogoGreen.png";

export default function Login() {
  return (
    <S.Container>
      <div className="Login-page">
        <img src={SpotifyLogoGreen} alt="Logo-spotify" className="logo" />
        <a href={loginEndpoint}>
          <button className="login-btn">LOG IN</button>
        </a>
      </div>
    </S.Container>
  );
}
