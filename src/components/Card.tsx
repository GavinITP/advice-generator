import axios from "axios";
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://api.adviceslip.com/advice";

const Card = () => {
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

  if (isLoading)
    return (
      <p className="text-center text-slate-100 relative top-40">Loading...</p>
    );

  if (errorMessage)
    return (
      <p className="text-center text-slate-100 relative top-40">
        {errorMessage}
      </p>
    );

  return (
    <div className="w-full bg-slate-700 text-slate-200 rounded-xl relative top-32 text-center px-4 hover:scale-[102%] ease-out duration-300 ">
      <h1 className="text-xs text-emerald-400 uppercase font-bold py-8">
        Advice #{id}
      </h1>
      <p className="font-bold text-2xl">{advice}</p>
      <button
        onClick={fetchAdvice}
        className="rounded-[50%] w-16 h-16 bg-emerald-400 hover:bg-emerald-500"
      >
        Random
      </button>
    </div>
  );
};

export default Card;
