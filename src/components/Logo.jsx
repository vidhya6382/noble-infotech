import Link from "next/link";

/** Noble Infotech logo (image in /public/images/logo.png) + company name. */
export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Noble Infotech home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt="Noble Infotech logo" className="logo-img" width="48" height="48" />
      <span className="logo-text">
        <span className="logo-name">NOBLE</span>
        <span className="logo-sub">INFOTECH</span>
      </span>
    </Link>
  );
}
