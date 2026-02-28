import '../Styles/Profile.css';
import RegistrationForm from '../Components/RegistrationForm';

export default function Profile () {

    const isSign = false //backend state log in or not

    return (
        <>
            {
                isSign ? <p>You already login</p> : <RegistrationForm />  
            }
        </>
    )
}