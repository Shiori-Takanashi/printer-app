import React, { useState, useEffect } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import CategoryBlock from '../components/CategoryBlock';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data/data_for_display.json')
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, []);

    const groupedData = data.reduce((acc, cur) => {
        (acc[cur.category] = acc[cur.category] || []).push(cur);
        return acc;
    }, {});

    return (
        <Flex direction="column" minH="100vh" bg="gray.200">
            <Header />
            {/* メインコンテンツ部分を flexGrow で伸縮させる */}
            <Box as="main" flex="1" pt={1} pb={4}>
                <Container
                    maxW={{ base: '100%', md: 'container.md' }}
                    px={{ base: 2, md: 4 }}
                >
                    {Object.entries(groupedData).map(([category, items]) => (
                        <CategoryBlock key={category} category={category} items={items} />
                    ))}
                </Container>
            </Box>

            {/* フッターは常にこの位置に */}
            <Footer />
        </Flex >
    );
}
