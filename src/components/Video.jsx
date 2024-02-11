import { Animate } from "./InView";
import Video_promo from "../assets/images/thermomix_mp4/thermomix_promo_video.mp4";

function Video() {
  return (
    <>
      <Animate />
      <section
        className="container mx-auto text-center pb-5 "
        data-aos="zoom-in-down"
        data-aos-offset="500"
      >
        <div className="relative ">
          <video className=" rounded-lg " controls autoPlay muted>
            <source src={Video_promo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}

export default Video;
