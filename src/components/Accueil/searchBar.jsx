import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
// import ProductContext from "../ProductsContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SearchBar = () => {
  // const { products } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    const product = products.find(
      (product) => product.name.toLowerCase() === searchedItem.toLowerCase()
    );
    if (product) {
      navigate(`/article/${product.id}`);
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
