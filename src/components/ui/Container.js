export function Container({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
