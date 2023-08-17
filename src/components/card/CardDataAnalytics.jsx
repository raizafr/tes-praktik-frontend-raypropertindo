const CardDataAnalytics = ({ name, num, colorClass }) => {
  return (
    <>
      <div className={`border-l-4 rounded-l-md px-3 py-1 ${colorClass}`}>
        <span className="text-xs text-black text-opacity-50">{name}</span>
        <h4 className="font-semibold">{num}</h4>
        <hr />
      </div>
    </>
  );
};

export default CardDataAnalytics;
