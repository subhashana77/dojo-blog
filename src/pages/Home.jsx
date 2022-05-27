import React from "react";

const Home = () => {

    const handleClick = () => {
        console.log("Hello Dojo");
    }

    const handleClickAgain = (name) => {
        console.log("Hello " + name);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain("Dilshan")}>Click ME Again</button>
        </div>
    );
}

export default Home;