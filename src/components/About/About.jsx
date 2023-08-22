import s from "./About.module.css";
import React from "react";
import classNames from "classnames";
import Icons from "../../img/icons.svg";

export default function About() {
  return (
    <section className={s.about} id="about">
      <div className={s.container}>
        <p
          className={classNames(
            s.about__label,
            s.about__label__margin,
            s.active
          )}
        >
          tradition and love
        </p>
        <h2
          className={classNames(
            s.about__title,
            s.about__title__margin,
            s.active
          )}
        >
          how it’s made?
        </h2>
        <div className={s.about__card}>
          <picture>
            <img
              className={classNames(
                s.about__pictures,
                s.about__pictures__margin
              )}
              src={require(`../../img/about/desktop/about_img1_desktop_@1x.png`)}
              alt="Milk carafe on the background of a cow"
              width="280"
            />
          </picture>

          <div className={classNames(s.about__box, s.about__box__margin)}>
            <h3
              className={classNames(
                s.about__box_title,
                s.about__box_title__margin
              )}
            >
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend
              erat at justo fringilla.
            </h3>
            <p className={s.about__box_descr}>
              Curabitur lacinia enim at ex blandit, vel pellentesque odio
              elementum. Mauris rhoncus orci in imperdiet placerat. Vestibulum
              euismod nisl suscipit ligula volutpat, a feugiat urna maximus.
              Cras massa nibh, tincidunt.
              <span className={s.about__box_descr__p}>
                Aliquam erat volutpat. Aenean accumsan.{" "}
              </span>
            </p>
            <button
              className={classNames(s.btn, s.btn__primary, s.btn__about)}
              type="button"
              data-modal-open-readmore
            >
              Read more
              <svg
                className={classNames(s.btn__icon, s.btn__icon__append)}
                width="10"
                height="10"
              >
                <use href={`${Icons}#button-arrow`}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
