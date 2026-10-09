export function Badge({
  children,
  variant = "neutral",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-3.5 py-1.5 text-sm",
  }[size] || "px-3 py-1 text-xs";

  const variantStyles = {
    neutral:
      "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
    success:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
    brand:
      "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20",
    outline:
      "border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400",
  }[variant] || "";

  return (
    <span
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
