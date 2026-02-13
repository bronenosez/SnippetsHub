import "../Styles/Footer.css";
import AddIcon from "../Imgs/Add_Icon.png"

export default function Footer () {
    const AddButtonSize = 50;

    return (
        <footer>
            <button className="add_button">
                <img src={AddIcon} alt="Add Button" width={AddButtonSize} height={AddButtonSize} />
            </button>
            
        </footer>
    )
}