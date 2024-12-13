const CardTitle = ({ cardTitle }) => {
  return (
    <>
      <div className="bg-secondaryRed w-64 h-12 rounded-xl p-1 mb-4">
        <h2 className="h2 text-white text-center">{cardTitle}</h2>
      </div>
    </>
  );
};

export default CardTitle;
