import React from 'react'
import * as bs from 'react-bootstrap'

// const NAMES = [
//     "Sally",
//     "Vijay",
//     "Faze",
//     "Tommeigh",
// ]

//change to object
const NAMES = {
    user1: "Sally",
    user2: "Vijay",
    user3: "Faze",
    user4: "Tommeigh"
}

export default function Sect1(props) {
    return (
        <div>
            {Object.values(NAMES).map((name, idx) => {
                return (
                    <bs.Button 
                    key={idx}
                    variant="outline-success"
                    size="lg"
                    >
                        {name}
                    </bs.Button>
                )
            })}
        </div>
        
    )

}