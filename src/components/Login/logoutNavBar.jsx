"use client";

import {
  Box,
  Flex,
  IconButton,
  HStack,
  useDisclosure,
  useColorModeValue,
  Button, ButtonGroup
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SearchBar } from "./searchBar";
import { Link } from "react-router-dom";

const Links = [
  { name: "Accueil", path: "/" },
  { name: "Articles", path: "/articles" },
  { name: "Ajouter Article", path: "/ajouter-article" },
  { name: "A Propos", path: "/a-propos" },
];

const NavLink = ({ children, path }) => (
  <Box
    as={Link}
    to={path}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Box>
);

export default function LogOutNavbar({ posts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            {/* <Box>Logo</Box> */}
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <SearchBar posts={posts} />
            <Button as={Link} to={'/login'} colorScheme="teal" variant="link" ml={10} hidden >
              Login
            </Button>
            <Button as={Link} to={'/'} colorScheme="teal" variant="link" ml={10} >
              Logout
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
