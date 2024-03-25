import React, { useEffect, useState } from "react";

function Message () {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    async function getAdvise() {


      const res = await fetch("https://api.adviceslip.com/advice");

    
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c)=> c + 1);
      
    }

    useEffect(function () {
        getAdvise();
    }, []);
    return (
    <div>
        <h1>{advice}</h1>
        <button onClick={getAdvise }>Get advice</button>
        <Note count={count} />
    </div>
    );
}

function Note(props) {
    return (
    <p>You have read <strong>{props.count} </strong> pieces of Advise</p>
    );
}

export default Message;