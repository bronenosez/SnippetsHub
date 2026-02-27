import {useRef, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/RegistrationForm.css';

export default function RegistrationForm () {

    const renderCount = useRef(0);
    renderCount.current += 1;
    console.log(`Компонент отрендерился ${renderCount.current} раз(а)`);
    
    const {
        register, 
        handleSubmit,
        formState: {errors}
        } = useForm({
            defaultValues: {
            firstName: 'John',
            secondName: 'Johns'   
            }
        });


    return (
        <form onSubmit={handleSubmit((formInfo) => {
            console.log(formInfo)
        })}>
            <div className="inputDiv">
                <p>
                    {errors.firstName?.message}
                </p>
                <input {...register('firstName', {required: 'Write your first name'})} 
                    type="text" 
                    placeholder='First Name'
                />
            </div>
            
            <div className="inputDiv">
                <p>
                    {errors.lastName?.message}
                </p>
                <input {...register('secondName', {required: 'Write your second name'})} 
                    type="text" 
                    placeholder='Second Name'
                />                
                {console.log(errors)}
            </div>

            <input type="submit" />
        </form>
    )
}