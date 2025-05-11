import React from 'react';
import { Box, Table, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function SequenceTable({ sequence }) {
    const len = sequence.length;
    const rowCount_top = Math.floor((len - 1) / 2) - 1;
    const rowCount_bottom = len - 2;

    const renderHeaderRow = (start, end) => (
        <Tr>
            {sequence.slice(start, end + 1).map((seq, idx) => (
                <React.Fragment key={`header-${start + idx}`}>
                    <Th
                        textAlign="center"
                        textColor="red.500"
                        bg="gray.50"
                        borderWidth="1px"
                        borderColor="blackAlpha.500"
                        borderStyle="solid"
                        fontSize="smaller"
                        userSelect="none"
                    >
                        {seq.button}
                    </Th>
                    <Th
                        textAlign="center"
                        textColor="gray.700"
                        fontWeight="normal"
                        bg="gray.50"
                        borderWidth="1px"
                        borderColor="blackAlpha.500"
                        borderStyle="solid"
                        fontSize="smaller"
                        userSelect="none"
                    >
                        待機
                    </Th>
                </React.Fragment>
            ))}
            <Th
                textAlign="center"
                textColor="red.500"
                bg="gray.50"
                borderWidth="1px"
                borderColor="blackAlpha.500"
                borderStyle="solid"
                fontSize="smaller"
                userSelect="none"
            >
                {sequence[len - 1].button}
            </Th>
        </Tr>
    );

    const renderDataRow = (start, end) => (
        <Tr>
            {sequence.slice(start, end + 1).map((seq, idx) => (
                <React.Fragment key={`data-${start + idx}`}>
                    <Td
                        textAlign="center"
                        textColor="gray.700"
                        bg="gray.50"
                        borderWidth="1px"
                        borderColor="blackAlpha.500"
                        borderStyle="solid"
                        fontSize="smaller"
                        userSelect="none"
                    >
                        {seq.press}
                    </Td>
                    <Td
                        textAlign="center"
                        textColor="red.500"
                        fontWeight="bold"
                        bg="gray.50"
                        borderWidth="1px"
                        borderColor="blackAlpha.500"
                        borderStyle="solid"
                        fontSize="smaller"
                        userSelect="none"
                    >
                        {seq.pause}
                    </Td>
                </React.Fragment>
            ))}
            <Td
                textAlign="center"
                textColor="gray.700"
                bg="gray.50"
                borderWidth="1px"
                borderColor="blackAlpha.500"
                borderStyle="solid"
                fontSize="smaller"
                userSelect="none"
            >
                {sequence[len - 1].press}
            </Td>
        </Tr>
    );

    return (
        <Box
            overflowX="auto"
            w="100%"
            bg="gray.100"
            p={2}
            borderBottomStyle="solid"
            borderBottomWidth="1px"
            borderBottomColor="blue.200"
        >
            <Table size="xs" minW="400px" borderCollapse="collapse" marginBottom={2}>
                <Tbody>
                    {renderHeaderRow(0, rowCount_top)}
                    {renderDataRow(0, rowCount_top)}
                    <Tr>
                        <Td height="12px" bg="gray.100" border="none" />
                    </Tr>
                    {renderHeaderRow(rowCount_top, rowCount_bottom)}
                    {renderDataRow(rowCount_top, rowCount_bottom)}
                </Tbody>
            </Table>
        </Box>
    );
}
