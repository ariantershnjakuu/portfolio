import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
