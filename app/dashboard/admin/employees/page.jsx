"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAccessToken, setAccessToken } from "../../../../accessToken";
import CreateButton from "../CreateButton";
import FormModal from "../FormModal";
import Sidebar from "../Sidebar";
import StripedTable from "../StripedTable";

const EmployeesPage = () => {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    (async () => {
      setAccessToken(null);
      const accessToken = await getAccessToken();
      try {
        const res = await fetch(`http://localhost:2000/auth/userList`, {
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

  return (
    <>
      <Sidebar>
        <CreateButton handleClick={onOpen} />
      </Sidebar>
      <StripedTable
        headArr={[
          { head: "name" },
          { head: "email" },
          { head: "phone number" },
        ]}
        dataArr={data?.result?.map(({ name, email, phone_number }) => [
          { datum: name },
          { datum: email },
          { datum: phone_number },
        ])}
      />
      <FormModal
        isOpen={isOpen}
        onClose={onClose}
        type="employee"
        selectedData={selectedData}
      />
    </>
  );
};

export default EmployeesPage;
