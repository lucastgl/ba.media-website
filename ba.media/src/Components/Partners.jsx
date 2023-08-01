import gif2 from "../Images/gif2.gif";
import images from "../Images/images.js";
import {H3, H5, DivContent,GIF, ColumnWrapper } from "../Styles/Partners";


function Partners(){
    return(
        <DivContent id="partners" >

            <H5>CONFIANZA, CALIDAD Y RESULTADOS</H5> 
            <H3>Nuestros <span>socios</span><GIF src={gif2} alt=""/></H3>
            <div style={{ overflowX: "hidden" }}>
            <ColumnWrapper>
                {images.map((image,index) => (
                    <img src={image.img} key={index} alt={image.alt} />
                    ))}
            </ColumnWrapper>
            </div>
            
        </DivContent>
    )
}

export default Partners