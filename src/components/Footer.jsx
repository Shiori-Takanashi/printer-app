import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <Box
            as="footer"
            bg="gray.600"
            py={6}
            mt={10}
            userSelect="none"
        >
            <Flex
                maxW={{ base: '100%', md: 'container.md' }}
                mx="auto"
                align="center"
                justify="center"
                px={{ base: 4, md: 6 }}
                color="gray.200"
                fontSize="sm"
            >
                <Text>© {year} playingbirds.site</Text>
            </Flex>
        </Box>
    );
}
