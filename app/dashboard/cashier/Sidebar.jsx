// "use client";
// import Payment from "./Payment";
// import { useState } from "react";
// import {
//   Box,
//   Heading,
//   Select,
//   Center,
//   Flex,
//   Card,
//   CardBody,
//   CardHeader,
//   Button,
// } from "@chakra-ui/react";

// export default function Sidebar() {
//   const [food, setFood] = useState([]);
//   return (
//     <>
//       {/* <Payment></Payment> */}
//       <Flex width={"50%"} height={"full"}>
//         <Box flex="1" bg={"white"}>
//           <Heading
//             width={"100%"}
//             height={"50px"}
//             textAlign={"center"}
//             bgColor={"#DFD3C3"}
//           >
//             Cart
//           </Heading>
//           <Center marginX={"auto"} width={"fit-content"}>
//             <Select
//               borderStyle={"unset"}
//               borderEndStyle={"none"}
//               placeholder="Dine in"
//             >
//               <option value="option 1">Take Away</option>
//             </Select>
//           </Center>
//           <Flex wrap={"wrap"} justifyContent={"center"} gap={"10px"}>
//             {food.map((val, index) => {
//               return (
//                 <Card boxShadow={"dark-lg"}>
//                   <CardHeader textAlign={"center"}>
//                     <Heading size="md">{val.nama_makanan}</Heading>
//                   </CardHeader>
//                   <CardBody margin={"auto"}>
//                     <Image
//                       boxSize="150px"
//                       objectFit="cover"
//                       src="https://bit.ly/dan-abramov"
//                       alt="Dan Abramov"
//                     />
//                     <Text>{val.price}</Text>
//                   </CardBody>
//                 </Card>
//               );
//             })}
//           </Flex>
//           <Center as="footer" bgColor="white" mt={"10px"}>
//             <Button variant="ghost" bgColor={"gray"}>
//               Confirm
//             </Button>
//           </Center>
//         </Box>
//       </Flex>
//     </>
//   );
// }
