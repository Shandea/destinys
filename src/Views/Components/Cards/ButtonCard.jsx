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
      <a href={window.innerWidth <= 768 ? "tel:15206869449" : undefined}>
        <Button
          text={buttonText}
          onClick={buttonOnClick}
          backgroundColor={buttonBgColor}
          textColor={buttonTextColor}
        />
      </a>
    </div>
  );
};

export default ButtonCard;
