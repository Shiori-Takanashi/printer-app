import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function CategoryTable({ items }) {
    return (
        <Table size="sm" borderWidth="1px" borderStyle="solid" borderColor="blackAlpha.400">
            <colgroup>
                <col width="70%" />
                <col width="30%" />
            </colgroup>

            <Thead bg="blue.100">
                <Tr>
                    <Th
                        color="black"
                        borderWidth="1px"
                        borderStyle="solid"
                        borderColor="blackAlpha.400"
                        borderRightWidth="1px"
                        borderRightStyle="solid"
                        borderRightColor="blackAlpha.400"
                        textAlign="center"
                    >
                        時刻
                    </Th>
                    <Th
                        color="black"
                        borderWidth="1px"
                        borderStyle="solid"
                        borderColor="blackAlpha.400"
                        textAlign="center"
                    >
                        アイテム
                    </Th>
                </Tr>
            </Thead>

            <Tbody>
                {items.map((item, idx) => (
                    <Tr key={idx} bg="cyan.50" _hover={{ bg: "cyan.100" }}>
                        <Td
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="blackAlpha.400"
                            borderRightWidth="1px"
                            borderRightStyle="solid"
                            borderRightColor="blackAlpha.400"
                            textAlign="center"
                        >
                            {item.datetime}
                        </Td>
                        <Td
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="blackAlpha.400"
                            textAlign="center"
                        >
                            {item.item}
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
