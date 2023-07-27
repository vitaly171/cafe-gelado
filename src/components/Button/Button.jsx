import s from "./Button.module.css";
import React from "react";
import Icons from "../../img/icons.svg";
import classNames from "classnames";

export default function Button() {
  return (
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
  );
}
