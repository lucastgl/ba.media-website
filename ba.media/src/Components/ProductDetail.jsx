import {ModalContainer} from "../styles/ProductDetailComponents"
import { gallery } from '../mocks/proyects.js'

const ProductDetail = ({productSelected, onClose}) => {

    const proyect = gallery.find(p => p.id === productSelected)
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