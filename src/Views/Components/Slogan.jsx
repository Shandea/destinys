const Slogan = ({ text, src, alt }) => {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className=" mt-12">
          {text && (
            <p className="p text-center text-primaryBlue mb-8">{text}</p>
          )}
        </div>
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute top-1/2 w-full h-[5%] bg-accentAqua"></div>
          <img src={src} alt={alt} className="relative w-20 h-20" />
        </div>
      </section>
    </>
  );
};

export default Slogan;
