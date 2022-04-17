
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Owner from './Owner'
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
                    <Owner key={item.id} Item={item} />
                ))}
               
        </div>
        </section>
    )
    }
}



export default Fetch


    




