import React, {useState} from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'dilshan', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'subhashana', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'rajapaksha', id: 3 },
    ]);

    return (
        <div className="home">
            <div className="home">
                <BlogList blogs={blogs} title="All Blogs"/>
                <BlogList blogs={blogs.filter((blog) => blog.author === 'dilshan')} title="Dilshan's Blogs"/>
            </div>
        </div>
    );
}

export default Home;