const Banner = ({ src, alt }) => {
  return (
    <>
      <div className="w-full xs:h-32 md:h-40 lg:h-60 xl:h-80">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    </>
  );
};

export default Banner;
