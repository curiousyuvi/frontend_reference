import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxWidth: "600px",
  top: "50%",
  left: "50%",
  borderRadius: "5px",
  height: "auto",
  transform: "translate(-50%, -50%)",

  //   "@media (min-width: 600px)": {
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     maxWidth: "900px",
  //     borderRadius: "5px",
  //     height: "auto",
  //   },
};

const ModalTopBar = styled(Box)(({ theme }) => ({
  top: 0,
  padding: "0.3rem 0.8rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#ffd05b",
  borderRadius: "5px 5px 0 0",
}));

const SolrufModal4 = ({ children, open, onClose, sx }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "@media (min-width: 600px)": { margin: "0 0.5rem" },
        }}
      >
        <Box sx={{ ...style, ...sx }}>
          <ModalTopBar>
            <CloseIcon
              sx={{
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={onClose}
            />
          </ModalTopBar>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default SolrufModal4;
