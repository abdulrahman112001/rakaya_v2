import { useState } from "react";
import Link from "next/link";
const CustomNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div className="relative navbar">
      <button onClick={handleClick}>
        <div
          id="icon"
          className={`block md:hidden  ${anchorEl ? "change" : ""}`}
          onChange={() => setAnchorEl(true)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </button>

      {anchorEl && (
        <ul
          keepMounted
          id="simple-menu"
          className="absolute bg-[#e6e2de] py-2 rounded-2xl"
          style={{ right: "-85px" }}
          onClose={handleClose}
        >
          <li onClick={handleClose} className="px-2 py-0">
            <Link
              href="/"
              className=" text-sm font-bold text-secondary hover:text-[#c9b171] p-1 "
            >
              الرئيسية
            </Link>
          </li>
          <li onClick={handleClose} className="px-2 py-0">
            <Link
              href="/About"
              className=" text-sm font-bold text-secondary hover:text-[#c9b171] p-1 "
            >
              من نحن
            </Link>
          </li>
          <li onClick={handleClose} className="px-2 py-0">
            <Link
              href="/values"
              className=" text-sm font-bold text-secondary hover:text-[#c9b171] p-1 "
            >
              قيمنا
            </Link>
          </li>
          <li onClick={handleClose} className="px-2 py-0">
            <Link
              href="/services"
              className=" text-sm font-bold text-secondary hover:text-[#c9b171] p-1 "
            >
              خدماتنا
            </Link>
          </li>
          <li onClick={handleClose} className="px-2 py-0">
            <Link
              href="/partners"
              className=" text-sm font-bold text-secondary hover:text-[#c9b171] p-1 "
            >
              شركائنا
            </Link>
          </li>
          <li onClick={handleClose} className="px-2 py-0">
            <Link
              href="/"
              className=" text-sm font-bold text-secondary hover:text-[#c9b171]"
            >
              البوابة الإلكترونية
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CustomNavbar;
