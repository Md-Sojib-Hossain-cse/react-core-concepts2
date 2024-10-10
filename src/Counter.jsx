import { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={handleAdd}>Add</button>
            <button disabled={count === 0} onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;