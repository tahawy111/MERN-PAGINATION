import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  // const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:4000/posts?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, post }) => {
        console.log({ totalPages, post });
        setPosts(post);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);
  return (
    <div className="App">
      <h3>Page of {pageNumber + 1}</h3>
      {posts.map((post) => (
        <div className="post" key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.text}</p>
        </div>
      ))}

      <button onClick={() => setPageNumber(0)}>&lt;&lt;</button>
      {pages.map((pageIndex) => {
        // setCurrentIndex(pageIndex);
        return (
          <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
            {pageIndex + 1}
          </button>
        );
      })}
      <button>&gt;&gt;</button>
    </div>
  );
}

export default App;
