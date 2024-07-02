import React, { useContext } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import ProductContext from "../ProductsContext";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  const latestProducts = products.slice(-3);

  return (
    <Box p="5%">
      <>
        <Heading textAlign="center" margin={7}>
          Dernier Articles
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {latestProducts.map((product, index) => (
            <Box key={index}>
              <center>
                <Box borderWidth="1px" borderRadius="lg" p={4}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius="md"
                    width="250px" 
                    height="200px" 
                  />
                  <Heading size="md" mt={4}>
                    {product.name}
                  </Heading>
                  <Text mt={2}>{product.category}</Text>
                  <Button
                    as={Link}
                    to={`/article/${product.id}`}
                    mt={4}
                    colorScheme="blue"
                  >
                    View here
                  </Button>
                </Box>
              </center>
            </Box>
          ))}
        </SimpleGrid>
      </>
    </Box>
  );
};

export default LatestArticles;
