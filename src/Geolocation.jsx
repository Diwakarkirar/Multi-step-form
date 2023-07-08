import { useState } from "react";
import { useEffect } from "react";
export default function Geolocation() {
  const [status, setStatus] = useState("Capturing geolocation...");

  useEffect(() => {
    // Function to handle successful geolocation capture
    const handleSuccess = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Update status to indicate confirmation of geolocation capture
      setStatus(`Geolocation captured: ${latitude}, ${longitude}`);
    };

    // Function to handle geolocation capture error
    const handleError = () => {
      setStatus("Error capturing geolocation.");
    };

    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // Request geolocation
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setStatus("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="p-4 bg-gray-200">
      <p>{status}</p>
    </div>
  );
}
