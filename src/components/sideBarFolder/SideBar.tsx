import "./sidebar.scss";
import { BiHomeHeart } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import { BsEyeglasses } from "react-icons/bs";
import { MdTurnedInNot } from "react-icons/md";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="bgSideBar d-flex flex-column justify-content-between align-items-center py-4">
      <div>
        <p className="logoText">Books</p>
      </div>
      <div>
        <div>
          <Link className="linkNav" to={"/"}>
            <div tabIndex={1} className="bgIcon">
              <BiHomeHeart className="iconSideBar" />
            </div>
          </Link>
        </div>
        <div>
          <div tabIndex={2} className="bgIcon">
            <MdMenuBook className="iconSideBar" />
          </div>
        </div>
        <div>
          <div tabIndex={3} className="bgIcon">
            <BsEyeglasses className="iconSideBar" />
          </div>
        </div>
        <div>
          <Link className="linkNav" to={"/saved"}>
            <div tabIndex={4} className="bgIcon">
              <MdTurnedInNot className="iconSideBar" />
            </div>
          </Link>
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
