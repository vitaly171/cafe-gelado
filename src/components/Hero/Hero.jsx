import s from "./Hero.module.css";
import React from "react";
import Icons from "../../img/icons.svg";
import classNames from "classnames";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={classNames(s.container, s.container__hero)}>
        <div className={s.hero__wrapper}>
          <h1 className={classNames(s.hero__title, s.active)}>
            ice cream
            <br />
            <span className={classNames(s.hero__title__next_row, s.active)}>
              made with
            </span>
            <span className={classNames(s.hero__title__accent, s.active)}>
              passion
            </span>
          </h1>
          <ul className={classNames(s.hero_links, s.active)}>
            <li className={s.hero_links__item}>
              <a
                className={classNames(s.btn, s.btn__hero, s.btn__secondary)}
                href="#products"
              >
                Products
              </a>
            </li>
            <li className={s.hero_links__item}>
              <a
                className={classNames(s.btn, s.btn__hero, s.btn__primary)}
                href="#about"
              >
                How it’s made?
              </a>
            </li>
          </ul>
          <div className={classNames(s.extra_info, s.active)}>
            <p className={s.extra_info__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <a className={classNames(s.btn_open, s.extra_info__link)} href="/">
              <svg className={s.btn_open__icon}>
                <use href={`${Icons}#link-arrow`}></use>
              </svg>
            </a>
          </div>
        </div>
        <ul className={classNames(s.store_list, s.active)}>
          <li className={s.store_list__item}>
            <div className={s.store_list__wrapper}>
              <p className={classNames(s.counter, s.store_list__number)}>16</p>
              <p className={s.store_list__name}>cafes</p>
            </div>
          </li>
          <li className={s.store_list__item}>
            <div className={s.store_list__wrapper}>
              <p className={classNames(s.counter, s.store_list__number)}>23</p>
              <p className={s.store_list__name}>food trucks</p>
            </div>
          </li>
        </ul>
        <div className={classNames(s.hero__image__main, s.active)}></div>
        <div className={classNames(s.hero__image__left, s.active)}></div>
        <div className={classNames(s.hero__image__right, s.active)}></div>
      </div>
    </section>
  );
}
