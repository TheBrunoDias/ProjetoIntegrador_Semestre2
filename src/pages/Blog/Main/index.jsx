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

          {console.log(Posts.length)}
          {Posts.length === 0 ? null : (
            <div className="cards-container">
              {Posts.map((post) => (
                <div className="blog-card">
                  <Link to="/" className="card-link">
                    <h3>{post.title}</h3>
                    <br />
                    <p>
                      {post.author}, {post.date}
                    </p>
                    <br />
                    <p>{post.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        <aside className="blog-main-aside">
          <h2>Principais posts</h2>

          <ul>
            {Posts.map((post) => (
              <li>
                <Link to="/"> {post.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
