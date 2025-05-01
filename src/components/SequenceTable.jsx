import React from 'react';
import { Table, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

export default function SequenceTable({ sequence }) {
    const len = sequence.length;
    const pairCount = len - 1;

    return (
        <Box bg="gray.100" p={2} borderWidth="1px" borderColor="gray.200">
            <Table size="xs" borderCollapse="collapse">
                <Tbody>
                    <Tr>
                        {sequence.slice(0, pairCount).map((seq, idx) => (
                            <React.Fragment key={`header-${idx}`}>
                                <Th textAlign="center" textColor="red.500" bg="gray.50" border="1px" borderColor="gray.200" fontSize="smaller">
                                    {seq.button}
                                </Th>
                                <Th textAlign="center" textColor="gray.500" bg="gray.100" border="1px" borderColor="gray.200" fontSize="smaller">
                                    待機
                                </Th>
                            </React.Fragment>
                        ))}
                        <Th textAlign="center" textColor="red.500" border="1px" borderColor="gray.200" fontSize="smaller">
                            {sequence[len - 1].button}
                        </Th>
                    </Tr>
                    <Tr>
                        {sequence.slice(0, pairCount).map((seq, idx) => (
                            <React.Fragment key={`data-${idx}`}>
                                <Td textAlign="center" textColor="blue.500" bg="gray.50" border="1px" borderColor="gray.200" fontSize="smaller">
                                    {seq.press}
                                </Td>
                                <Td textAlign="center" textColor="green.500" bg="gray.100" border="1px" borderColor="gray.200" fontSize="smaller">
                                    {seq.pause}
                                </Td>
                            </React.Fragment>
                        ))}
                        <Td textAlign="center" textColor="blue.500" border="1px" borderColor="gray.200" fontSize="smaller">
                            {sequence[len - 1].press}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
}
