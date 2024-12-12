import Blurb from "../Blurb";
import Button from "../Button";

const ButtonCard = ({
  blurbText,
  blurbTextColor,
  buttonText,
  buttonOnClick,
  buttonBgColor,
  buttonTextColor,
}) => {
  return (
    <div className="flex flex-col items-center p-5  border-accentAqua border-y-2">
      <Blurb text={blurbText} textColor={blurbTextColor} />
      <Button
        text={buttonText}
        onClick={buttonOnClick}
        backgroundColor={buttonBgColor}
        textColor={buttonTextColor}
      />
    </div>
  );
};

export default ButtonCard;
