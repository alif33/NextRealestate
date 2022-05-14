import React from "react";
import Pagination from '@etchteam/next-pagination'
import styles from './paginationStyle.module.scss'
const BlogPagination = ({blogs}) => {
  return (
    <>
      <nav className="pt-4 pb-2 border-top" aria-label="Blog pagination">
      <Pagination total={500} sizes={10}  theme={styles} />
      </nav>
    </>
  );
};

export default BlogPagination;