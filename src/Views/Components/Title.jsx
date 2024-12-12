const Title = ({ text }) => {
  return (
    <div className="flex justify-center">
      <h1 className="h1 bg-secondaryRed border-y-4 border-accentAqua p-3 text-white text-center w-full">
        {text}
      </h1>
    </div>
  );
};

export default Title;
