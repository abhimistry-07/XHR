import styles from "../styles/mainComp.module.css";

function PostList({ posts }) {
  return (
    <div>
      <h2>Existing Posts</h2>
      <div className={styles.dataDiv}>
        {posts?.map((elem) => (
          <div key={elem.id} className={styles.individualPost}>
            <p>
              <span>Title: </span>
              {elem.title}
            </p>
            <p>
              <span>Body: </span>
              {elem.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
