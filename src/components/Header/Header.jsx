import s from "./Header.module.css";
import React from "react";
import Icons from "../../img/icons.svg";
import classNames from "classnames";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={s.page_header} id="page-home">
      <div className={`container ${s.page_header__container}`}>
        {/* Company`s Logo  */}
        <a className={s.logo} href="/cafe-gelado/index.html">
          <svg
            className={s.logo__icon}
            width="50"
            height="50"
            aria-label="Logo"
          >
            <use href={`${Icons}#logo`}></use>
          </svg>
          Icecream
        </a>

        <div className={classNames(s.site_nav_backdrop, s.data_nav)}>
          {/* <!-- Site Navigation --> */}
          <nav className={s.site_nav} id="nav">
            <ul className={s.site_nav__list}>
              <li className={s.site_nav__item}>
                <a
                  className={classNames(
                    s.site_nav__link,
                    s.site_nav__link__active
                  )}
                  href="#page-home"
                  data-nav-link-home
                >
                  Home
                </a>
              </li>

              <li className={s.site_nav__item}>
                <a
                  className={s.site_nav__link}
                  href="#advantages"
                  data-nav-link-advantages
                >
                  About us
                </a>
              </li>

              <li className={s.site_nav__item}>
                <a
                  className={s.site_nav__link}
                  href="#about"
                  data-nav-link-about
                >
                  How it’s made?
                </a>
              </li>

              <li className={s.site_nav__item}>
                <a
                  className={s.site_nav__link}
                  href="#products"
                  data-nav-link-products
                >
                  Our products
                </a>
              </li>

              <li className={s.site_nav__item}>
                <a
                  className={s.site_nav__link}
                  href="#locations"
                  data-nav-link-locations
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Button />
      </div>
    </header>
  );
}
