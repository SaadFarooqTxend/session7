// components/pages/NewPage.jsx
import React, { useState, useEffect } from "react";

function NewPage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading with setInterval
  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading New Page...</h2> // Display loading message
      ) : (
        <h2>This is the New Page!</h2> // Display actual content after loading
      )}
    </div>
  );
}

export default NewPage;
