import s from "./About.module.css";
import React from "react";
import classNames from "classnames";

export default function About() {
  return (
    <section className={s.about} id="about">
      <div className={s.container}>
        <p className={classNames(s.about__label, s.about__label__margin)}>
          tradition and love
        </p>
        <h2 className={classNames(s.about__title, s.about__title__margin)}>
          how it’s made?
        </h2>
        <div className={s.about__card}>
          <picture>
            <source
              srcset="
            /images/about/desktop/about_img1_desktop_@1x.png 1x,
            /images/about/desktop/about_img1_desktop_@2x.png 2x
          "
              media="(min-width: 1280px)"
            />
            <source
              srcset="
            /images/about/tablet/about_img1_tablet_@1x.png 1x,
            /images/about/tablet/about_img1_tablet_@2x.png 2x
          "
              media="(min-width: 768px)"
            />
            <source
              srcset="
            /images/about/mobile/about_img1_mobile_@1x.png 1x,
            /images/about/mobile/about_img1_mobile_@2x.png 2x
          "
              media="(min-width: 320px)"
            />
            <img
              className="about__pictures about__pictures--margin"
              src="/images/about/desktop/about_img1_desktop_@1x.png"
              alt="Milk carafe on the background of a cow"
              width="280"
            />
          </picture>

          <div className="about__box about__box--margin">
            <h3 className="about__box-title about__box-title--margin">
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend
              erat at justo fringilla.
            </h3>
            <p className="about__box-descr">
              Curabitur lacinia enim at ex blandit, vel pellentesque odio
              elementum. Mauris rhoncus orci in imperdiet placerat. Vestibulum
              euismod nisl suscipit ligula volutpat, a feugiat urna maximus.
              Cras massa nibh, tincidunt.
              <span className="about__box-descr--p">
                Aliquam erat volutpat. Aenean accumsan.{" "}
              </span>
            </p>
            <button
              className="btn btn--primary btn--about"
              type="button"
              data-modal-open-readmore
            >
              Read more
              <svg
                className="btn__icon btn__icon--append"
                width="10"
                height="10"
              >
                <use href="./images/icons.svg#button-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
