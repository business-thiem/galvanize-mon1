import React from 'react'

const items = [`glasses`, `coffee`, `ball`, `shoes`]

const result = items.map(item => {
    <li>{item}</li>
})

console.log(result)