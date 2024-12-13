const Blurb = ({ text, textColor }) => {
  return (
    <>
      <p className={`p-5 p text-center ${textColor}`}>{text}</p>
    </>
  );
};

export default Blurb;
