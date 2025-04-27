import React, { useState, useEffect } from 'react';
import { Container, Heading, Box } from '@chakra-ui/react';
import CategoryBlock from '../components/CategoryBlock';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data_for_display.json')
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    const groupedData = data.reduce((acc, cur) => {
        (acc[cur.category] = acc[cur.category] || []).push(cur);
        return acc;
    }, {});

    return (
        <Box bg="gray.100" minH="100vh" pt={12} pb={12}>
            <Container maxW="container.md">
                <Heading
                    as="h1"
                    size="lg"
                    textAlign="center"
                    mt={8}
                    p={4}
                    rounded="md"
                    color="white"
                    shadow="md"
                    maxW="600px"
                    mx="auto"
                    bgGradient="linear(to-r, rgb(141,185,235), #6dd5ed)"
                >
                    乱数表
                </Heading>
                {Object.entries(groupedData).map(([category, items]) => (
                    <CategoryBlock key={category} category={category} items={items} />
                ))}
            </Container>
        </Box>
    );
}
