import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import Spinner from "./components/Spinner";

const API_ENDPOINT = "https://api.adviceslip.com/advice";

const App = () => {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchAdvice = () => {
    setIsLoading(true);
    axios
      .get(API_ENDPOINT)
      .then((res) => {
        setId(res.data.slip.id);
        setAdvice(res.data.slip.advice);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="px-[5%] flex justify-center items-center h-screen">
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-center text-slate-100 relative top-40">
          {errorMessage}
        </p>
      ) : (
        <Card id={id} advice={advice} fetchAdvice={fetchAdvice} />
      )}
    </div>
  );
};

export default App;
