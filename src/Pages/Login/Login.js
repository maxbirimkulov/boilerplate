import React from 'react';
import {Link, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {loginAccount} from "../../redux/reducers/user/user";
import {useDispatch} from "react-redux";


const Login = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const signInAccount = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(loginAccount(user, navigate))
            })
            .catch((error) => console.log(error));
    }

    return (
        <section className='login'>
            <form className='login__form' onSubmit={handleSubmit(signInAccount)} >
                <h2 className='login__title'>Вход в аккаунт</h2>
                <p className='login__text'>Войдите в свою учетную запись, используя адрес электронной почты и пароль, указанные при регистрации.</p>
                <label className='login__label' htmlFor="1">Email</label>
                <input id='1' {...register('email')} className='login__input' type="email" placeholder='Your working email'/>
                <label className='login__label' htmlFor="2">Password</label>
                <input id='2' {...register('password')} className='login__input' type="password" placeholder='Enter password'/>
                <button className='login__btn' type='submit'>Войти</button>
                <p className='login__quest'>нет аккаунат? <Link className='login__link' to='/register'>Регистрация</Link> </p>
                <Link to='/' className='home'>Вернуться на главную страницу</Link>
            </form>
        </section>
    );
};

export default Login;