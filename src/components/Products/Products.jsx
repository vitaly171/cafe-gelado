import s from "./Products.module.css";
import React from "react";
import classNames from "classnames";
import Icons from "../../img/icons.svg";

export default function Products() {
  return (
    <section
      className={classNames(s.section, s.section__products)}
      id="products"
    >
      <div className={classNames(s.container, s.container__products)}>
        <p className={classNames(s.section__label, s.active)}>
          <span className={s.counter}>100</span>% natural
        </p>
        <h2
          className={classNames(
            s.section__title,
            s.section__title__margin,
            s.active
          )}
        >
          products
        </h2>
        <ul className={s.products}>
          <li className={s.products__item}>
            <article className={classNames(s.product, s.product__ice_cream)}>
              <div className={s.product__content}>
                <h3 className={s.product__title}>ice cream</h3>
                <p
                  className={classNames(
                    s.product__text,
                    s.product__text__margin
                  )}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  <span className={s.product__addition}>
                    . dolore magna aliqua facilisis.
                  </span>
                </p>
                <button
                  className={classNames(s.btn_open, s.btn_open__centered)}
                  type="button"
                  aria-expanded="false"
                  data-modal-open-ice-cream
                >
                  <svg className={s.btn_open__icon} width="40" height="40">
                    <use href={`${Icons}#link-arrow`}></use>
                  </svg>
                </button>
                <div
                  className={classNames(
                    s.product__description,
                    s.product__description__ice_cream,
                    s.product__description__is_hidden
                  )}
                  data-modal-ice-cream
                >
                  <button
                    className={s.product__btn_close}
                    data-modal-close-ice-cream
                  >
                    <svg width="20" height="20">
                      <use href={`${Icons}#close-menu`}></use>
                    </svg>
                  </button>
                  <p
                    className={classNames(
                      s.product__text,
                      s.product__text__margin_description
                    )}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere repellat placeat corrupti aspernatur commodi
                    voluptate quaerat iure provident. Enim, sint?
                  </p>
                </div>
              </div>
            </article>
          </li>
          <li className={s.products__item}>
            <article className={classNames(s.product, s.product__ice_coffee)}>
              <div className={s.product__content}>
                <h3 className={s.product__title}>ice coffee</h3>
                <p
                  className={classNames(
                    s.product__text,
                    s.product__text__margin
                  )}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  <span className={s.product__addition}>
                    . dolore magna aliqua facilisis.
                  </span>
                </p>
                <button
                  className={classNames(s.btn_open, s.btn_open__centered)}
                  type="button"
                  aria-expanded="false"
                  data-modal-open-ice-coffee
                >
                  <svg className={s.btn_open__icon} width="40" height="40">
                    <use href={`${Icons}#link-arrow`}></use>
                  </svg>
                </button>
                <div
                  className={classNames(
                    s.product__description,
                    s.product__description__ice_coffee,
                    s.product__description__is_hidden
                  )}
                  data-modal-ice-coffee
                >
                  <button
                    className={s.product__btn_close}
                    data-modal-close-ice-coffee
                  >
                    <svg width="20" height="20">
                      <use href={`${Icons}#close-menu`}></use>
                    </svg>
                  </button>
                  <p
                    className={classNames(
                      s.product__text,
                      s.product__text__margin_description
                    )}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere repellat placeat corrupti aspernatur commodi
                    voluptate quaerat iure provident. Enim, sint?
                  </p>
                </div>
              </div>
            </article>
          </li>
          <li className={s.products__item}>
            <article className={classNames(s.product, s.product__milkshakes)}>
              <div className={s.product__content}>
                <h3 className={s.product__title}>milkshakes</h3>
                <p
                  className={classNames(
                    s.product__text,
                    s.product__text__margin
                  )}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                  <span className={s.product__addition}>
                    . dolore magna aliqua facilisis.
                  </span>
                </p>
                <button
                  className={classNames(s.btn_open, s.btn_open__centered)}
                  type="button"
                  aria-expanded="false"
                  data-modal-open-milkshakes
                >
                  <svg className={s.btn_open__icon} width="40" height="40">
                    <use href={`${Icons}#link-arrow`}></use>
                  </svg>
                </button>
                <div
                  className={classNames(
                    s.product__description,
                    s.product__description__milkshakes,
                    s.product__description__is_hidden
                  )}
                  data-modal-milkshakes
                >
                  <button
                    className={s.product__btn_close}
                    data-modal-close-milkshakes
                  >
                    <svg width="20" height="20">
                      <use href={`${Icons}#close-menu`}></use>
                    </svg>
                  </button>
                  <p
                    className={classNames(
                      s.product__text,
                      s.product__text__margin_description
                    )}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere repellat placeat corrupti aspernatur commodi
                    voluptate quaerat iure provident. Enim, sint?
                  </p>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
