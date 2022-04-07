import styled from "styled-components";
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
// fetch https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41 and render the data



function Fetch() {
    const URL = 'https://api.jsonbin.io/b/624ddc944c42ee0bc5649f08'
    const [data, setData] = React.useState(null)

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setData(res.data)
            }) 
    }, [URL])
    if (!data) {
        return <div>Loading...</div>
    } else {   
    return (
        <section>
        <div>
             {/* foreach array in data show image */}
                {data.map(item => (
                    <> <h1> {item.owner.name} </h1><img src={item.img} alt={item.name} /><h2> The dogs breed is {item.breed} </h2></>
                ))}
               
        </div>
        </section>
    )
    }
}



export default Fetch

const Section = styled.section`
    background: #fafafa;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    `;
    




