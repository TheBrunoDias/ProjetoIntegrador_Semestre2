import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../../../components/blogHeader";
import "./style.css";

const Posts = [
  {
    title: "Titulo da Postagem",
    author: "Bruno Sousa Dias",
    date: "03/12/2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default function BlogMain() {
  return (
    <div>
      <BlogHeader title="Bem-Vindo" subtitle="Blog Uniamericon" />

      <div className="blog-main-container">
        <section className="blog-main-posts">
          <h2>Ultimas Postagens</h2>

          <div className="cards-container">
            {Posts.map((post) => (
              <div className="blog-card">
                <Link to="/" className="card-link">
                  <h3>{post.title}</h3>
                  <br />
                  <p>
                    Autor: {post.author}, {post.date}
                  </p>
                  <br />
                  <p>{post.description}</p>
                </Link>
              </div>
            ))}
          </div>
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
