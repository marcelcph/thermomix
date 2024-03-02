import { useState, useRef } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [address, setAddress] = useState("");
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Tilføjet isLoading-tilstand
  const modalRef = useRef();

  const options = [
    { label: "Jeg vil gerne kontaktes", value: "Jeg vil gerne kontaktes" },
    {
      label: "Jeg vil gerne have en demonstration af Thermomix",
      value: "Jeg vil gerne have en demonstration af Thermomix",
    },
    {
      label: "Jeg vil gerne høre mere om at blive Thermomixkonsulent",
      value: "Jeg vil gerne høre mere om at blive Thermomixkonsulent",
    },
  ];

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(value)) {
        // If the option is already selected, remove it
        return prevOptions.filter((option) => option !== value);
      } else {
        // If the option is not selected, add it
        return [...prevOptions, value];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Indikér at formularen bliver sendt

    try {
      const response = await fetch(
        "https://clever-replymailserver.vercel.app/send-email-thermomix",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            company,
            phone,
            email,
            message,
            selectedOptions,
            address,
            subscribeNewsletter,
          }),
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
        setSelectedOptions([]);
        setAddress("");
        setSubscribeNewsletter(false);
      } else {
        console.log("Message sending failed.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false); // Når handlingen er færdig, stop loading-indikatoren
    }
  };

  return (
    <>
      <section className="h-screen/3 bg-primary min-w-screen py-4" id="kontakt">
        <div className="container flex flex-col  px-6 py-12 mx-auto ">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:mx-6 ">
              <h1 className=" font-bold text-white">Bliv kontaktet</h1>
              <p className="max-w-2xl mt-5 text-white">
                Udfyld formularen og vi vil kontakte dig indenfor 24 timer.
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
                <p className="flex items-start text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    +45 52 23 00 22
                  </span>
                </p>
                <p className="flex items-start text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-9 h-9 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <span className="mx-2 text-white truncate w-72">
                    Parkvej 1F, 7 4000 Roskilde
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
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="block mb-2  text-gray-600  mt-6 md:mt-0">
                        Ønsket dato & tid
                      </label>
                      <input
                        type="datetime-local"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="block w-full px-12 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 focus:outline-none focus:ring"
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
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 focus:outline-none focus:ring"
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
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-gray-600">Adresse</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 focus:outline-none focus:ring"
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
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-gray-600">
                      Vælg venligst hvad din henvendelse drejer sig om (*)
                    </label>
                    <select
                      multiple
                      value={selectedOptions}
                      onChange={handleSelectChange}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-primary focus:outline-none focus:ring"
                    >
                      {options.map((option) => (
                        <option
                          required
                          key={option.value}
                          value={option.value}
                          className={`flex items-center py-1 rounded-xl p-2 my-2 ${
                            selectedOptions.includes(option.value)
                              ? "!bg-primary text-white"
                              : "hover:bg-green-100"
                          }`}
                        >
                          <span className="mr-2">{option.label}</span>
                          {selectedOptions.includes(option.value) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M17.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </option>
                      ))}
                    </select>
                    ;
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="mb-2 text-gray-600">
                      Tilmeld dig nyhedsbrevet{" "}
                      <input
                        type="checkbox"
                        checked={subscribeNewsletter}
                        onChange={(e) =>
                          setSubscribeNewsletter(e.target.checked)
                        }
                        className="checkbox checkbox-primary align-middle ml-2"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                    disabled={isLoading} // Deaktiver knappen når der loades
                  >
                    {isLoading ? "Sender..." : "Bliv Kontaktet"}
                  </button>
                  <dialog ref={modalRef} id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box bg-white">
                      <button className="btn btn-sm btn-ghost absolute right-2 top-2 text-primary">
                        ✕
                      </button>
                      <h3 className="font-bold text-primary">Sådan!</h3>
                      <p className="py-4">
                        Tak for din mail. Vi vender tilbage til dig indenfor 24
                        timer.
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
