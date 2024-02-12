import Video_promo from "../assets/images/thermomix_mp4/thermomix_promo_video.mp4";

function Video() {
  return (
    <>
      <section className="container mx-auto text-center pb-5 ">
        <div className="relative ">
          <video className=" rounded-lg w-full" controls autoPlay muted>
            <source src={Video_promo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}

export default Video;
