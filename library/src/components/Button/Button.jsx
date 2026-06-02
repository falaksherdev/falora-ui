import React, { useState } from "react";

export const Button = ({
  label = "Click Me",
  onClick = () => {},
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  icon = null,
}) => {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const palette = {
    primary: {
      bg: "#0F172A",
      text: "#F8FAFC",
      border: "#0F172A",
      hoverBg: "#1E293B",
      accent: "#38BDF8",
    },
    secondary: {
      bg: "transparent",
      text: "#0F172A",
      border: "#CBD5E1",
      hoverBg: "#F1F5F9",
      accent: "#0F172A",
    },
    danger: {
      bg: "#EF4444",
      text: "#FFF",
      border: "#EF4444",
      hoverBg: "#DC2626",
      accent: "#FCA5A5",
    },
    ghost: {
      bg: "transparent",
      text: "#64748B",
      border: "transparent",
      hoverBg: "#F1F5F9",
      accent: "#64748B",
    },
  };

  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: "12px",
      borderRadius: "8px",
      gap: "5px",
    },
    md: {
      padding: "10px 22px",
      fontSize: "14px",
      borderRadius: "10px",
      gap: "7px",
    },
    lg: {
      padding: "14px 30px",
      fontSize: "16px",
      borderRadius: "12px",
      gap: "9px",
    },
  };

  const c = palette[variant] || palette.primary;
  const s = sizes[size] || sizes.md;

  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    fontWeight: 600,
    letterSpacing: "0.01em",
    color: disabled ? "#94A3B8" : c.text,
    background: disabled ? "#E2E8F0" : hovered ? c.hoverBg : c.bg,
    border: `1.5px solid ${disabled ? "#E2E8F0" : hovered ? c.accent : c.border}`,
    borderRadius: s.borderRadius,
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    outline: "none",
    transform: pressed && !disabled ? "scale(0.97)" : "scale(1)",
    boxShadow:
      hovered && !disabled
        ? `0 4px 14px 0 ${c.accent}40`
        : "0 1px 3px 0 rgba(0,0,0,0.08)",
    transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    userSelect: "none",
    WebkitTapHighlightColor: "transparent",
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {icon && (
        <span
          style={{ display: "flex", alignItems: "center", fontSize: "1.1em" }}
        >
          {icon}
        </span>
      )}
      {label}
    </button>
  );
};
