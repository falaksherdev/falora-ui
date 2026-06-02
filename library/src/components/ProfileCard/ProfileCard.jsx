import React, { useState } from "react";

export const ProfileCard = ({
  name = "Falak Sher",
  role = "Senior Full Stack Developer",
  company = "WebhpSolutions",
  avatar = null,
  coverColor = ["#6366F1", "#8B5CF6"],
  bio = "Crafting intuitive digital experiences that sit at the intersection of design and technology.",
  stats = [
    { label: "Projects", value: "128" },
    { label: "Followers", value: "4.2k" },
    { label: "Following", value: "381" },
  ],
  tags = ["UI/UX", "Figma", "React", "Design Systems"],
  social = { twitter: true, github: true, linkedin: true },
  onFollow = () => {},
  onMessage = () => {},
  variant = "default",
}) => {
  const [followed, setFollowed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);

  const isDark = variant === "dark";

  const colors = {
    bg: isDark ? "#0F172A" : "#FFFFFF",
    surface: isDark ? "#1E293B" : "#F8FAFC",
    border: isDark ? "#1E293B" : "#E2E8F0",
    text: isDark ? "#F1F5F9" : "#0F172A",
    muted: isDark ? "#64748B" : "#94A3B8",
    subtle: isDark ? "#334155" : "#E2E8F0",
  };

  const gradient = `linear-gradient(135deg, ${coverColor[0]} 0%, ${coverColor[1]} 100%)`;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "320px",
        borderRadius: "22px",
        overflow: "hidden",
        background: colors.bg,
        border: `1.5px solid ${hovered ? coverColor[0] : colors.border}`,
        boxShadow: hovered
          ? `0 20px 56px ${coverColor[0]}28`
          : isDark
            ? "0 4px 24px rgba(0,0,0,0.4)"
            : "0 2px 12px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.26s cubic-bezier(0.4,0,0.2,1)",
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
      }}
    >
      {/* Cover */}
      <div
        style={{
          height: "90px",
          background: gradient,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Avatar */}
      <div style={{ position: "relative", padding: "0 22px" }}>
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "22px",
            width: "76px",
            height: "76px",
            borderRadius: "50%",
            border: `3px solid ${colors.bg}`,
            background: avatar ? "transparent" : gradient,
            overflow: "hidden",
            boxShadow: `0 4px 16px ${coverColor[0]}44`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "26px",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            initials
          )}
        </div>

        {/* Follow button top-right */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "12px",
          }}
        >
          <button
            onClick={() => {
              setFollowed((f) => !f);
              onFollow();
            }}
            style={{
              padding: "7px 18px",
              borderRadius: "99px",
              border: followed ? `1.5px solid ${colors.subtle}` : "none",
              background: followed ? "transparent" : gradient,
              color: followed ? colors.muted : "#fff",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.18s",
              fontFamily: "inherit",
              letterSpacing: "0.01em",
            }}
          >
            {followed ? "✓ Following" : "+ Follow"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "36px 22px 0" }}>
        <h3
          style={{
            margin: "0 0 2px",
            fontSize: "18px",
            fontWeight: 800,
            color: colors.text,
            letterSpacing: "-0.02em",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            margin: "0 0 2px",
            fontSize: "13px",
            fontWeight: 500,
            color: coverColor[0],
          }}
        >
          {role}
        </p>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: "12px",
            color: colors.muted,
            fontWeight: 500,
          }}
        >
          @ {company}
        </p>
        <p
          style={{
            margin: "0 0 18px",
            fontSize: "13.5px",
            lineHeight: 1.65,
            color: isDark ? "#94A3B8" : "#475569",
          }}
        >
          {bio}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              onMouseEnter={() => setHoveredTag(i)}
              onMouseLeave={() => setHoveredTag(null)}
              style={{
                padding: "4px 11px",
                borderRadius: "99px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                background: hoveredTag === i ? gradient : `${coverColor[0]}14`,
                color: hoveredTag === i ? "#fff" : coverColor[0],
                cursor: "default",
                transition: "all 0.16s",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          borderTop: `1px solid ${colors.border}`,
          borderBottom: `1px solid ${colors.border}`,
          margin: "0",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: "14px 0",
              textAlign: "center",
              borderRight:
                i < stats.length - 1 ? `1px solid ${colors.border}` : "none",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: colors.text,
                letterSpacing: "-0.01em",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: colors.muted,
                fontWeight: 500,
                marginTop: "2px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "10px", padding: "16px 22px" }}>
        <SocialBtn
          show={social.twitter}
          label="Twitter"
          icon="𝕏"
          color={coverColor[0]}
          isDark={isDark}
          colors={colors}
        />
        <SocialBtn
          show={social.github}
          label="GitHub"
          icon="⌥"
          color={coverColor[0]}
          isDark={isDark}
          colors={colors}
        />
        <SocialBtn
          show={social.linkedin}
          label="LinkedIn"
          icon="in"
          color={coverColor[0]}
          isDark={isDark}
          colors={colors}
        />
        <button
          onClick={onMessage}
          style={{
            marginLeft: "auto",
            padding: "8px 18px",
            borderRadius: "10px",
            border: "none",
            background: gradient,
            color: "#fff",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: "0.01em",
            boxShadow: `0 4px 14px ${coverColor[0]}40`,
          }}
        >
          Message
        </button>
      </div>
    </div>
  );
};

const SocialBtn = ({ show, label, icon, color, isDark, colors }) => {
  const [h, setH] = useState(false);
  if (!show) return null;
  return (
    <button
      title={label}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "9px",
        border: `1.5px solid ${h ? color : colors.subtle}`,
        background: h ? `${color}14` : "transparent",
        color: h ? color : colors.muted,
        fontSize: "13px",
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s",
        fontFamily: "inherit",
      }}
    >
      {icon}
    </button>
  );
};
