import Link from "next/link";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  rel,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "min-h-[40px] px-3.5 py-2 text-xs gap-1.5",
    md: "min-h-[44px] px-5 py-2.5 text-sm gap-2",
    lg: "min-h-[48px] px-6 py-3 text-base gap-2.5",
  }[size] || "min-h-[44px] px-5 py-2.5 text-sm gap-2";

  const variantStyles = {
    primary:
      "bg-foreground text-background shadow-sm hover:opacity-90 active:opacity-95",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
    outline:
      "border border-zinc-300 text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/80",
    ghost:
      "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800/60",
    glow:
      "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:brightness-110",
  }[variant] || "";

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={combinedClasses}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
