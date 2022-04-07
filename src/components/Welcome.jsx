import React from 'react'
import styled from "styled-components";
// create a fonderful welcoming home page



function Welcome() {
  return (
      <section>
    <div>
        <h1>Welcome to my app</h1>
        <p>This is a simple app that fetches data from a jsonbin.io API</p>
    </div>
    </section>
  )
}

export default Welcome

// create a fonderful welcoming home page with ccs
const Section = styled.section`
    background: #fafafa;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }
    p {
        font-size: 1.5rem;
        text-align: center;
    }
`;