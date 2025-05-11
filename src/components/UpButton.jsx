import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function UpButton() {
    return (
        <IconButton
            icon={<FaArrowUp size={28} />}
            onClick={scrollToTop}
            position="fixed"
            boxSize="60px"
            bottom="12"
            right="16"
            colorScheme="teal"
            boxShadow="md"
            aria-label="トップへ戻る"
            zIndex={999}
        />
    );
}
