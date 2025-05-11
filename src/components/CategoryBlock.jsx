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
                    mt="3"
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box as="span" fontSize="xl" fontWeight="extrabold">
                            {category}
                        </Box>
                        {category === 'ボール各種' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                （1連回すとボール2倍チャンスが来る）<br />
                                （戻らずに10連で回すだけ）
                            </Box>
                        )}
                        {category === 'テラピース' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                （1種類が大量。）<br />
                                （道具2倍チャンスのときに回すこと）
                            </Box>
                        )}
                        {category === '道具2倍チャンス' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                （5連で、道具2倍チャンス & パッチor飴）<br />
                                （回し続けても良いし、道具2倍チャンスを出すために使っても良い）
                            </Box>
                        )}
                        {category === 'その他' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                （道具2倍チャンスのときに回すこと）<br />
                                （あまり使わないと思う）
                            </Box>
                        )}
                        {category === 'ボール単品メイン' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                （ボール2倍チャンスのときに回すこと）
                            </Box>
                        )}
                        {category === 'ボール2倍チャンス' && (
                            <Box as="span" mt={2} fontSize="sm" color="gray.600">
                                （すごい傷薬のとき、ミスりにくいかも）<br />
                                （どうせならパッチ欲しいけど）
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
