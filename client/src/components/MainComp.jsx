import React, { useEffect, useState } from "react";
import styles from "../styles/mainComp.module.css";
import PostForm from "./PostForm";
import Loading from "./Loading";
import Error from "./Error";
import PostList from "./PostList";

function MainComp() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          //   console.log(JSON.parse(xhr.response));
          setPosts(JSON.parse(xhr.response));
          setIsLoading(false);
        }
      };
      xhr.send();
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log(error.message, "During fetching");
    }
  };

  const addPost = (postData) => {
    setIsLoading(true);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          setPosts([...posts, data]);
          alert("Post added successfully");
          // console.log(JSON.parse(xhr.response));
        } else {
          setError("Failed to add post");
        }
        setIsLoading(false);
      };

      xhr.send(JSON.stringify(postData));
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      console.log(error.message, "During posting");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.mainComp}>
      <PostForm addPost={addPost} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default MainComp;

// 200: "OK"
// 400: "Bad request"
// 404: "Page not found"
// 500: "Internal server error"
