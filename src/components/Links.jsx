import { Link } from "react-router-dom";

function Links() {
  return (
    <>
      <div className="container mx-auto text-center">
        <h1>Links</h1>
        <p>Her er nogle links til andre sider</p>
      </div>
      <section className="container mx-auto text-center pb-5 grid grid-cols-3 gap-4">
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              <a href="https://www.thermomix.dk/" className="btn btn-primary">
                Visit Thermomix
              </a>
              <img
                src="thermomix_image_url"
                alt="Thermomix"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              <a href="https://www.example.com/" className="btn btn-primary">
                Visit Example
              </a>
              <img
                src="example_image_url"
                alt="Example"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="bg-primary rounded-xl">
              <a href="https://www.example2.com/" className="btn btn-primary">
                Visit Example2
              </a>
              <img
                src="example2_image_url"
                alt="Example2"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Links;
