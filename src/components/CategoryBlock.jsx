import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import CategoryTable from './CategoryTable';

export default function CategoryBlock({ category, items }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleHandler = () => setIsOpen(prev => !prev);

    return (
        <Box borderTop="1px" borderColor="gray.400" mt={8} pt={8}>
            <Box textAlign="center" mb={4} position="relative">
                <Heading
                    as="h2"
                    size="md"
                    textAlign="center"
                    cursor="pointer"
                    onClick={toggleHandler}
                    display="inline-block"
                    position="relative"
                    userSelect="none"
                >
                    <Box
                        as="span"
                        position="absolute"
                        left="-2rem"
                        top="50%"
                        transform="translateY(-50%)"
                        fontSize="md"
                    >
                        {isOpen ? "▼" : "▶"}
                    </Box>
                    {category}
                </Heading>
            </Box>

            {isOpen && <CategoryTable items={items} />}
        </Box>
    );
}
