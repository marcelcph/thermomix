import logo from "../assets/images/logo/Logo_uden_tekst.png";

function Loading() {
  return (
    <div className="pt-32 pb-32 inset-0 flex items-center justify-center !bg-white  z-50">
      <div className="text-center animate-wiggle-more animate-infinite">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loading;
