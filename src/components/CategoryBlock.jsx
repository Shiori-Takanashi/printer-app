import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import CategoryTable from './CategoryTable';

export default function CategoryBlock({ category, items }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleHandler = () => setIsOpen(prev => !prev);

    /* ★ 変更: openIdx → openSet (Set<number>)  */
    const [openSet, setOpenSet] = useState(new Set());

    const handleRowClick = (idx) => {
        setOpenSet(prev => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);  // ★ トグル
            return next;
        });
    };

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

            {isOpen && (
                <CategoryTable
                    items={items}
                    openSet={openSet}          /* ★ 渡す */
                    onRowClick={handleRowClick}
                />
            )}
        </Box>
    );
}
