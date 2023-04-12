import Dice from "./Dice";
import PatternDivider from "./PatternDivider";

interface Props {
  id: string;
  advice: string;
  fetchAdvice: () => void;
}

const Card = ({ id, advice, fetchAdvice }: Props) => {
  return (
    <div className="max-w-lg bg-slate-700 text-slate-200 rounded-xl flex flex-col items-center text-center px-8 pb-8 pt-4 hover:scale-[102%] ease-out duration-300 shadow-xl hover:shadow-2xl relative">
      <h1 className="text-xs text-emerald-400 uppercase font-bold py-8 tracking-[.25rem]">
        Advice #{id}
      </h1>
      <p className="font-bold text-2xl">"{advice}"</p>
      <PatternDivider />
      <button
        onClick={fetchAdvice}
        className="rounded-[50%] w-16 h-16 bg-emerald-400 hover:shadow-[0px_0px_30px_10px_rgba(52,211,153,0.5)] ease-out duration-300 absolute bottom-0 translate-y-[50%]"
      >
        <Dice />
      </button>
    </div>
  );
};

export default Card;
