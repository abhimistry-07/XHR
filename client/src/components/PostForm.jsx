import React, { useState } from "react";
import styles from "../styles/mainComp.module.css";

function PostForm({ addPost }) {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ title: "", body: "" });
  };

  return (
    <div className={styles.postForm}>
      <h2>Add new post</h2>
      <form onSubmit={handleSubmit} className="">
        <label>
          Title:
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <br />
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default PostForm;
