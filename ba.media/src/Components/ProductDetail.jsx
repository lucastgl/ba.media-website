import {ModalContainer} from "../styles/ProductDetailComponents"
import { galleryPage } from '../mocks/proyects.js'
//Que el product detail consuma el listado de componentes completo
const ProductDetail = ({productSelected, onClose}) => {

    const proyect = galleryPage.find(p => p.id === productSelected)
    
    return (
        <>
            {
                productSelected !== undefined && 
                (
                    <ModalContainer>
                        <span>{proyect.title}</span>
                        <button onClick={onClose}>X</button>
                    </ModalContainer>
                )
            }
        </>
    )
}

export default ProductDetail