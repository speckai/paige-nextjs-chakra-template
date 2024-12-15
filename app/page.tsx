"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Container maxW="container.lg" px={4}>
        <Box maxW="2xl" mx="auto" bg="white" rounded="xl" shadow="lg" p={8}>
          <VStack spacing={8}>
            <Heading size="2xl">Paige Template</Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">
              Paige is currently setting up your project. The changes will be
              reflected here shortly.
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
