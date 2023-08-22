import s from "./Gallery.module.css";
import React from "react";
import classNames from "classnames";

export default function Gallery() {
  return (
    <section className={s.gallery} id="gallery">
      <div className={s.container}>
        <h2 className={s.visually_hidden}>Gallery</h2>
      </div>
    </section>
  );
}
