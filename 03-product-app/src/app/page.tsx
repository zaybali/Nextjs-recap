"use client";

import AllProducts from "@/components/allproducts";
import Categories from "@/components/categories";
import MyInfo from "@/components/myinfo";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { productItemType } from "./productType";


const products: productItemType[] = [
  {
    id: 1,
    name: 'Samsung Galaxy S23',
    price: 899,
    category: 'Mobiles'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 1199,
    category: 'Laptops'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4',
    price: 349,
    category: 'Gadgets'
  },
  {
    id: 4,
    name: 'Toyota Corolla',
    price: 20000,
    category: 'Cars'
  },
  {
    id: 5,
    name: 'Levi’s Denim Jacket',
    price: 89,
    category: 'Clothes'
  },
  {
    id: 6,
    name: 'iPhone 14',
    price: 999,
    category: 'Mobiles'
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    price: 1399,
    category: 'Laptops'
  },
  {
    id: 8,
    name: 'Apple Watch Series 8',
    price: 399,
    category: 'Gadgets'
  },
  {
    id: 9,
    name: 'Honda Civic',
    price: 22000,
    category: 'Cars'
  },
  {
    id: 10,
    name: 'Nike Air Max 270',
    price: 150,
    category: 'Clothes'
  }
];


export default function Home() {
  const [categList, setCategList] = useState(['Sort By Price','All','Clothes', 'Mobiles', 'Cars', 'Laptops', 'Gadgets']);
  const [selectCat, setSelectCat] = useState("All");
  console.log(selectCat);
  return (
    <>
      <Flex direction="column" align="center" minHeight="100vh" gap={0}>
        <MyInfo />
        <Categories categories={categList} setSelectCat={setSelectCat}  />
        <AllProducts productsList={products}/>
      </Flex>
    </>
  );
}
