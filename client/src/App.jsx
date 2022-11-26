import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import { Pagination } from "@mui/material";

function App() {
  const pageNumber = useParams().pageNumber || 1;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:2000/get?page=${page}`);
        const { pages: totalPages, data, total } = await res.json();
        setPages(totalPages);
        setPosts(data);
        setLoading(false);
        setCount(total);
      } catch (error) {
        setLoading(false);
        setError("Some error occured");
      }
    };
    fetchPosts();
  }, [page]);

  return (
    <div className="app">
      <Pagination
        defaultPage={1}
        count={pages}
        page={page}
        color="primary"
        style={{ margin: "20px 0" }}
        onChange={(e, value) => setPage(value)}
      />
      <div className="app__posts">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination
        defaultPage={1}
        count={pages}
        page={page}
        color="primary"
        style={{ margin: "20px 0" }}
        onChange={(e, value) => setPage(value)}
      />
    </div>
  );
}

export default App;
