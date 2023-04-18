import "./sidebar.scss";
import { BiHomeHeart } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import { BsEyeglasses } from "react-icons/bs";
import { MdTurnedInNot } from "react-icons/md";

export const SideBar = () => {
  return (
    <div className="bgSideBar d-flex flex-column justify-content-between align-items-center py-4">
      <div>
        <p className="logoText">Books</p>
      </div>
      <div>
        <div>
          <div className="bgIcon">
            <BiHomeHeart className="iconSideBar" />
          </div>
        </div>
        <div>
          <div className="bgIcon">
            <MdMenuBook className="iconSideBar" />
          </div>
        </div>
        <div>
          <div className="bgIcon">
            <BsEyeglasses className="iconSideBar" />
          </div>
        </div>
        <div>
          <div className="bgIcon">
            <MdTurnedInNot className="iconSideBar" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};
