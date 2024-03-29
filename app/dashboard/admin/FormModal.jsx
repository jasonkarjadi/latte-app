import {
  Button,
  Center,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { MdDriveFileRenameOutline, MdEmail, MdPhone } from "react-icons/md";
import { getAccessToken, setAccessToken } from "../../../accessToken";
import cameraSvg from "../../../public/camera.svg";
import FormInput from "../../FormInput";

const FormModal = ({ isOpen, onClose, type, selectedData }) => {
  const [categories, setCategories] = useState([]);
  const [preview, setPreview] = useState(null);

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
        setCategories(resBody.result);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!isOpen && preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
  }, [isOpen, preview]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccessToken(null);
    const accessToken = await getAccessToken();
    try {
      const reqBody =
        type === "product"
          ? new FormData(e.target)
          : JSON.stringify(
              type === "employee"
                ? {
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone_number: e.target.phone_number.value,
                    password: e.target.password.value,
                    passwordConfirm: e.target.passwordConfirm.value,
                  }
                : { name: e.target.name.value }
            );
      const route = type === "employee" ? "auth/register" : `${type}/create`;
      const contentType =
        type === "product" ? "multipart/formdata" : "application/json";
      await fetch(`http://localhost:2000/${route}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": contentType,
        },
        body: reqBody,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const selected = e.target.files?.[0];
    if (preview) URL.revokeObjectURL(preview);
    setPreview(
      selected && ["image/jpeg", "image/png"].includes(selected.type)
        ? URL.createObjectURL(selected)
        : null
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={async (e) => handleSubmit(e)}>
        <ModalHeader>
          {selectedData ? "Edit" : "Create"}
          {` ${type[0]?.toUpperCase()}${type.slice(1)}`}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {type === "product" && (
            <>
              <FormInput>
                <Input
                  type="file"
                  name="image"
                  display="none"
                  onChange={handleChange}
                />
                <Center
                  h="260px"
                  pos="relative"
                  border="solid 1px rgb(226, 232, 240)"
                  bgColor="gray"
                  cursor="pointer"
                  borderRadius="6px"
                >
                  <NextImage
                    src={preview || selectedData?.image || cameraSvg}
                    alt="preview"
                    width={preview || selectedData?.image ? undefined : 56}
                    height={preview || selectedData?.image ? undefined : 56}
                    fill={preview || selectedData?.image}
                    sizes="26vw"
                    priority
                  />
                </Center>
              </FormInput>
            </>
          )}
          <FormInput
            props={{
              name: "name",
              placeholder: "Name",
              defaultValue: selectedData?.name,
            }}
            addOn={<Icon as={MdDriveFileRenameOutline} />}
          />
          {type === "product" && (
            <>
              <FormInput
                props={{
                  name: "price",
                  placeholder: "Price",
                  defaultValue: selectedData?.price,
                }}
                addOn="Rp"
              />
              <FormInput>
                <Select
                  name="category"
                  placeholder="Category"
                  cursor="pointer"
                  defaultValue={selectedData?.CategoryId}
                >
                  {categories?.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormInput>
            </>
          )}
          {type === "employee" && (
            <>
              <FormInput
                props={{
                  type: "email",
                  name: "email",
                  placeholder: "Email",
                  defaultValue: selectedData?.email,
                }}
                addOn={<Icon as={MdEmail} />}
              />
              <FormInput
                props={{
                  name: "phone_number",
                  placeholder: "Phone Number",
                  defaultValue: selectedData?.phone_number,
                }}
                addOn={<Icon as={MdPhone} />}
              />
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button type="submit" onClick={onClose}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
