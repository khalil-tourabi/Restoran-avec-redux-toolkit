import React, { useEffect, useState } from "react";
import {
  Box,
  Img,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure you want to delete the post?');
    if (confirm) {
      axios.delete(`http://localhost:3000/posts/${id}`)
        .then(res => {
          location.reload();
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <React.Fragment>
      <Heading textAlign="center" margin={5}>
        Articles:
      </Heading>
      <Box
        padding="20px"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {products.map((product) => (
          <Box
            key={product.id}
            w={{ base: "90%", sm: "xs" }}
            rounded="sm"
            my={5}
            mx={2} 
            overflow="hidden"
            bg="white"
            borderWidth="1px"
            borderColor="black"
            boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
            flex="1"
            maxW={{ base: "100%", sm: "xs" }} 
            minW={{ base: "100%", sm: "xs" }} 
          >
            <Box h="200px" borderBottom="1px" borderColor="black">
              <Img
                src={product.image || "https://via.placeholder.com/200"} 
                roundedTop="sm"
                objectFit="cover"
                h="full"
                w="full"
                alt="Product Image"
              />
            </Box>
            <Box p={4}>
              <Heading color="black" fontSize="2xl" noOfLines={1}>
                {product.name}
              </Heading>
              <Text color="gray.600" noOfLines={1}>
                Category: {product.category}
              </Text>
            </Box>
            <HStack
              borderTop="1px"
              borderColor="black"
              p={4}
              justify="space-between"
            >
              <Button as={Link} to={`/updatepost/${product.id}`} colorScheme="teal" variant="outline" justifyContent={"center"}>
                Edit
              </Button>
              <Button as={Link} to={`/article/${product.id}`} colorScheme="teal" variant="outline" justifyContent={"center"}>
                Show Details
              </Button>
              <Button onClick={() => handleDelete(product.id)} colorScheme="teal" variant="outline" justifyContent={"center"}>
                Delete
              </Button>
            </HStack>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default ArticlesPage;
