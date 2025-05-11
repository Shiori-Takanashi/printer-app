import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function UpButton() {
    return (
        <IconButton
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            position="fixed"
            bottom="4"
            right="4"
            colorScheme="teal"
            boxShadow="md"
            aria-label="トップへ戻る"
        />
    );
}
