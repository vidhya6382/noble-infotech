"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContactForm } from "@/lib/api";
import { validateContact } from "@/lib/validation";
import services from "@/data/services";

const INITIAL = { name: "", email: "", phone: "", subject: "", message: "" };
const MAX_MESSAGE = 1000;

function FieldError({ name, message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={`contact-${name}-error`}
          className="field-error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <AlertCircle size={14} /> {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) {
      const fieldErrors = validateContact(next);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
    if (status !== "idle" && status !== "loading") setStatus("idle");
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validateContact(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allErrors = validateContact(values);
    setErrors(allErrors);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (Object.keys(allErrors).length > 0) {
      const first = Object.keys(INITIAL).find((k) => allErrors[k]);
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        subject: values.subject,
        message: values.message.trim(),
      };
      await submitContactForm(payload);
      setStatus("success");
      // CHANGED - Always show "soon", never 24 hours / one business day
      setServerMessage("Thanks! We'll get back to you soon.");
      setValues(INITIAL);
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setServerMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    className: `input ${errors[name] ? "has-error" : ""}`,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <form className="form-card glass" onSubmit={handleSubmit} noValidate>
      <h3>Send us a message</h3>
      {/* CHANGED - was "within one business day" */}
      <p>Tell us about your goals and we&apos;ll reply soon.</p>

      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            className={`form-alert ${status}`}
            role={status === "error" ? "alert" : "status"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {status === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span>{serverMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-name">
            Full Name <span className="req">*</span>
          </label>
          <input type="text" placeholder="John Doe" autoComplete="name" {...fieldProps("name")} />
          <FieldError name="name" message={errors.name} />
        </div>
        <div className="field">
          <label htmlFor="contact-email">
            Email Address <span className="req">*</span>
          </label>
          <input type="email" placeholder="john@company.com" autoComplete="email" {...fieldProps("email")} />
          <FieldError name="email" message={errors.email} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="contact-phone">
            Phone Number <span className="req">*</span>
          </label>
          <input type="tel" placeholder="+91 98765 43210" autoComplete="tel" {...fieldProps("phone")} />
          <FieldError name="phone" message={errors.phone} />
        </div>
        <div className="field">
          <label htmlFor="contact-subject">
            Subject <span className="req">*</span>
          </label>
          <select {...fieldProps("subject")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="General Enquiry">General Enquiry</option>
            <option value="Graphic Design">Graphic Dessign</option>
          </select>
          <FieldError name="subject" message={errors.subject} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-message">
          Message <span className="req">*</span>
        </label>
        <textarea
          rows={5}
          maxLength={MAX_MESSAGE}
          placeholder="Tell us about your business, goals and budget..."
          {...fieldProps("message")}
        />
        <div className="char-count">
          {values.message.length}/{MAX_MESSAGE}
        </div>
        <FieldError name="message" message={errors.message} />
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
      <p className="form-note">We respect your privacy. Your details are never shared.</p>
    </form>
  );
}