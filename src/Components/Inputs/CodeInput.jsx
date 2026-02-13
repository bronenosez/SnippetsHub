import "../../Styles/Inputs.css";

export default function CodeInput () {
    return (
        <div className='CodeInput'>
            <h1>Быстрый черновик</h1>
            <textarea name="codeInput" id="MainCodeInput">

            </textarea>
            <button>Сохранить</button>
        </div>
    )
} 