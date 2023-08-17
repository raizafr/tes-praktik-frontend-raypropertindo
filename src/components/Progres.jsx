const Progres = ({ icon, title, persen, colorClass }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center ">
          {icon}
          <span className="text-xs">{title}</span>
        </div>
        <span className="text-xs font-bold">{persen}%</span>
      </div>
      <progress
        className={`progress w-full ${colorClass}`}
        value={persen}
        max="100"
      ></progress>
    </div>
  );
};

export default Progres;
