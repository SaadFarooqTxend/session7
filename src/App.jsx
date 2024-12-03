// App.jsx
import React, { Suspense } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";

// Lazy load the NewPage component
const NewPage = React.lazy(() => import("./components/pages/NewPage"));

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar /> {/* Use your existing Navbar */}
      <div className="location-info">
        <p>Current path: {location.pathname}</p>
      </div>

      {/* Add a link for the new lazy-loaded page */}
      <nav>
        <ul>
          <li>
            <Link to="/newpage">New Page</Link> {/* Link to the new lazy-loaded page */}
          </li>
        </ul>
      </nav>

      {/* Suspense to handle lazy loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/newpage" element={<NewPage />} /> {/* Lazy-loaded route */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
