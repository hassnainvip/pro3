// ProductSkeleton.jsx
import React from "react";
import Skeleton from 'react-loading-skeleton'
import styles from "../styles/product.module.css";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductSkeleton = () => {
  return (
    <div className={`${styles.mainContainer} shadow-md shadow-gray-400`}>
      <Skeleton variant="rectangular" height={264} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <div className={styles.btnContainer}>
        <Skeleton variant="rectangular" height={36} width="50%" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
