import { useState, useEffect } from "react";
import EventUrl from "../utils/EventUrl";
import axios from "axios";
import Loading from "../Loading/Loading";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(EventUrl.WORDPRESS_BLOG_URL);
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const formattedDate = `${day}, ${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}, ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    return formattedDate;
  };

  return (
    <div className="bg-white pt-32">
      <h1 className="text-4xl font-extrabold text-center">Eventkalender</h1>
      <div className="container mx-auto py-8">
        {loading ? (
          <Loading />
        ) : (
          <table className="w-full bg-white border-collapse border  animate-fade rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-primary text-2xl">
                <th className="border  px-4 py-2 text-white">Dato</th>
                <th className="border  px-4 py-2 text-white">Eventsted</th>
                <th className="border  px-4 py-2 text-white">Beskrivelse</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border   text-lg">
                  <td className="border  px-4 py-2 text-black">
                    {formatDate(event.acf.eventdato)}
                  </td>
                  <td className="border  px-4 py-2 text-black">
                    {event.acf.eventsted}
                  </td>
                  <td className="border  px-4 py-2 text-black">
                    {event.acf.eventbeskrivelse}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default Events;
