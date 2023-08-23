import s from "./Gallery.module.css";
import React from "react";
import classNames from "classnames";

export default function Gallery() {
  return (
    <section className={s.gallery} id="gallery">
      <div className={s.container}>
        <h2 className={s.visually_hidden}>Gallery</h2>
        <div className={s.gallery__grid}>
          <div className={classNames(s.gallery__item, s.gallery__item__pt4)}>
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery1@2x.jpg`)}
              alt="Ice-cream"
            />
          </div>
          <div className={classNames(s.gallery__item, s.gallery__item__pt4)}>
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery//gallery2@2x.jpg`)}
              alt="Ice-cream"
            />
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery3@2x.jpg`)}
              alt="Ice-cream"
            />
          </div>
          <div className={classNames(s.gallery__item, s.gallery__item__pt4)}>
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery4@2x.jpg`)}
              alt="Ice-cream"
            />
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery5@2x.jpg`)}
              alt="Ice-cream"
            />
          </div>
          <div className={classNames(s.gallery__item, s.gallery__item__pt4)}>
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery6@2x.jpg`)}
              alt="Ice-cream"
            />
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery7@2x.jpg`)}
              alt="Ice-cream"
            />
          </div>
          <div className={classNames(s.gallery__item, s.gallery__item__pt4)}>
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery8@2x.jpg`)}
              alt="Ice-cream"
            />
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery9@2x.jpg`)}
              alt="Ice-cream"
            />
          </div>
          <div className={classNames(s.gallery__item, s.gallery__item__pt4)}>
            <img
              classNames={s.gallery__img}
              src={require(`../../img/gallery/gallery10@2x.jpg`)}
              alt="Ice-cream"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
