import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [navList, setNavList] = useState();
    const nav = useNavigate();

    const navHome = () => {
        nav('/');
    }

    const navLogin = () => {
        nav('/login');
    }

    const navShop = () => {
        nav('/shop');
    }

    const logOut = () => {
        ctx.logout();
        nav('/');
    }

    const guestNav = (
        <nav>
            <a onClick={navHome}>Home</a>
            <a onClick={navLogin}>Login</a>
        </nav>
    );

    const userNav = (
        <nav>
            <a onClick={navHome}>Home</a>
            <a onClick={logOut}>Logout</a>
            <a onClick={navShop}>Shop</a>
        </nav>
    );

    useEffect(() => {
        setNavList(guestNav);
    }, []);

    return navList;
}

export default Nav;