import '../Styles/MostUsed.css';
import "../Styles/Header.css";

import Login_Icon from '../Imgs/Login_Icon.png';

export default function Header () {

    const LoginIconSize = 60 

    return (
        <header>
            <div className="logo">
                Snippets.hub
            </div>
            
            <div className="login">
                <img src={Login_Icon} alt="Login Icon" width={LoginIconSize} height={LoginIconSize}/>
            </div>
        </header>
    )
}