import React, { useState, useEffect } from "react";
import Posts from "../../../server/posts.json";
import { Link } from "react-router-dom";
import "./style.css";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  }, [confirm]);

  function handleSubmit(event) {
    const getDate = new Date();

    const date = `${getDate.getDay()}/${getDate.getMonth()}/${getDate.getFullYear()}`;

    const NewPost = {
      title: title,
      author: author,
      description: description,
      date: date,
    };

    Posts.push(NewPost);
    console.log(NewPost);
    console.log(Posts);

    setTitle("");
    setAuthor("");
    setDescription("");
    setConfirm(true);

    event.preventDefault();
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <div className="container-new-post">
      <h1>Nova Postagem</h1>
      <br />
      <br />
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="post_title"
            id="post_title"
            placeholder="Titulo"
            required
            onChange={handleTitle}
            value={title}
          />
          <br />
          <input
            type="text"
            name="post_author"
            id="post author"
            placeholder="Autor"
            required
            onChange={handleAuthor}
            value={author}
          />
          <br />
          <div className="post_description">
            <input
              type="text"
              required
              name="post_description"
              id="post_description"
              placeholder="Texto"
              onChange={handleDescription}
              value={description}
            />
            <br />
          </div>
          <div className="buttons">
            <Link to="/blog">
              <button className="button button2">Cancelar</button>
            </Link>
            <button type="submit" className="button button1">
              Postar
            </button>
          </div>
        </form>

        {confirm ? <p>Cadastrado com sucesso</p> : null}
      </div>
    </div>
  );
}
