import AllProducts from "@/components/allproducts";
import Categories from "@/components/categories";
import MyInfo from "@/components/myinfo";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex direction="column" align="center" minHeight="100vh" gap={0}>
        <MyInfo />
        <Categories />
        <AllProducts />
      </Flex>
    </>
  );
}
