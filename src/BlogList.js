import React from 'react';
import './BlogList.css';
import posts from './data/posts.json';

const BlogList = () => {
    return (
        <div className="blog-list-container">
            <h1 className="blog-title">Simple Blog Display</h1>
            <div className="blogs">
                {posts.map((post, index) => (
                    <div key={index} className="blog-card">
                        <h2 className="blog-post-title">{post.title}</h2>
                        <p className="blog-post-body">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
