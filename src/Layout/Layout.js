import React, {useEffect} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {getLocalStorage} from "../redux/reducers/user/user";

const Layout = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('user') !== null){
            dispatch(getLocalStorage())
        }
    }, [])

    return (
        <>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    );
};

export default Layout;