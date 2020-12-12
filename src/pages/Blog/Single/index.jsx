import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Posts from "../../../server/posts.json";
import ReactMarkdown from "react-markdown";

import "./style.css";
import BlogHeader from "../../../components/blogHeader";

function SinglePost() {
  const { id } = useParams();

  const Post = Posts.find((post) => post.id === id);

  return (
    <>
      {Post ? (
        <>
          <BlogHeader title={Post.title} subtitle={Post.author} />
          <div className="single-post-container">
            <ReactMarkdown>{Post.content}</ReactMarkdown>
          </div>
          <div className="single-post-author">
            <span>Autor: {Post.author}</span>
            <span>Data: {Post.date}</span>
          </div>
        </>
      ) : (
        <Redirect to="/blog" />
      )}
    </>
  );
}

export default SinglePost;
