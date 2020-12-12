import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../../../components/blogHeader";
import "./style.css";
import Posts from "../../../server/posts.json";

export default function BlogMain() {
  return (
    <div>
      <BlogHeader title="Bem-Vindo" subtitle="Blog Uniamericon" />

      <div className="blog-main-container">
        <section className="blog-main-posts">
          <h2>Ultimas Postagens</h2>
          <hr />
          <br />
          <Link to="/admin/update">
            <button className="login-admin">Nova Postagem</button>
          </Link>
          {console.log(Posts.length)}
          {Posts.length === 0 ? null : (
            <div className="cards-container">
              {Posts.map((post) => (
                <div className="blog-card" key={post.id}>
                  <Link to={`/blog/${post.id}`} className="card-link">
                    <h3>{post.title}</h3>
                    <br />
                    <p>
                      Autor: <strong>{post.author}</strong>, Data: {post.date}
                    </p>
                    <br />
                    <hr />
                    <br />
                    <p className="card-description">{post.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        <aside className="blog-main-aside">
          <h2>Principais posts</h2>
          <hr />

          <ul>
            {Posts.map((post) => (
              <li key={post.id}>
                <Link to={`/blog/${post.id}`}> {post.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
