
import { useForm } from 'react-hook-form';
import '../Styles/RegistrationForm.css';

export default function RegistrationForm () {
    const {
        register, 
        handleSubmit,
        formState: {errors}
    
    } = useForm({
        defaultValues: {
        firstName: 'John',
        lastName: 'Johns'   
        }
    });


    return (
        <form onSubmit={handleSubmit((formInfo) => {
            /* if {
                formInfo
            } */
            console.log(formInfo)
        })}>
            <h2>Регистрация</h2>
            <div className="inputDiv">
                <p className='error_text'>
                    {errors.firstName?.message}
                </p>
                <input {...register('firstName', {required: 'Write your first name'})} 
                    type="text" 
                    placeholder='First Name'
                />
            </div>
            
            <div className="inputDiv">
                <p className='error_text'>
                    {errors.lastName?.message}
                </p>
                <input {...register('lastName', {required: 'Write your last name'})} 
                    type="text" 
                    placeholder='Last Name'
                />                
            </div>

            <input 
                className='submitInput'
                type="submit" 
            />
        </form>
    )
}