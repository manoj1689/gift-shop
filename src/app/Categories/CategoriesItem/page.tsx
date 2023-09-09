import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div>
        <h1>
        Categories items List page
        </h1>
       </div>
      <Link href={"/Categories/CategoriesPrev/ItemDetail"}>Single Item</Link>
    </>
  );
};

export default page;
