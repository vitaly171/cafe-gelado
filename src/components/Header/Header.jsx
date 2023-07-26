import s from "./Header.module.scss";
import React from "react";
import Icons from "../../img/icons.svg";
import classNames from "classnames";

export default function Header() {
  let headerClass = `${s.container} ${s.page_header__container}`;
  return (
    <header className={s.page_header} id="page-home">
      <div className={headerClass}>
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

        {/* <!-- Header Buttons --> */}
        <div className={s.page_header__buttons}>
          {/* <!-- Site Nav Button --> */}
          <button
            className={classNames(s.hamburger, s.hamburger__collapse)}
            type="button"
            aria-expanded="false"
            aria-controls="nav"
            data-nav-btn
          >
            <span
              className={s.hamburger_box}
              aria-label="Переключатель меню навигации"
            >
              <span className={s.hamburger_inner}></span>
            </span>
          </button>

          {/* <!-- Buy now Button --> */}
          <button
            className={classNames(s.btn, s.btn__primary, s.btn_buy)}
            type="button"
            data-buy-btn
            data-modal-open-delivery
          >
            Buy now
            <svg className={s.btn_buy__icon} width="6" height="10">
              <use href={`${Icons}#buy-btn`}></use>
            </svg>
          </button>

          {/* <!-- Buy now Button Mobile --> */}
          <button
            className={classNames(s.btn, s.btn__primary, s.btn_buy_mob)}
            type="button"
            data-buy-btn-mob
            data-modal-open-mobile-delivery
          >
            Buy now
            <svg className={s.btn_buy__icon} width="6" height="10">
              <use href={`${Icons}#buy-btn`}></use>
            </svg>
          </button>

          {/* <!-- Scroll to Top Button --> */}
          <button
            className={classNames(s.btn, s.btn__secondary, s.btn_top)}
            id="myBtn"
            onClick="topFunction()"
            title="Go to top"
          >
            <svg width="30" height="30">
              <use href={`${Icons}#circle-up`}></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
