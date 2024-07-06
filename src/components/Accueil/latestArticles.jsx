import React from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LatestArticles = () => {
  const {posts} = useSelector((store) => store.posts)
  const latestPosts = posts.slice(-3);

  return (
    <Box p="5%">
      <>
        <Heading textAlign="center" margin={7}>
          Dernier Articles
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {latestPosts.map((post, index) => (
            <Box key={index}>
              <center>
                <Box borderWidth="1px" borderRadius="lg" p={4}>
                  <Image
                    src={post.image}
                    alt={post.name}
                    borderRadius="md"
                    width="400px" 
                    height="250px" 
                  />
                  <Heading size="md" mt={4}>
                    {post.name}
                  </Heading>
                  <Text mt={2}>{post.category}</Text>
                  <Button
                    as={Link}
                    to={`/article/${post.id}`}
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
