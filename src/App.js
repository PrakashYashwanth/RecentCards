import React, { useEffect, useState } from "react";
import RecentPostCard from "./Components/RecentPostCard/RecentPostCard";
import fetchPosts from "./utils/util";
import "./App.scss";
import Loader from "./Components/Loader/Loader";
import KnockoutScreen from "./Components/KnockoutScreen/KnockoutScreen";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAllPosts = async () => {
    try {
      const response = await fetchPosts();
      setData(response.data);
    } catch (Error) {
      setError(Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  if (loading) return <Loader />;

  if (error) return <KnockoutScreen error={error} />;

  if (!loading && !error) {
    return (
      <div className="container">
        <h1 className="title">Recent Posts</h1>
        <div className="card-container">
          {data.length &&
            data.map((post) => {
              return <RecentPostCard key={post.id} post={post} />;
            })}
        </div>
      </div>
    );
  }
};

export default App;
