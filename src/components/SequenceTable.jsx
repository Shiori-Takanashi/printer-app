import React from 'react';
import { Table, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

export default function SequenceTable({ sequence }) {
    const len = sequence.length;
    const pairCount = len - 1;
    const rowCount_top = Math.floor(pairCount / 2);
    const rowCount_bottom = Math.floor(pairCount / 2) + 1;

    return (
        <Box bg="gray.100" p={2} borderWidth="1px" borderColor="gray.200">
            <Table size="xs" borderCollapse="collapse">
                <Tbody>
                    <Tr>
                        {sequence.map((seq, idx) => (
                            <React.Fragment key={`header-${idx}`}>
                                <Th width="80px" textAlign="center" verticalAlign="middle">…</Th>
                                <Th width="80px" textAlign="center" verticalAlign="middle">待機</Th>
                            </React.Fragment>
                        ))}
                    </Tr>
                    <Tr>
                        {sequence.map((seq, idx) => (
                            <React.Fragment key={`data-${idx}`}>
                                <Td width="80px" textAlign="center" verticalAlign="middle">…</Td>
                                <Td width="80px" textAlign="center" verticalAlign="middle">…</Td>
                            </React.Fragment>
                        ))}
                    </Tr>
                </Tbody>
            </Table>

        </Box>
    );
}
