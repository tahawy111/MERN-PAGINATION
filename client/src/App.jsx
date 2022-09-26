import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {
  const pageNumber = useParams().pageNumber || 1;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:2000/get?page=${page}`);
        const { pages: totalPages, data } = await res.json();
        setPages(totalPages);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Some error occured");
      }
    };
    fetchPosts();
  }, [page]);

  return (
    <div className="app">
      <Pagination page={page} pages={pages} changePage={setPage} />
      <div className="app__posts">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} pages={pages} changePage={setPage} />
    </div>
  );
}

export default App;
