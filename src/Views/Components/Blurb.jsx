const Blurb = ({ text, textColor }) => {
  return (
    <>
      <p className={`p-5 p text-center text-${textColor}`}>{text}</p>
    </>
  );
};

export default Blurb;
