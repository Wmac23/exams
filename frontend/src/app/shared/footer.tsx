import React from "react";
import footerStyles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <span className={footerStyles.copy}>
        William Macallan @ Cph Business Lyngby - Web Development
      </span>
    </footer>
  );
}