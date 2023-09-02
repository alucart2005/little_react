import styled from "styled-components";
import "./card.css";
import { useState, useEffect } from "react";

export function Test() {
  const [likes, setLikes] = useState(100);
  const [theme, setTheme] = useState(false);
  const giveLikes = () => {
    setLikes(likes + 1);
  };
  const unLikes = () => {
    setLikes(likes - 1);
  };
  const changeTheme = () => {
    setTheme(!theme);
  };
  useEffect(giveLikes,[]) //[] how many times it run
  return (
    <div className={"card" + " " + (theme ? "on" : "off")}>
      <Title>Likes {likes}</Title>
      <button onClick={changeTheme}>Change Theme</button>
      <button onClick={giveLikes}>Give Likes</button>
      <button onClick={unLikes}>UnLike</button>
    </div>
  );
}

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #df605c;
  &:hover {
    color: #36b660;
  }
`;
