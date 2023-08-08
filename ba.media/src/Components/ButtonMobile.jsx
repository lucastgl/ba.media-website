import { Button } from "../Styles/ButtonMobile"
import {FaAngleUp} from "react-icons/fa"

function ButtonMobile(){
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <Button onClick={(event) => handleLinkClick(event, 'inicio')}>  <FaAngleUp/> </Button>
    )
}

export default ButtonMobile