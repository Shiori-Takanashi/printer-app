import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import SequenceTable from './SequenceTable';

export default function CategoryTable({ items }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleRowClick = (index) => {
        setSelectedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <Table variant="simple" size="sm" bg="white" border="1px" borderColor="gray.200">
            <Thead bg="cyan.300">
                <Tr>
                    <Th textAlign="center" color="white">時刻</Th>
                    <Th textAlign="center" color="white">アイテム</Th>
                </Tr>
            </Thead>
            <Tbody>
                {items.map((item, idx) => (
                    <>
                        <Tr
                            key={idx}
                            onClick={() => handleRowClick(idx)}
                            cursor="pointer"
                            bg={selectedIndex === idx ? "blue.100" : "white"}
                            _hover={{ bg: "cyan.100" }}
                        >
                            <Td textAlign="center">{item.datetime}</Td>
                            <Td textAlign="center">{item.item}</Td>
                        </Tr>
                        {selectedIndex === idx && (
                            <Tr>
                                <Td colSpan={2} p={0}>
                                    <SequenceTable sequence={item.sequence} />
                                </Td>
                            </Tr>
                        )}
                    </>
                ))}
            </Tbody>
        </Table>
    );
}
