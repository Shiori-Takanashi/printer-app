import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import CategoryTable from './CategoryTable';

export default function CategoryBlock({ category, items }) {
    const [isOpen, setIsOpen] = useState(true);

    const [openSet, setOpenSet] = useState(new Set());
    const handleRowClick = (idx) => {
        setOpenSet(prev => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    return (
        <Box mt={4} pt={4} userSelect="none">
            <Box textAlign="center" mb={4} position="relative">
                <Heading
                    as="h2"
                    size="md"
                    display="inline-block"
                    position="relative"
                    userSelect="none"
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        {/* カテゴリ名 */}
                        <Box as="span" fontSize="lg" fontWeight="bold">
                            {category}
                        </Box>

                        {/* カテゴリが「ボール各種」のときだけ表示 */}
                        {category === 'ボール各種' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                (1連から即座に10連)
                            </Box>
                        )}
                    </Box>
                </Heading>
            </Box>

            {isOpen && (
                <CategoryTable
                    items={items}
                    openSet={openSet}
                    onRowClick={handleRowClick}
                />
            )}
        </Box>
    );
}
