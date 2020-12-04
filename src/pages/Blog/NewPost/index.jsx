import React, { useState } from "react";
import Posts from "../../../server/posts.json";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

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
    <div>
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
        <input
          type="text"
          name="post_author"
          id="post author"
          placeholder="Autor"
          required
          onChange={handleAuthor}
          value={author}
        />
        <input
          type="text"
          required
          name="post_description"
          id="post_description"
          placeholder="Descrição"
          onChange={handleDescription}
          value={description}
        />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}
