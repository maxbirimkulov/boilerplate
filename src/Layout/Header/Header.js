import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../redux/reducers/user/user";


const Header = () => {

    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()


    console.log(user)
    return (
        <header className='header'>

            <div className="container">
                {
                    user.email.length
                        ? <Link to='/' onClick={() => dispatch(logOut())}>Выйти</Link>
                        : <Link to='/login'>Войти</Link>
                }

            </div>
        </header>
    );
};

export default Header;