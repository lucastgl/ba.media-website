import { Button } from "../Styles/ButtonMobile"

function ButtonMobile(){
    const handleLinkClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <Button onClick={(event) => handleLinkClick(event, 'inicio')}> ˄ </Button>
    )
}

export default ButtonMobile