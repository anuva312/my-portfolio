import "./leftNavBar.css";
import { useState, useEffect, useRef } from "react";

export default function LeftNavBar({ onClickNavItem }) {
  const [isNavBarOpened, setIsNavBarOpened] = useState(false);
  const leftNavBarRef = useRef(null);

  // To close drawer on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (
        leftNavBarRef.current !== null &&
        !leftNavBarRef.current.contains(e.target)
      ) {
        setIsNavBarOpened(!isNavBarOpened);
      }
    };

    if (isNavBarOpened) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isNavBarOpened]);

  return (
    <div className="left-nav-bar-main-container">
      <div className={`${isNavBarOpened ? "blur-background" : ""}`}>
        <div ref={leftNavBarRef}>
          <div className="left-nav-bar-menu-icon-container">
            <span
              className="material-symbols-outlined left-nav-bar-menu-icon"
              onClick={() => {
                setIsNavBarOpened(true);
              }}
            >
              menu
            </span>
          </div>
          {isNavBarOpened ? (
            <div className="left-nav-bar-container">
              <div
                className="left-nav-bar-item"
                onClick={() => {
                  setIsNavBarOpened(false);
                  onClickNavItem("about-section");
                }}
              >
                about me
              </div>
              <div
                className="left-nav-bar-item"
                onClick={() => {
                  setIsNavBarOpened(false);
                  onClickNavItem("skills-section");
                }}
              >
                skills
              </div>
              <div
                className="left-nav-bar-item"
                onClick={() => {
                  setIsNavBarOpened(false);
                  onClickNavItem("projects-section");
                }}
              >
                projects
              </div>
              <div
                className="left-nav-bar-item"
                onClick={() => {
                  setIsNavBarOpened(false);
                  onClickNavItem("contact-section");
                }}
              >
                contact me
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
