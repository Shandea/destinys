const CardTitle = ({ cardTitle }) => {
  return (
    <>
      <div className="bg-secondaryRed flex items-center justify-center w-64 h-12 rounded-xl p-1 mb-4">
        <p className="text-xl text-white text-center">{cardTitle}</p>
      </div>
    </>
  );
};

export default CardTitle;
