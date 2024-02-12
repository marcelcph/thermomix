import React, { useState, useEffect } from "react";
import BlogUrl from "../utils/BlogUrl.jsx";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleBlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${BlogUrl.WORDPRESS_BLOG_URL}/${blogId}`
        );
        setBlog(response.data);

        // Fetch featured media details if it exists
        if (response.data.featured_media) {
          const mediaResponse = await axios.get(
            response.data._links["wp:featuredmedia"][0].href
          );
          setBlog((prevBlog) => ({
            ...prevBlog,
            featured_media_url: mediaResponse.data.source_url,
          }));
        }
      } catch (error) {
        console.error("error fecthing blog details", error);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (!blog) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className="p-5 sm:p-32 md:pt-32 bg-white">
        <div className="">
          <img
            src={blog.featured_media_url || "placeholder.jpg"} // Use featured_media_url here
            alt={blog.title.rendered}
            className="mx-auto max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-none">
          <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <h1 href="#" className="font-bold text-3xl mb-2 text-primary">
                {blog.title.rendered}
              </h1>
              <p className="my-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.content.rendered,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;