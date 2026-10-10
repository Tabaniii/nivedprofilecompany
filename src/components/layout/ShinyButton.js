"use client";

export function ShinyButton({
  children,
  href,
  className = "",
  onClick,
  ...props
}) {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine shimmer sweep effect */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none"
      />
    </Component>
  );
}

export default ShinyButton;
