"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import services from "@/data/services";
import Icon from "./Icon";
import Logo from "./Logo";
import GetStartedButton from "./GetStartedButton";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);
  const pointerType = useRef("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close mobile menu if the screen is resized to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth > 992 && setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const openDropdown = () => {
    clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdownSoon = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <header className={`navbar ${scrolled || mobileOpen ? "scrolled" : ""}`}>
        <div className="container navbar-inner">
          <Logo />

          <nav aria-label="Main navigation">
            <ul className="nav-links">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li
                    key={link.href}
                    ref={dropdownRef}
                    className={`nav-item ${dropdownOpen ? "open" : ""}`}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdownSoon}
                  >
                    <button
                      type="button"
                      className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      onPointerDown={(e) => (pointerType.current = e.pointerType)}
                      onClick={() =>
                        // mouse users already opened it by hovering, so a click keeps it open
                        pointerType.current === "mouse" ? setDropdownOpen(true) : setDropdownOpen((v) => !v)
                      }
                    >
                      {link.label}
                      <ChevronDown size={16} className="chev" />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          className="dropdown"
                          role="menu"
                          initial={{ opacity: 0, y: 10, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 10, x: "-50%" }}
                          transition={{ duration: 0.22 }}
                        >
                          {services.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/${s.id}`}
                              className="dropdown-link"
                              role="menuitem"
                              onClick={() => setDropdownOpen(false)}
                            >
                              <span className="dropdown-icon">
                                <Icon name={s.icon} size={17} />
                              </span>
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={link.href} className="nav-item">
                    <Link href={link.href} className={`nav-link ${isActive(link.href) ? "active" : ""}`}>
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="nav-cta">
            <GetStartedButton className="btn btn-primary btn-sm" arrowSize={16}>
              Get Started
            </GetStartedButton>
            <button
              type="button"
              className="menu-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className={`mobile-link ${isActive(link.href) ? "active" : ""}`}
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      style={{
                        transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                        transition: "transform .3s",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        className="mobile-sub"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link href="/services" onClick={() => setMobileOpen(false)}>
                          All Services
                        </Link>
                        {services.map((s) => (
                          <Link key={s.id} href={`/services/${s.id}`} onClick={() => setMobileOpen(false)}>
                            <Icon name={s.icon} size={16} />
                            {s.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-link ${isActive(link.href) ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <GetStartedButton arrowSize={16} onClick={() => setMobileOpen(false)}>
              Get Started
            </GetStartedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}