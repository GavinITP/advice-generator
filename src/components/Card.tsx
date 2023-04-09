const Card = () => {
  return (
    <div className="w-full bg-slate-700 text-slate-200 rounded-xl relative top-32 text-center px-4 hover:scale-[102%] ease-out duration-300 ">
      <h1 className="text-xs text-emerald-400 uppercase font-bold py-8">
        Advice #117
      </h1>
      <p className="font-bold text-2xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nobis.
      </p>
      <button className="rounded-[50%] w-16 h-16 bg-emerald-400 hover:bg-emerald-500">
        Random
      </button>
    </div>
  );
};

export default Card;
