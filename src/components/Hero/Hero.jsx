import s from "./Hero.module.css";
import React from "react";
import Icons from "../../img/icons.svg";
import classNames from "classnames";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={classNames(s.container, s.container__hero)}>
        <div className={s.hero__wrapper}>
          <h1 className={s.hero__title}>
            ice cream
            <br />
            <span className={s.hero__title__next_row}>made with</span>
            <span className={s.hero__title__accent}>passion</span>
          </h1>
          <ul className={s.hero_links}>
            <li className={s.hero_links__item}>
              <a
                className={classNames(s.btn, s.btn__secondary, s.btn__hero)}
                href="#products"
              >
                Products
              </a>
            </li>
            <li className={s.hero_links__item}>
              <a
                className={classNames(s.btn, s.btn__primary, s.btn__hero)}
                href="#about"
              >
                How it’s made?
              </a>
            </li>
          </ul>
          <div className={s.extra_info}>
            <p className={s.extra_info__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <a className={classNames(s.extra_info__link, s.btn_open)} href="/">
              <svg className={s.btn_open__icon}>
                <use href={`${Icons}#link-arrow`}></use>
              </svg>
            </a>
          </div>
        </div>
        <ul className={s.store_list}>
          <li className={s.store_list__item}>
            <div className={s.store_list__wrapper}>
              <p className={classNames(s.store_list__number, s.counter)}>16</p>
              <p className={s.store_list__name}>cafes</p>
            </div>
          </li>
          <li className={s.store_list__item}>
            <div className={s.store_list__wrapper}>
              <p className={classNames(s.store_list__number, s.counter)}>23</p>
              <p className={s.store_list__name}>food trucks</p>
            </div>
          </li>
        </ul>
        <div className={s.hero__image__main}></div>
        <div className={s.hero__image__left}></div>
        <div className={s.hero__image__right}></div>
      </div>
    </section>
  );
}
