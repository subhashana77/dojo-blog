import React, {useState} from "react";
import BlogList from "../components/BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'dilshan', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'subhashana', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'rajapaksha', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <div className="home">
                <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            </div>
        </div>
    );
}

export default Home;