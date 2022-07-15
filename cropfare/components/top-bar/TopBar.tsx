import { FunctionComponent } from "react";
import TopBarImage from "./../../assets/svgs/top-bar.svg";
import BarText from "../../components/top-bar/BarText";
import SearchIcon from "./SearchIcon";

interface TopBarProps {
  text: string;
  name: string;
  setIsSearchWindowVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: FunctionComponent<TopBarProps> = ({
  text,
  name,
  setIsSearchWindowVisible,
}: TopBarProps) => {
  return (
    <>
      <TopBarImage />
      <BarText text={text} name={name} />
      <SearchIcon setIsSearchWindowVisible={setIsSearchWindowVisible} />
    </>
  );
};

export default TopBar;
