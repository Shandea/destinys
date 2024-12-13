import Button from "../Components/Button";
import Blurb from "../Components/Blurb";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Blurb text="Welcome to our site!" textColor="text-primaryBlue" />
      <Button text="Click Me" backgroundColor="bg-secondaryRed" textColor="text-primaryBlue" />
    </>
  );
};
export default Home;