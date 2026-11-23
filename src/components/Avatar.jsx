import SmartImage from "./SmartImage";

/** Shows a photo when available, otherwise the person's initials on a gradient. */
export default function Avatar({ name = "", image, size = 56 }) {
  if (image) {
    return <SmartImage src={image} alt={name} className="avatar" style={{ width: size, height: size }} draggable={false} />;
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className="avatar avatar-initials" style={{ width: size, height: size }} aria-hidden="true">
      {initials || "?"}
    </span>
  );
}
