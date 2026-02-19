import '../Styles/MostUsed.css';
import "../Styles/Header.css";
import { useNavigate } from 'react-router-dom';

import Login_Icon from '../Imgs/Login_Icon.png';

export default function Header () {

    const LoginIconSize = 60 
    const redirect = useNavigate()

    return (
        <header>
            <div className="logo" onClick={() => redirect('/')}>
                Snippet.hub
            </div>
            
            <div className="login" onClick={() => redirect('/Profile')}>
                <img src={Login_Icon} alt="Login Icon" width={LoginIconSize} height={LoginIconSize}/>
            </div>
        </header>
    )
}