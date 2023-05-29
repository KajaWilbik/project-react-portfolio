import React from 'react';
import styled from 'styled-components';

export const Pitch = () => {
  return (
    <StyledPitch>
      <h3>
          Hello! I’m a Frontend developer & people-oriented professional with a tourism background. I am a swift learner with a knack for learning languages.
      </h3>
    </StyledPitch>

  )
}

const StyledPitch = styled.div`
  text-align: center;
  flex-direction: column;
  margin: 50px 50px 0px 0px;
  padding-top: 20px;  
  padding-left: 20px;

  @media screen and (min-width: 1024px) {
    margin: 50px 250px 0px 50px;
  }
`