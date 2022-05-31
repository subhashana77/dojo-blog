import React from "react";
import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => {
// const BlogList = (props) => {

    // const blogs = props.blogs;
    // console.log(props, blogs);

    return (
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;