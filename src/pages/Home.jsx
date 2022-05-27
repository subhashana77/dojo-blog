import React, {useState} from "react";

const Home = () => {

    const [name, setName] = useState("Dilshan");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Subhashana');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;