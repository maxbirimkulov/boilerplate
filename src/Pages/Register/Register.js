import React from 'react';
import {useForm} from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";
import {useDispatch} from "react-redux";
import {loginAccount} from "../../redux/reducers/user/user";
import {useNavigate } from 'react-router-dom'

const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const registerUser = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(loginAccount(user, navigate))

            })
            .catch((error) => console.log(error));
        reset()
    }

    return (
        <section className='register'>
            <div className="container">
                <form onSubmit={handleSubmit(registerUser)}>
                    <input {...register("email")} type="email"/>
                    <input {...register("login")} type="text"/>
                    <input {...register("age")} type="number"/>
                    <input {...register("password")} type="password"/>
                    <button type='submit'>регистрация</button>
                </form>
            </div>
        </section>
    );
};

export default Register;