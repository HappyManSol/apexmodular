import Link from "next/link";
import {
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  showArrow: boolean,
  className?: string,
) {
  return [
    "btn",
    variant === "primary" ? "btn-primary" : "btn-secondary",
    sizeClasses[size],
    showArrow && variant === "primary" ? "btn-arrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonClasses(variant, size, showArrow, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses(variant, size, showArrow, className)}
      {...props}
    >
      {children}
    </button>
  );
}
