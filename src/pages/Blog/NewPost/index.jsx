import React, { useState, useEffect } from "react";
import Posts from "../../../server/posts.json";
import { Link, Redirect, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./style.css";

import { useAuth } from "../../../context/auth";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [confirm, setConfirm] = useState(false);

  const { auth, setAuth } = useAuth();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setConfirm(false);
    }, 2000);
  }, [confirm]);

  function handleSubmit(event) {
    const getDate = new Date();
    const id = String(Posts.length);
    const date = `${getDate.getDay()}/${getDate.getMonth()}/${getDate.getFullYear()}`;

    const NewPost = {
      id: id,
      title: title,
      author: author,
      description: description,
      content: content,
      date: date,
    };

    Posts.push(NewPost);
    console.log(NewPost);
    console.log(Posts);

    setTitle("");
    setAuthor("");
    setDescription("");
    setContent("");
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

  function handleContent(e) {
    setContent(e.target.value);
  }

  return (
    <>
      {auth ? (
        <div className="container-new-post">
          <button
            onClick={() => {
              setAuth(false);
              history.push("/admin");
            }}
          >
            SAIR
          </button>

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
                  placeholder="descrição ou resumo"
                  onChange={handleDescription}
                  value={description}
                />
                <br />
              </div>
              <textarea
                autoFocus
                name="post_content"
                id="post_content"
                required
                rows="30"
                cols="100"
                placeholder="Insira o texto aqui"
                value={content}
                onChange={handleContent}
              />
              <ReactMarkdown>{content}</ReactMarkdown>
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
      ) : (
        <Redirect to="/admin" />
      )}
    </>
  );
}
