import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  flex: 1 1 15ch;
  margin: 0.5rem;

  border-radius: 0;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
  box-shadow: 0 1px 20px 0 rgba(69,90,100,.08);
  border: none;
  -webkit-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`

const CardBlock = styled.div`
  padding: 30px 25px;
`

function Card ({title, children, color}) {
  return (
    <CardContainer style={{backgroundColor: color}}>
      <CardBlock>
        {title}
        <div>
          {children}
        </div>
      </CardBlock>
    </CardContainer>
  )
}

export default Card;