/**
 * Scroll reveal wrapper.
 * Uses pure CSS (scroll-driven animations) so content is ALWAYS visible,
 * even if JavaScript is slow or fails. Browsers without support simply
 * show the content without the animation.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
  ...props
}) {
  return (
    <Tag
      className={`reveal reveal-${direction} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
