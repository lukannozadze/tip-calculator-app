import splitterPath from "../Images/SPLITTER.png";
const Header = () => {
  return (
    <header className="flex justify-center ">
      <div className="mt-[50px] lg:mt-[113px] 2xl:mt-[163px]">
        <img src={splitterPath} alt="splitter initials" />
      </div>
    </header>
  );
};
export default Header;
