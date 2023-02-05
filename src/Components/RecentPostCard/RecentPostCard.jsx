import React from "react";
import "./RecentPostCard.scss";

const RecentPostCard = ({ post }) => {
  return (
    <div className="card" onClick={() => (window.location.href = post.link)}>
      <img src={post.jetpack_featured_media_url} alt="Post Cover" />
      <div className="card-body">
        <h5
          className="card-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered.trim() }}
        ></h5>

        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.trim() }}
        />
        <a href={post.link} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default RecentPostCard;
