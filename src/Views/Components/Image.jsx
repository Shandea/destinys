const Image = ({ src, alt,borderRadius, border, width, height }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-${borderRadius} border-${border} w-full h-auto`}
        style={{ width, height }}
      />
    );
  };
  
  export default Image;