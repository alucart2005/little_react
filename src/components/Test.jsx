import styled from 'styled-components'
import "./card.css"
import { useState } from "react";

export function Test() {
  const [likes, setLikes] = useState(0);
  return (
    <div className="card">
      <Title>likes {likes}</Title>      
      <button onClick={()=>{setLikes(likes + 1)}}>Give Likes</button>
      <button onClick={()=>{setLikes(likes - 1)}}>UnLike</button>
    </div>
  );
}

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: palevioletred;
  &:hover {
    color: #36b660;
  }
`
