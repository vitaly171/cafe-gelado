import s from "./Header.module.css";

export default function Header() {
  return (
    <header className={s.page_header} id="page-home">
      <div className="container page-header__container">
        {/* Company`s Logo  */}
        <a className="logo" href="index.html">
          <svg className="logo__icon" width="50" height="50" aria-label="Logo">
            <use href="images/icons.svg#logo"></use>
          </svg>
          Icecream
        </a>

        <div className="site-nav-backdrop" data-nav>
          {/* <!-- Site Navigation --> */}
          <nav className="site-nav" id="nav">
            <ul className="site-nav__list">
              <li className="site-nav__item">
                <a
                  className="site-nav__link site-nav__link--active"
                  href="#page-home"
                  data-nav-link-home
                >
                  Home
                </a>
              </li>

              <li className="site-nav__item">
                <a
                  className="site-nav__link"
                  href="#advantages"
                  data-nav-link-advantages
                >
                  About us
                </a>
              </li>

              <li className="site-nav__item">
                <a className="site-nav__link" href="#about" data-nav-link-about>
                  How it’s made?
                </a>
              </li>

              <li className="site-nav__item">
                <a
                  className="site-nav__link"
                  href="#products"
                  data-nav-link-products
                >
                  Our products
                </a>
              </li>

              <li className="site-nav__item">
                <a
                  className="site-nav__link"
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
        <div className="page-header__buttons">
          {/* <!-- Site Nav Button --> */}
          <button
            className="hamburger hamburger--collapse"
            type="button"
            aria-expanded="false"
            aria-controls="nav"
            data-nav-btn
          >
            <span
              className="hamburger-box"
              aria-label="Переключатель меню навигации"
            >
              <span className="hamburger-inner"></span>
            </span>
          </button>

          {/* <!-- Buy now Button --> */}
          <button
            className="btn btn--primary btn-buy"
            type="button"
            data-buy-btn
            data-modal-open-delivery
          >
            Buy now
            <svg className="btn-buy__icon" width="6" height="10">
              <use href="images/icons.svg#buy-btn"></use>
            </svg>
          </button>

          {/* <!-- Buy now Button Mobile --> */}
          <button
            className="btn btn--primary btn-buy-mob"
            type="button"
            data-buy-btn-mob
            data-modal-open-mobile-delivery
          >
            Buy now
            <svg className="btn-buy__icon" width="6" height="10">
              <use href="images/icons.svg#buy-btn"></use>
            </svg>
          </button>

          {/* <!-- Scroll to Top Button --> */}
          <button
            className="btn btn--secondary btn-top"
            id="myBtn"
            onclick="topFunction()"
            title="Go to top"
          >
            <svg width="30" height="30">
              <use href="images/icons.svg#circle-up"></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
