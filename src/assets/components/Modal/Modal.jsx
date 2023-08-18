const Modal = ({children, estado, cambiarEstado}) => {

    return(
        <>
        {estado && 
            <div>
                {children}
            </div>
        }
        </>
    )
}

export default Modal;