"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAccessToken, setAccessToken } from "../../../../accessToken";
import CreateButton from "../CreateButton";
import Sidebar from "../Sidebar";

const SalesPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      setAccessToken(null);
      const accessToken = await getAccessToken();
      try {
        const res = await fetch(`http://localhost:2000/transaction/list`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const resBody = await res.json();
        console.log(resBody);
        setData(resBody);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <Sidebar>
        <CreateButton handleClick={() => {}} />
      </Sidebar>
      <Box></Box>
    </>
  );
};

export default SalesPage;
