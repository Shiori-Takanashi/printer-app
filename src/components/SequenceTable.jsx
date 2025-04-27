import React from 'react';
import { Table, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

export default function SequenceTable({ sequence }) {
    const len = sequence.length;
    const pairCount = len - 1;

    return (
        <Box bg="green.50" p={2} rounded="xl">
            <Table variant="simple" size="sm" borderCollapse="collapse">
                <Tbody>
                    <Tr>
                        {sequence.slice(0, pairCount).map((seq, idx) => (
                            <React.Fragment key={`header-${idx}`}>
                                <Th textAlign="center" p={1} border="1px" borderColor="black">
                                    {seq.button}
                                </Th>
                                <Th textAlign="center" p={1} border="1px" borderColor="black">
                                    待機
                                </Th>
                            </React.Fragment>
                        ))}
                        <Th textAlign="center" p={1} border="1px" borderColor="black">
                            {sequence[len - 1].button}
                        </Th>
                    </Tr>
                    <Tr>
                        {sequence.slice(0, pairCount).map((seq, idx) => (
                            <React.Fragment key={`data-${idx}`}>
                                <Td textAlign="center" p={1} border="1px" borderColor="black">
                                    {seq.press}
                                </Td>
                                <Td textAlign="center" p={1} border="1px" borderColor="black">
                                    {seq.pause}
                                </Td>
                            </React.Fragment>
                        ))}
                        <Td textAlign="center" p={1} border="1px" borderColor="black">
                            {sequence[len - 1].press}
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
}
