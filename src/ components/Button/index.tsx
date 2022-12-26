import Link from "next/link";
import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  priority: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  priority,
  href,
  children,
  style,
  onClick,
  buttonType,
}) => {
  return !href ? (
    <button
      className={`${styles[priority]} ${styles.button}`}
      type={buttonType}
    >
      {children}
    </button>
  ) : (
    <Link
      style={style}
      href={href}
      className={`${styles[priority]} ${styles.button}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
