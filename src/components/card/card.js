import React from "react";
import classNames from "classnames";
import { BsStars } from "react-icons/bs";
import { CiSquareAlert } from "react-icons/ci";
import { BiBath } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import styles from "../card/Card.module.css";

const Card = ({ element }) => {
  const renderPopular = () => {
    if (element.popular) {
      return (
        <div className={styles.badgeWrapper}>
          <div className={classNames([styles.primaryBadge])}>
            <BsStars />
            <div>Popular</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={element.image} className={styles.image} alt="" />
        </div>
        {renderPopular()}
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.priceText}>${`${element.price}`}</h1>
        <h1 className={styles.rsText}>/month</h1>
      </div>

      <div className={styles.detailsWrapper}>
        <div className="flex">
          <h1 className={styles.titleText}>{`${element.title}`}</h1>
          <div className={classNames([styles.typeBadge])}>
            <div>{`${element.type}`}</div>
          </div>
        </div>

        <div className="flex">
          <h1 className={styles.descriptionText}>{`${element.description}`}</h1>
          <h1 className={styles.cityText}>{`${element.city}`}</h1>
        </div>
      </div>

      <div className={styles.moreDetailsWrapper}>
        <div className={styles.moreDetailsBadge}>
          <FaBed />
          <div className={styles.moreDetailsText}>{`${element.beds}`} begs</div>
        </div>
        <div className={styles.moreDetailsBadge}>
          <BiBath />
          <div className={styles.moreDetailsText}>
            {`${element.bathrooms}`} baths
          </div>
        </div>
        <div className={styles.moreDetailsBadge}>
          <CiSquareAlert />
          <div className={styles.moreDetailsText}>{`${element.area}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
