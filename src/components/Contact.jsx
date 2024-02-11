import { useState, useRef } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const modalRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the backend
    try {
      const response = await fetch(
        "https://clever-replymailserver.vercel.app/send-email-thermomix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, company, phone, email, message }),
        }
      );

      if (response.ok) {
        window.my_modal_3 = modalRef.current;
        window.my_modal_3.showModal();

        // Reset form fields after successful submission
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        console.log("Message sending failed.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <section className="h-screen/3 bg-primary min-w-screen py-4" id="kontakt">
        <div className="container flex flex-col  px-6 py-12 mx-auto ">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6 ">
              <h1 className=" font-bold ">Book en demo</h1>
              <p className="max-w-2xl mt-5">
                Vi vil gerne vise dig, hvordan en Thermomix kan hjælpe dig med
                at gøre madlavning til en leg. Udfyld formularen, og vi vil
                kontakte dig for at aftale en demonstration af maskinen.
              </p>
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2 pt-40 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-9 h-9 mx-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-2 text-white truncate w-72">
                    <a href="mailto:info@thermomixfan.dk">
                      info@thermomixfan.dk
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
                <h1 className=" font-bold text-gray-700 ">Kontaktformular</h1>
                <form className="mt-4" onSubmit={handleSubmit}>
                  <div className="flex-none md:flex md:justify-between">
                    <div className="">
                      <label className="block mb-2 text-gray-600 ">
                        Navn (*)
                      </label>
                      <input
                        required
                        type="text"
                        value={name}
                        pattern="^[A-Za-zÅå\s]+"
                        title="Kun bogstaver fra A til Å er tilladt"
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="block mb-2  text-gray-600  mt-6 md:mt-0">
                        Dato
                      </label>
                      <input
                        type="date"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="block w-full px-12 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2  text-gray-600 ">
                      Telefon (*)
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      pattern="[0-9+]+"
                      title="Kun numre og plus tegn (+) er tilladt"
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2  text-gray-600 ">
                      Email adresse (*)
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      pattern="^[^<>]*$"
                      title="intast en gyldig email adresse"
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2  text-gray-600 ">
                      Eventuel besked
                    </label>
                    <input
                      type="text"
                      value={message}
                      pattern="^[^<>]*$"
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Bliv Kontaktet
                  </button>
                  <dialog ref={modalRef} id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                      <button className="btn btn-sm btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                      <h3 className="font-bold ">Sådan!</h3>
                      <p className="py-4">
                        Tak for din mail. Vi vender tilbage hurtigst muligt.
                      </p>
                    </form>
                  </dialog>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
