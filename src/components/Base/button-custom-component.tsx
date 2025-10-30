"use client";

import React, { forwardRef } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export type BtnVariant = "normal" | "secondary";

export interface CustomButtonProps extends ButtonProps {
  btnVariant?: BtnVariant;
  loading?: boolean;
}

const getCss = (name: string, fallback: string) =>
  typeof window === "undefined"
    ? fallback
    : getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim() || fallback;

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const {
      children,
      btnVariant = "normal",
      loading = false,
      disabled = false,
      startIcon,
      endIcon,
      sx,
      ...rest
    } = props;

    const isDisabled = Boolean(disabled) || loading;

    const yellow = getCss("--color-yellow", "#FFC700");
    const black = getCss("--color-black", "#1F2023");
    const background = getCss("--color-background", "#1F2023");
    const textPrimary = getCss("--color-text-primary", "#FFFFFF");

    const disabledYellow = "#665000";
    const disabledTextDark = "#0C0C0C";
    const disabledBgDark = "#2B2B2B";
    const disabledTextLight = "#AFAFAF";

    const variantStyles =
      btnVariant === "normal"
        ? {
            backgroundColor: isDisabled ? disabledYellow : yellow,
            color: isDisabled ? disabledTextDark : black,
            border: "none",
            "&:hover": {
              backgroundColor: isDisabled ? disabledYellow : undefined,
              filter: isDisabled ? "none" : "brightness(0.95)",
            },
          }
        : {
            backgroundColor: isDisabled
              ? disabledBgDark
              : background || "#1F2023",
            color: isDisabled ? disabledTextLight : textPrimary || "#FFFFFF",
            border: `2px solid ${isDisabled ? "rgba(255,199,0,0.28)" : yellow}`,
            "&:hover": {
              backgroundColor: isDisabled ? disabledBgDark : undefined,
              filter: isDisabled ? "none" : "brightness(0.95)",
            },
          };

    return (
      <Button
        ref={ref}
        disabled={isDisabled}
        startIcon={!loading ? startIcon : undefined}
        endIcon={!loading ? endIcon : undefined}
        sx={{
          textTransform: "none",
          fontWeight: 900,
          px: 3,
          borderRadius: 10,
          maxHeight: 36,
          fontStyle: "italic",
          ...variantStyles,

          ...(sx as object),
        }}
        {...rest}
      >
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
          {loading ? <CircularProgress size={18} thickness={4} /> : children}
        </Box>
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
