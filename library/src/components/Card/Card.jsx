import React, { useState } from "react";

export const Card = ({
  title = "Card Title",
  subtitle = "Subtitle or category",
  description = "A clean, reusable card component with hover interactions and flexible customization options.",
  image = null,
  badge = null,
  badgeColor = "#6366F1",
  actions = null,
  variant = "default",
  hoverable = true,
  onClick = null,
}) => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    default: {
      bg: "#FFFFFF",
      border: "#E2E8F0",
      shadow: "0 1px 4px rgba(0,0,0,0.06)",
    },
    elevated: {
      bg: "#FFFFFF",
      border: "transparent",
      shadow: "0 8px 32px rgba(0,0,0,0.10)",
    },
    outlined: { bg: "#FFFFFF", border: "#6366F1", shadow: "none" },
    dark: {
      bg: "#0F172A",
      border: "#1E293B",
      shadow: "0 8px 32px rgba(0,0,0,0.4)",
    },
  };

  const v = variants[variant] || variants.default;
  const isDark = variant === "dark";

  const cardStyle = {
    background: v.bg,
    border: `1.5px solid ${hovered && hoverable ? (isDark ? "#334155" : "#6366F1") : v.border}`,
    borderRadius: "18px",
    boxShadow:
      hovered && hoverable
        ? `0 16px 48px rgba(99,102,241,0.14), ${v.shadow}`
        : v.shadow,
    overflow: "hidden",
    width: "300px",
    cursor: onClick ? "pointer" : "default",
    transform: hovered && hoverable ? "translateY(-4px)" : "translateY(0)",
    transition: "all 0.24s cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  };

  const imageStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block",
    background: hovered
      ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
      : "linear-gradient(135deg, #E0E7FF 0%, #EDE9FE 100%)",
    transition: "background 0.3s ease",
  };

  const imagePlaceholderStyle = {
    ...imageStyle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
  };

  const bodyStyle = {
    padding: "20px",
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "99px",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    background: `${badgeColor}18`,
    color: badgeColor,
    marginBottom: "10px",
  };

  const titleStyle = {
    margin: "0 0 4px 0",
    fontSize: "17px",
    fontWeight: 700,
    color: isDark ? "#F1F5F9" : "#0F172A",
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  };

  const subtitleStyle = {
    margin: "0 0 10px 0",
    fontSize: "12px",
    fontWeight: 500,
    color: isDark ? "#64748B" : "#94A3B8",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  };

  const descStyle = {
    margin: "0",
    fontSize: "14px",
    lineHeight: 1.65,
    color: isDark ? "#94A3B8" : "#475569",
  };

  const dividerStyle = {
    height: "1px",
    background: isDark ? "#1E293B" : "#F1F5F9",
    margin: "0 20px",
  };

  const actionsStyle = {
    padding: "14px 20px",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image */}
      {image ? (
        <img src={image} alt={title} style={imageStyle} />
      ) : (
        <div style={imagePlaceholderStyle}>🖼️</div>
      )}

      {/* Body */}
      <div style={bodyStyle}>
        {badge && <span style={badgeStyle}>{badge}</span>}
        <p style={subtitleStyle}>{subtitle}</p>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
      </div>

      {/* Actions */}
      {actions && (
        <>
          <div style={dividerStyle} />
          <div style={actionsStyle}>{actions}</div>
        </>
      )}
    </div>
  );
};

// ── Minimal inline button for demo ───────────────────────────────────────────
const Btn = ({ label, primary }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "7px 16px",
        borderRadius: "8px",
        border: primary ? "none" : "1.5px solid #E2E8F0",
        background: primary
          ? h
            ? "#4F46E5"
            : "#6366F1"
          : h
            ? "#F8FAFC"
            : "transparent",
        color: primary ? "#fff" : "#64748B",
        fontSize: "13px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.15s",
        fontFamily: "inherit",
      }}
    >
      {label}
    </button>
  );
};
