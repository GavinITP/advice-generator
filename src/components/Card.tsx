interface Props {
  id: string;
  advice: string;
  fetchAdvice: () => void;
}

const Card = ({ id, advice, fetchAdvice }: Props) => {
  return (
    <div className="max-w-xl bg-slate-700 text-slate-200 rounded-xl text-center px-4 hover:scale-[102%] ease-out duration-300 ">
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
