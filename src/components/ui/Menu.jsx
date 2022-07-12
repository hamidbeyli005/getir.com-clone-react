import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";

function Menu({ title, items }) {
  const windowWidth = useWindowWidth();

  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {});
  const toggleCollapse = () => {
    if (windowWidth <= 800) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (windowWidth <= 800) {
      setIsOpen(false);
    }
    if (windowWidth > 800) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <div className="list">
      <div className="listHeader" onClick={toggleCollapse}>
        {title}
        {windowWidth <= 800 ? (
          <div className="arrow">
            <IoIosArrowDown
              style={ {transform: isOpen?'rotate(180deg)':null} }
            />
          </div>
        ) : null}
      </div>

      <ul>
        <Collapse isOpened={isOpen}>
          {items.map((item, key) => (
            <li key={key}>
              <a href="/">{item.title}</a>
            </li>
          ))}
        </Collapse>
      </ul>
    </div>
  );
}

export default Menu;
