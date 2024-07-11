import { useState, useEffect } from "react";

export default function GiftCardsPage() {
    const [test, setTest] = useState(false); 

    useEffect(() => {
        const url = 'http://localhost:4000/api/aggregated'; 
        fetch(url)
            .then((res) => {
                return res.json(); 
            })
            .then((data) => {
                console.log(data); 
            });
        })

    return(
        <>
            <h1>Gift Cards</h1>
        </>
    )
}