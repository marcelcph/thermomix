import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogUrl from "../utils/BlogUrl.jsx";
import Loading from "../Loading/Loading";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("da-DK", options);
}

function WordPressPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(BlogUrl.WORDPRESS_BLOG_URL);

      if (response.data.length > 0) {
        const formattedPosts = response.data.map((post) => ({
          ...post,
          formattedDate: formatDate(post.date),
        }));
        setPosts(formattedPosts);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="">
          <div className="container py-10 mx-auto">
            <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.map((post) => (
                <div key={post.id} className="bg-neutral rounded-xl p-5">
                  <div className="relative ">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={post.jetpack_featured_media_url}
                      alt={post.title.rendered}
                    />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-primary">
                    {post.title.rendered}
                  </h2>
                  <p className="text-gray-500">{post.formattedDate}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="block text-center mt-4 py-2 px-4 bg-primary font-bold text-white rounded-md transition duration-300 hover:bg-green-400"
                  >
                    Læs mere
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default WordPressPosts;
