export function Card({
  children,
  className = "",
  hover = true,
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={`rounded-2xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 ${
        hover
          ? "hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:hover:border-zinc-750 dark:hover:shadow-zinc-950/50"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
