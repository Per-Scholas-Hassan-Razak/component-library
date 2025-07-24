import type { AlertBoxProps} from "../types"


const AlertBox = ({type, message, onClose, children}:AlertBoxProps) => {


    return(
        <div className = {`alert alert-${type}`}> 
            <span className="alert-message">{message}</span>
            <button className="alert-button" onClick={onClose}>X</button>
            {children}
        </div>
    )

}

export default AlertBox