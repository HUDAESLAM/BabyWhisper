import { RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import router from "./Routes";
import Loading from "./components/loadingScreen/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isLoading ? <Loading /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
