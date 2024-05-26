import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" mt={10}>
        <Flex direction={{ base: "column", md: "row" }} spacing={10}>
          {/* Blog Posts Section */}
          <Box flex="3">
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary of a blog post. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" ml={{ md: 10 }} mt={{ base: 10, md: 0 }}>
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
                <VStack align="start">
                  <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 1</Link>
                  <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 2</Link>
                  <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 3</Link>
                </VStack>
              </Box>
              <Box>
                <Heading fontSize="lg" mb={4}>Categories</Heading>
                <VStack align="start">
                  <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 1</Link>
                  <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 2</Link>
                  <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 3</Link>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#" _hover={{ color: "gray.400" }}><FaTwitter /></Link>
              <Link href="#" _hover={{ color: "gray.400" }}><FaFacebook /></Link>
              <Link href="#" _hover={{ color: "gray.400" }}><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;