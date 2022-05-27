import React, {useState} from "react";

const Home = () => {
    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'dilshan', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'subhashana', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'rajapaksha', id: 3 },
    ]);
    return (
        <div className="home">
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;