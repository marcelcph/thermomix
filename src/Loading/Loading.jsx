import logo from "../assets/images/logo/Logo_uden_tekst.png";

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div className="text-center animate-wiggle-more">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loading;
