import React from "react";
import Link from "next/link";
import styles from './page.module.css'
const page = () => {
  return (
    <main className={styles.main}>
      <div>
        <h2>Categories page</h2>
      </div>
      <ul>
        <li>
          <Link href="/Categories/CategoriesItem/1">Items 1</Link>
        </li>
        <li>
          <Link href="/Categories/CategoriesItem/2">Items 2</Link>
        </li>
        <li>
          <Link href="/Categories/CategoriesItem/3">Items 3</Link>
        </li>
        <li>
          <Link href="/Categories/CategoriesItem/4">Items 4</Link>
        </li>
        <li>
          <Link href="/Categories/CategoriesItem/5">Items 5</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
