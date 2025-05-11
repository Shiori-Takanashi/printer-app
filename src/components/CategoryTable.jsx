import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SequenceTable from './SequenceTable';



export default function CategoryTable({ items, openSet, onRowClick }) {
    function deleteMinutes(datetimeStr) {
        const displayTime = datetimeStr.split("分")[0] + "分";
        return displayTime
    }

    return (
        <Box w="100%">
            <Table size="sm" borderWidth="1px" borderStyle="solid" borderColor="blackAlpha.400" boxShadow="md">
                <colgroup>
                    <col width="50%" />
                    <col width="50%" />
                </colgroup>

                <Thead bg="blue.200" userSelect="none">
                    <Tr>
                        <Th
                            color="black"
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="blue.100"
                            textAlign="center"
                        >
                            時刻
                        </Th>
                        <Th
                            color="black"
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="blue.100"
                            textAlign="center"
                        >
                            アイテム
                        </Th>
                    </Tr>
                </Thead>

                <Tbody userSelect="none">
                    {items.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <Tr
                                role="group"
                                onClick={() => onRowClick?.(idx)}
                            >
                                <Td
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderColor="blue.200"
                                    borderRightWidth="1px"
                                    borderRightStyle="solid"
                                    borderRightColor="blue.100"
                                    textAlign="center"
                                    fontSize="xs"
                                    px={0}
                                    bg={idx % 2 === 0 ? "blue.50" : "whiteAlpha.800"}
                                    _groupHover={{ bg: "teal.100", cursor: "pointer" }}
                                >
                                    {deleteMinutes(item.datetime)}
                                </Td>
                                <Td
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderColor="blue.200"
                                    textAlign="center"
                                    fontSize="xs"
                                    px={0}
                                    bg={idx % 2 === 0 ? "blue.50" : "whiteAlpha.800"}
                                    _groupHover={{ bg: "teal.100", cursor: "pointer" }}
                                >
                                    {item.item}
                                </Td>
                            </Tr>

                            {/* openSetに含まれている行だけ差し込む */}
                            {openSet?.has(idx) && (
                                <Tr>
                                    <Td colSpan={2} p={0}>
                                        <SequenceTable sequence={item.sequence} />
                                    </Td>
                                </Tr>
                            )}
                        </React.Fragment>
                    ))}
                </Tbody>
            </Table >
        </Box>
    );
}
