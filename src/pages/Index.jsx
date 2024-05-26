import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="/" color="white">Home</Link>
          <Link href="/about" color="white">About</Link>
          <Link href="/blog" color="white">Blog</Link>
          <Link href="/contact" color="white">Contact</Link>
          <Link href="/add-post" color="white">Add Post</Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>

        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                {post.image && <Image src={post.image} alt={post.title} mt={4} />}
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Recent Posts</Heading>
              <Divider my={4} />
              {posts.slice(0, 3).map((post, index) => (
                <Text key={index}>{post.title}</Text>
              ))}
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Categories</Heading>
              <Divider my={4} />
              <Text>Category 1</Text>
              <Text>Category 2</Text>
              <Text>Category 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" mt={8} p={4}>
        <Flex justifyContent="center" alignItems="center">
          <HStack spacing={4}>
            <Link href="#" isExternal><FaTwitter /></Link>
            <Link href="#" isExternal><FaFacebook /></Link>
            <Link href="#" isExternal><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;