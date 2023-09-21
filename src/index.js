import React from "react";
import ReactDOM from "react-dom";
import {
  ChakraProvider,
  Box,
  useDisclosure,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { TbX } from "react-icons/tb";
import { MessageCircle } from "lucide-react";

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    zIndex: 1000,
  },
  iframe: {
    border: "none",
  },
  modalTriggerButton: {
    position: "fixed",
    cursor: "pointer",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "contain",
    boxShadow: "md",
  },
  modalContainer: {
    position: "fixed",
    cursor: "pointer",
    bottom: "90px",
    maxWidth: "450px",
    height: "600px",
    display: "flex",
    borderRadius: "2xl",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "md",
    overflow: "hidden",
  },
};

function ChatWidget({ bot_id }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ChakraProvider>
      {!isOpen && (
        <IconButton
          zIndex={99999999}
          boxShadow="md"
          width="55px"
          height="55px"
          borderRadius="full"
          icon={<MessageCircle />}
          _hover={{ transform: "scale(1.1)", transition: "0.2s all" }}
          position="fixed"
          cursor="pointer"
          bottom="20px"
          right="20px"
          onClick={isOpen ? onClose : onOpen}
        />
      )}
      {isOpen && (
        <IconButton
          zIndex={99999999}
          boxShadow="md"
          borderRadius="full"
          icon={<Icon as={TbX} fontSize="2xl" />}
          width="55px"
          height="55px"
          _hover={{ transform: "scale(1.1)", transition: "0.2s all" }}
          position="fixed"
          cursor="pointer"
          bottom="20px"
          right="20px"
          onClick={isOpen ? onClose : onOpen}
        />
      )}

      <Box
        {...styles.modalContainer}
        display={!isOpen && "none"}
        zIndex={99999999}
        minWidth={["100%", "450px"]}
        right={["0", "20px", "20px"]}
      >
        <iframe
          style={styles.iframe}
          width="100%"
          height="100%"
          src={`https://flawork.ch/chat/${bot_id}`}
        />
      </Box>
    </ChakraProvider>
  );
}

function init(options) {
  const mountElement = document.getElementById(
    options.mountPoint || "chat-widget"
  );
  ReactDOM.render(<ChatWidget {...options} />, mountElement);
}

export { init };
