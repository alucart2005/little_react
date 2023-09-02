import styled from "styled-components";
import "./card.css";
import { useState } from "react";

export function Test() {
  const [likes, setLikes] = useState(100);
  const giveLikes = () => {
    setLikes(likes + 1);
  };
  const unLikes = () => {
    setLikes(likes - 1);
  };
  return (
    <div className="card">
      <Title>Likes {likes}</Title>
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
