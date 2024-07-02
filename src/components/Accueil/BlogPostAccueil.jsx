import React, { useContext } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductContext from "../ProductsContext";

export default function PostWithLike() {
  const { products } = useContext(ProductContext);

  // Get the last three products
  const lastThreeProducts = products.slice(-4);

  return (
    <Box px={20}>
      <React.Fragment>
        <Heading margin={5} textAlign="center">
          Articles
        </Heading>
        <Flex justifyContent="center" flexWrap="wrap">
          {lastThreeProducts.map((product, index) => (
            <Link
              to={`/article/${product.id}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <Box
                w={{ base: "90%", sm: "xs" }}
                rounded="sm"
                my={5}
                mx={2}
                overflow="hidden"
                bg="white"
                border="1px"
                borderColor="black"
                boxShadow={useColorModeValue(
                  "6px 6px 0 black",
                  "6px 6px 0 cyan"
                )}
                flex="1"
                maxW={{ base: "100%", sm: "xs" }}
                minW={{ base: "100%", sm: "xs" }}
                cursor="pointer"
              >
                <Box h="200px" borderBottom="1px" borderColor="black">
                  <Img
                    src={product.image}
                    roundedTop="sm"
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={product.title}
                  />
                </Box>
                <Box p={4}>
                  <Heading color="black" fontSize="2xl" noOfLines={1}>
                    {product.name}
                  </Heading>
                  <Text color="gray.500" noOfLines={2}>
                    {product.category}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
        <center>
          <Link
            to={"/articles"}
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#2b6cb0",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Show More
          </Link>
        </center>
      </React.Fragment>
    </Box>
  );
}
