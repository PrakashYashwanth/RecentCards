import axios from "axios";

const fetchPosts = () => {
  return axios.get(
    "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
  );
};

export default fetchPosts;
