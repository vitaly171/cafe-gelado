import s from "./Advantages.module.css";
import React from "react";
import classNames from "classnames";

export default function Advantages() {
  return (
    <section className={s.section_advantages} id="advantages">
      <div className={s.container}>
        <h2 className={s.visually_hidden}>advantages</h2>
        <ul className={s.grid}>
          <li className={s.grid__item}>
            <p className={classNames(s.grid__title, s.counter)}>721</p>
            <p className={s.grid__descr}>
              Aliquam ac dui vel dui vulputate consectetur. Mauris massa.
            </p>
          </li>
          <li className={s.grid__item}>
            <p className={s.grid__title}>
              <span className={s.counter}>16</span>kg
            </p>
            <p className={s.grid__descr}>
              Aliquam ac dui vel dui vulputate consectetur. Mauris massa.
            </p>
          </li>
          <li className={s.grid__item}>
            <p className={classNames(s.grid__title, s.counter)}>84</p>
            <p className={s.grid__descr}>
              Aliquam ac dui vel dui vulputate consectetur. Mauris massa.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
