import React from 'react';
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';

export default function Header() {
    return (
        <Box
            as="header"
            bgGradient="linear(to-r, rgb(141,185,235), #6dd5ed)"
            px={12}
            py={3}
            mx="auto"
            mt={6}
            boxShadow="md"
            maxW="300px"
            borderRadius="md"
            userSelect="none"
        >
            <Flex justify="center" align="center" maxW="container.md" mx="auto">
                <Heading as="h1" size="lg" color="white">
                    乱数表
                </Heading>
            </Flex>
        </Box>
    );
}
