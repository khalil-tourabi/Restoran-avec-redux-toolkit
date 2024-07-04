import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function PostWithLike({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; 

  // Logic to calculate which posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box px={20}>
      <React.Fragment>
        <Heading margin={5} textAlign="center">
          Articles
        </Heading>
        <Flex justifyContent="center" flexWrap="wrap">
          {currentPosts.map((post, index) => (
            <Link
              to={`/article/${post.id}`}
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
                    src={post.image}
                    roundedTop="sm"
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={post.title}
                  />
                </Box>
                <Box p={4}>
                  <Heading color="black" fontSize="2xl" noOfLines={1}>
                    {post.name}
                  </Heading>
                  <Text color="gray.500" noOfLines={2}>
                    {post.category}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
        {/* Pagination controls */}
        <Flex justifyContent="center" mt={5}>
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(
            (pageNumber) => (
              <Box
                key={pageNumber}
                onClick={() => paginate(pageNumber + 1)}
                p={2}
                cursor="pointer"
                bg={pageNumber + 1 === currentPage ? "#2b6cb0" : "transparent"}
                color={pageNumber + 1 === currentPage ? "white" : "black"}
                borderRadius="md"
                mx={1}
              >
                {pageNumber + 1}
              </Box>
            )
          )}
        </Flex>
      </React.Fragment>
    </Box>
  );
}
