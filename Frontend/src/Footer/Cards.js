import { memo } from "react"
import visa from '../Assets/footer-Assests/visa.webp'
import AE from '../Assets/footer-Assests/american-express.webp'
import DC from '../Assets/footer-Assests/diners-club.webp'
import Maestro from '../Assets/footer-Assests/maestro.jpg'
import MC from '../Assets/footer-Assests/mastercard.webp'
import NB from '../Assets/footer-Assests/net-banking.webp'
import rupay from '../Assets/footer-Assests/rupay.webp'
import wallet from '../Assets/footer-Assests/wallet.webp'

const Cards =()=>{
    return (
        <div className="cards-main">
            <p>We accept:</p>
            <img src={visa} alt=" visa card "/>
            <img src={AE} alt="American Express "/>
            <img src={MC} alt="Master Card "/>
            <img src={DC} alt="diners club "/>
            <img src={Maestro} alt="Maestro "/>
            <img src={NB} alt="Net Banking "/>
            <img src={rupay} alt="rupay "/>
            <img src={wallet} alt="American Express"/>
            <hr/>

        </div>

    );


}
export default memo(Cards);