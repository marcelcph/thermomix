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
        const formattedPosts = response.data.map(async (post) => {
          const mediaResponse = await axios.get(
            post._links["wp:featuredmedia"][0].href
          );
          return {
            ...post,
            formattedDate: formatDate(post.date),
            mediaUrl: mediaResponse.data.source_url, // assuming source_url contains the image URL
          };
        });

        const resolvedPosts = await Promise.all(formattedPosts);
        setPosts(resolvedPosts);
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
        <section className="animate-fade">
          <div className="container py-10 mx-auto">
            <div className="grid grid-cols-1 gap-4 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 ">
              {posts.map((post) => (
                <div key={post.id} className="bg-primary rounded-xl p-5">
                  <div className="relative ">
                    <img
                      className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                      src={post.mediaUrl} // Use mediaUrl here
                      alt={post.title.rendered}
                    />
                  </div>
                  <h2 className="mt-6 text-xl font-bold text-white">
                    {post.title.rendered}
                  </h2>
                  <p className="text-gray-100">{post.formattedDate}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="btn btn-block  text-center mt-4 py-2 px-4 bg-green-700 font-bold text-white rounded-xl border-0 transition duration-300 hover:bg-green-400"
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
