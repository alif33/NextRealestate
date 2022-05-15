import Pagination from "@etchteam/next-pagination";
import React from "react";
import styles from './paginationStyle.module.scss'
const PropertiesPagination = () => {
  return (
    <>
      <nav className="border-top pb-md-4 pt-4" aria-label="Pagination">
        <Pagination total={500} sizes={10} theme={styles} />
      </nav>
    </>
  );
};

export default PropertiesPagination;
