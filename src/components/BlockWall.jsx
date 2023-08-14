import { Typography } from "@mui/material";
import * as S from "./Block.styled";


const BlockWall = ({ text = "", imageUrl = "" }) => {
  return (
    <S.MainContainer>
      <S.Img src={imageUrl} />
      <S.Text>
        <Typography variant="h6"> {text}</Typography>
      </S.Text>
    </S.MainContainer>
  );
};

export default BlockWall;
