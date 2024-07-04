import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const SearchBar = () => {
  const {posts} = useSelector((store) => store.posts)

  const [searchedItem, setSearchedItem] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const post = posts.find(
      (post) => post.name.toLowerCase() === searchedItem.toLowerCase()
    );
    if (post) {
      navigate(`/article/${post.id}`);
    } else {
      window.confirm("No such Post is available");
    }
  };

  return (
    <>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.600" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          value={searchedItem}
          onChange={(e) => setSearchedItem(e.target.value)}
        />
        <InputRightAddon p={0} border="none">
          <Button
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
