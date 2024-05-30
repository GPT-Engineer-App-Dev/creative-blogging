import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();

  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post", image: "/images/blog-banner.jpg" },
    { id: 2, title: "Second Post", content: "This is the second post", image: "/images/blog-banner.jpg" }
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        {posts.map(post => (
          <Box key={post.id} boxSize="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={post.image} alt={post.title} borderRadius="md" />
            <Heading as="h2" size="lg" mt={4}>{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            <Button colorScheme="red" mt={4} onClick={() => handleDelete(post.id)}>Delete</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={() => navigate('/add-post')}>Add New Post</Button>
      </VStack>
    </Container>
  );
};

export default Index;