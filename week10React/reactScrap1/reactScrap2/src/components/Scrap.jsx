import React from "react"


 const Scrap2 = () => {
    const items = [`glasses`, `coffee`, `ball`, `shoes`]

    const result = items.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    console.log(result)
    
    return (
        <ul>
            {result}
        </ul>
    );
}

export default Scrap2