import React, {useEffect, useState} from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="home">
            <div className="home">
                {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            </div>
        </div>
    );
}

export default Home;