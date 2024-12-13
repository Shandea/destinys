const FlipCardSide = ({ flipTheCard, children }) => {
  return (
    <>
      <div
        className="flex justify-center items-center h-96 w-64 bg-secondaryRed rounded-3xl mb-4 cursor-pointer"
        onClick={flipTheCard}
      >
        {children}
      </div>
    </>
  );
};

export default FlipCardSide;
