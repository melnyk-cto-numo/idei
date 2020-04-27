// core
import React, { useState, useEffect } from 'react';

// library
import { NavLink } from "react-router-dom";

// components
import { useWindowSize } from "../../../hooks";
import { routes } from "../../App/routes";

// assets
import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.svg'
import logoGray from '../../../assets/images/logo-gray.svg'
import login from '../../../assets/images/login.svg'
import trazzo from '../../../assets/images/trazzo-logo.svg'
import espacia from '../../../assets/images/espacia-logo.svg'
import reeliza from '../../../assets/images/reeliza-logo.svg'
import investor from '../../../assets/images/inversor-logo.svg'

const menus = [
    {url: routes.us, label: 'NOSOTROS', image: logoGray},
    {url: routes.vertical, label: 'VERTICAL', image: logoGray},
    {url: routes.trazzo, label: 'HORIZONTAL', image: trazzo},
    {url: routes.commercial, label: 'COMERCIAL', image: espacia},
    {url: routes.financing, label: 'FINANCIAMIENTO', image: reeliza},
    {url: routes.investors, label: 'RELACION CON INVERSIONISTAS', image: investor},
];
export const Header = () => {
    const [active, setActive] = useState(false);
    const [width] = useWindowSize();

    const addClass = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (width <= 1640 && active) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [width, active]);

    return (
        <header className={styles.header}>
            <div className={styles.menuWrapper}>
                <div className={styles.logo}>
                    <a href='/'> <img src={logo} alt='logo' /></a>
                </div>
                <menu className={active ? [styles.menu + ' ' + styles.active] : styles.menu}>
                    <ul>
                        {menus.map(item => <li key={item.label}>
                            <NavLink to={item.url} activeClassName={styles.active}>
                                {item.label}
                            </NavLink>
                            <NavLink to={item.url} className={styles.menuHover} activeClassName={styles.active}
                                     onClick={() => setActive(!active)}>
                                <img src={item.image} alt='' />
                                {item.label}
                            </NavLink>
                        </li>)}
                    </ul>
                </menu>
                <button type='button' className={active ? [styles.burgerMenu + ' ' + styles.active] : styles.burgerMenu}
                        onClick={() => addClass()}>
                    <span className={styles.burgerMenuLines} />
                </button>
                <img src={login} alt='login' className={styles.login} />
            </div>
        </header>
    );
};