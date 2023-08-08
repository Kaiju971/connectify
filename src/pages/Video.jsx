import React from "react";
import * as S from "./Video.styled";

export default function Video({hidden}) {
  if (hidden) return null;

  return (
    <S.Container>
      <div>Video</div>
    </S.Container>
  );
}
