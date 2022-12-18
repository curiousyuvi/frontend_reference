import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  width: "100%",
  alignItems: "center",
}));

export const ModalWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  padding: "2rem",
  overflowY: "auto",
  maxHeight: "85vh",
  gap: "1rem",
}));

export const BanksWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "0.5rem",
}));

export const BankButton = styled(Box)(({ theme }) => ({
  width: "120px",
  padding: "0.2rem",
  borderRadius: "10px",
  cursor: "pointer",
}));
