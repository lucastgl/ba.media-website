import { Button } from "../Styles/ButtonMobile"
import {FaAngleUp} from "react-icons/fa"
import { useState, useEffect } from 'react';

const ButtonMobile = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const onScroll = () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 200) {
          setShowButton(true);
      } else {
          setShowButton(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showButton &&
        <Button onClick={(event) => handleLinkClick(event, 'inicio')}>
          <FaAngleUp/>
        </Button>
      }
    </>
  );
}

export default ButtonMobile