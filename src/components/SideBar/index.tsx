"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const MenuItems = ["Home", "Item1", "Item2", "Item3", "Item4"];

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (item: string) => void;
}

export default function SideBar({
  open,
  onClose,
  selected,
  onSelect,
}: SideBarProps) {
  const handleItemClick = (item: string) => {
    onSelect(item);
    onClose();
  };

  const SideBarContent = (
    <Box
      sx={{
        bgcolor: "#131415",
        height: "100%",
        width: "100vw",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        px: 4,
        pt: 0,
      }}
      role="presentation"
    >
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          pt: 0,
          mt: 4,
        }}
      >
        {MenuItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              width: "auto",
              minWidth: "400px",
            }}
          >
            <ListItemButton
              onClick={() => handleItemClick(item)}
              sx={{
                color:
                  selected === item
                    ? "var(--color-yellow)"
                    : "var(--color-gray)",
                backgroundColor:
                  selected === item ? "var(--color-dark-gray)" : "transparent",
                "&:hover": { backgroundColor: "var(--color-dark-gray)" },
                borderRadius: 3,
                pt: 0,
                px: 3,
                py: 1.5,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <ListItemText
                primary={item}
                sx={{
                  textAlign: "center",
                  "& .MuiListItemText-primary": {
                    textAlign: "center",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          bgcolor: "#131415",
          top: 64,
          height: "calc(100% - 64px)",
        },
      }}
    >
      {SideBarContent}
    </Drawer>
  );
}
