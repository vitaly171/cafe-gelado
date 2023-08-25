import s from "./Reviews.module.css";
import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

export default function Reviews() {
  return (
    <section className={s.reviews}>
      <div className={s.container}>
        <h2 className={s.visually_hidden}>Customer reviews</h2>

        {/* <div className={classNames(s.reviews__slider, s.slider)}>
          <article>
            <img
              className={classNames(s.reviews__photo, s.reviews__photo__margin)}
              src={require(`../../img/reviews/reviews_img1_@1x.jpg`)}
              alt="Curly girl"
              width="85"
            />
            <div
              className={classNames(s.reviews__card, s.reviews__card__margin)}
            >
              <div className={s.reviews__gradient}>
                <p className={s.reviews__comment}>
                  Nullam viverra consectetuer. Quisque cursus et, porttitor
                  risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan
                  congue. Lorem ipsum primis in nibh vel risus.
                </p>
              </div>
            </div>
            <svg
              className={
                (classNames = (s.reviews__items, s.reviews__items__margin))
              }
              width="32"
              height="4"
            >
              <use href={require(`../../img/icons.svg#mini-circle`)}></use>
            </svg>
            <h3
              className={
                (classNames = (s.reviews__caption, s.reviews__caption__margin))
              }
            >
              Emily, Los Angeles
            </h3>
          </article>

          <article>
            <img
              className={
                (classNames = (s.reviews__photo, s.reviews__photo__margin))
              }
              src="images/reviews/reviews_img2_@1x.jpg"
              alt="Short hair girl "
              width="85"
            />
            <div
              className={classNames(s.reviews__card, s.reviews__card__margin)}
            >
              <div className={s.reviews__gradient}>
                <p className={s.reviews__comment}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  optio quo quia numquam molestiae sint asperiores, illum quasi
                  eligendi veritatis.
                </p>
              </div>
            </div>
            <svg
              className={
                (classNames = (s.reviews__items, s.reviews__items__margin))
              }
              width="32"
              height="4"
            >
              <use href="./images/icons.svg#mini-circle"></use>
            </svg>
            <h3
              className={
                (classNames = (s.reviews__caption, s.reviews__caption__margin))
              }
            >
              Scarlett, New York
            </h3>
          </article>

          <article>
            <img
              className={
                (classNames = (s.reviews__photo, s.reviews__photo__margin))
              }
              src="images/reviews/reviews_img3_@1x.jpg"
              alt="Girl in glasses"
              width="85"
            />
            <div
              className={classNames(s.reviews__card, s.reviews__card__margin)}
            >
              <div className={s.reviews__gradient}>
                <p className={s.reviews__comment}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  inventore voluptatibus quas cum minus repudiandae totam, enim
                  ducimus.
                </p>
              </div>
            </div>
            <svg
              className={
                (classNames = (s.reviews__items, s.reviews__items__margin))
              }
              width="32"
              height="4"
            >
              <use href="./images/icons.svg#mini-circle"></use>
            </svg>
            <h3
              className={
                (classNames = (s.reviews__caption, s.reviews__caption__margin))
              }
            >
              Olivia, Chicago
            </h3>
          </article>
        </div> */}
      </div>
    </section>
  );
}
