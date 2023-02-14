"use client";

import { Button, Flex, StackDivider, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAccessToken, setAccessToken } from "../../../accessToken";
import MenuGrid from "./MenuGrid";
import OrderItem from "./OrderItem";

const CashierPage = () => {
  const [data, setData] = useState(null);
  const [items, setItems] = useState({});
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setAccessToken(null);
      const accessToken = await getAccessToken();
      try {
        const res = await fetch(`http://localhost:2000/category/list`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const resBody = await res.json();
        setData(resBody);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccessToken(null);
    const accessToken = await getAccessToken();
    try {
      await fetch(`http://localhost:2000/transaction/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({}),
      });
    } catch (err) {
      console.error(err);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <MenuGrid categories={data?.result} itemsState={[items, setItems]} />
      <Flex flexDir="column" w={96} m={6}>
        <VStack
          flex={1}
          bgColor="white"
          borderRadius="6px"
          overflowY="scroll"
          divider={<StackDivider />}
          p={6}
        >
          {Object.entries(items)?.map(([id, { name, price }]) => (
            <OrderItem key={id} name={name} price={price} />
          ))}
        </VStack>
        <Button
          colorScheme="blue"
          mt={3}
          h={14}
          onClick={async () => await handleSubmit()}
        >
          Confirm
        </Button>
      </Flex>
    </>
  );
};

export default CashierPage;
