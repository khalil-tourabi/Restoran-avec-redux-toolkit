import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Flex,
  Center,
} from "@chakra-ui/react";

const Categories = () => {
  return (
    <React.Fragment>
      <Center>
        <Heading margin={5}>Categories</Heading>
      </Center>
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Card maxW="sm" m="4">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1464306208223-e0b4495a5553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">BreakFast</Heading>
              <Text>
                Discover delightful breakfast cooking recipes to elevate your
                mornings!
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              style={{ margin: "5px" }}
            >
              Show more{" "}
            </Button>
          </CardFooter>
        </Card>


        <Card maxW="sm" m="4">
          <CardBody>
            <Image
              src="https://plus.unsplash.com/premium_photo-1672242676674-f4349cc6470e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Lunch</Heading>
              <Text>
                Discover delightful lunch cooking recipes to elevate your
                midday!
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              style={{ margin: "5px" }}
            >
              Show more{" "}
            </Button>
          </CardFooter>
        </Card>


        <Card maxW="sm" m="4">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1522906456132-bac22adad34e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Dinner</Heading>
              <Text>
                Explore delightful dinner cooking recipes for a satisfying
                evening!
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              style={{ margin: "5px" }}
            >
              Show more{" "}
            </Button>
          </CardFooter>
        </Card>
      </Flex>
    </React.Fragment>
  );
};

export default Categories;
