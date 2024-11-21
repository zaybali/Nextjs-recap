"use client"

import { useState } from "react";
import Categories from "./categories";
import MyInfo from "./myinfo";

export default function Home() {
  const [categList, setCategList] = useState([
    'All', 'Mobiles', 'Laptops', 'Cars', 'Clothes', 'Gadgets'
  ]);
  const [selectCat, setSelectCat] = useState('All')
  console.log(selectCat, 'selectCat')
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: '90vh' }}>
        <h1>Product Filter App</h1>
        <MyInfo />
        <Categories categories={categList} setSelectCat={setSelectCat} />
      </div>
    </>
  );
}
