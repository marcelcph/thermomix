import React, { useState, useEffect } from "react";
import BlogSingleUrl from "../utils/BlogSingleUrl.jsx";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleBlog() {
  const { slug } = useParams(); // Brug slug i stedet for blogId
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mediaLoading, setMediaLoading] = useState(true); // Tilføj media loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${BlogSingleUrl.WORDPRESS_BLOG_URL}?slug=${slug}` // Brug slug i API-kaldet
        );
        setBlog(response.data[0]);

        // Fetch featured media details if it exists
        if (response.data[0].featured_media) {
          const mediaResponse = await axios.get(
            response.data[0]._links["wp:featuredmedia"][0].href
          );
          setBlog((prevBlog) => ({
            ...prevBlog,
            featured_media_url: mediaResponse.data.source_url,
          }));
        }
        setMediaLoading(false); // Sæt media loading til false efter featured media er hentet
      } catch (error) {
        console.error("Fejl ved hentning af blogoplysninger", error);
      } finally {
        setLoading(false); // Sæt loading til false efter al data er hentet
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading || mediaLoading) {
    return <Loading />; // Vis loading komponenten mens data hentes
  }

  return (
    <>
      <div className="p-5 sm:p-32 md:pt-32 !bg-white ">
        <div className=" animate-fade">
          <img
            src={blog.featured_media_url || "placeholder.jpg"} // Brug featured_media_url her
            alt={blog.title.rendered}
            className="mx-auto max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-3xl mx-auto bg-none animate-fade">
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
