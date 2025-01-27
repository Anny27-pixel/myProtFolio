
function Title(capabilities) {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-lg uppercase font-light text-colorfulText tracking-wide">{capabilities.title}</h3>
      <h1 className="text-4xl text-slate-300 font-bold capitalize">{capabilities.des}</h1>
    </div>
  );
}

export default Title;
