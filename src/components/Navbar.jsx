import React from "react";
import { useState, useEffect } from "react";
import resume from "../assets/Resume.pdf";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(360deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

/* To add: navbar props to allow better a input */
const Navbar = () => {
  const [mobileNavShown, setMobileNavShown] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth >= 1024 ? false : true
  );

  const navBarToggle = () => {
    setMobileNavShown(!mobileNavShown);
  };

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobileScreen(window.innerWidth >= 1024 ? false : true)
    );
  }, [window.innerWidth]);

  const labels = ["about", "work experience", "projects", "contact"]
  const links = (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 items-center">
      {labels.map((label) => (
        <a key={label} href={"#" + label }className="hover:text-neutral-400">
        {label}
        </a>
      ))}
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="text-sky-500 hover:text-sky-700"
      >
        resume
      </a>
    </div>
  );
  return (
    <nav className="w-full lg:h-20 fixed top-0 left-0 z-50 p-4 lg:p-6 bg-white text-lg">
      <div className="w-full flex items-center">
        <a href="#home" className="text-sky-900">
          daniel
        </a>
        <div className="grow"></div>
        <div className="lg:hidden justify-self-end">
          <ExpandMore expand={mobileNavShown} onClick={navBarToggle}>
            <MenuIcon color="primary" />
          </ExpandMore>
        </div>
        {!isMobileScreen && <div className={`justify-self-end $`}>{links}</div>}
      </div>

      <Collapse in={!mobileNavShown} timeout={500}>
        {links}
      </Collapse>
    </nav>
  );
};

export default Navbar;
