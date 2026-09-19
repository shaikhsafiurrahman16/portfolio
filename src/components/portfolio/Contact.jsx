import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PERSONAL } from "@/lib/portfolio-data";
import { Section, SectionHeading } from "./Shared";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) errs.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/shaikhsafiurrahman16@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `🚀 Portfolio Message from ${form.name}: "${form.subject}"`,
          _template: "table",
          _captcha: "false",
          _replyto: form.email,
          _autoresponse: `Dear ${form.name},\n\nThank you for reaching out via my portfolio website (safi-dev.vercel.app).\n\nI have successfully received your message regarding "${form.subject}". I will review your requirements and get back to you shortly.\n\nWarm regards,\nSafi ur Rahman\nFull Stack Software Engineer\nEmail: shaikhsafiurrahman16@gmail.com\nPhone: +92 312 3811269\nPortfolio: https://safi-dev.vercel.app`,
          "Sender Name": form.name,
          "Email Address": form.email,
          "Phone Number": form.phone.trim() || "Not provided",
          "Company / Organization": form.company.trim() || "Not provided",
          "Inquiry Subject": form.subject,
          "Message Content": form.message,
          "Submission Time": new Date().toLocaleString("en-US", { timeZoneName: "short" }),
          "Delivered To": "shaikhsafiurrahman16@gmail.com",
          "Source Platform": "Safi ur Rahman Portfolio (Live Web)",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to deliver message via gateway.");
      }
    } catch (err) {
      console.warn("Contact form submission error:", err);
      // If network fails, offer friendly error state with mailto fallback
      setStatus("error");
      setErrorMessage(
        "There was a temporary network connection issue. You can retry or send directly via email client."
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Section id="contact" className="relative">
      <div className="absolute inset-0 animated-gradient-bg opacity-20 pointer-events-none" />

      <div className="relative">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Send a message directly to my inbox."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <ContactInfo />
            <MapEmbed />
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm
              form={form}
              errors={errors}
              status={status}
              errorMessage={errorMessage}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const infoItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Direct Email Inbox",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      badge: "Active Inbox",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone & WhatsApp",
      value: PERSONAL.phone,
      href: PERSONAL.phoneHref,
      badge: "Quick Response",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: PERSONAL.location,
      badge: "Pakistan",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub Profile",
      value: "github.com/shaikhsafiurrahman16",
      href: PERSONAL.github,
      badge: "Open Source",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {infoItems.map((item, i) => (
        <motion.div
          key={i}
          className="glass-card rounded-xl p-4 flex items-start gap-3.5 hover:glow-brand transition-all border border-border/40 hover:border-brand/40"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.08 + 0.2 }}
        >
          <span className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
            {item.icon}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>
              {item.badge && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand/10 text-brand font-medium">
                  {item.badge}
                </span>
              )}
            </div>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-foreground hover:text-brand transition-colors break-all"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground break-all">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MapEmbed() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-xl overflow-hidden h-48 border border-border/40"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57901.21133496765!2d68.32298185!3d25.39602905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7446c5b54a3d%3A0xdec1e5e69b5e8a76!2sLatifabad%20No%2012%2C%20Hyderabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s!4v1700000000000"
        className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </motion.div>
  );
}

function ContactForm({
  form,
  errors,
  status,
  errorMessage,
  onChange,
  onSubmit,
  onReset,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const fields = [
    {
      key: "name",
      label: "Your Name",
      required: true,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      required: true,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: "subject",
      label: "Subject",
      required: true,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      key: "phone",
      label: "Phone Number (Optional)",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      key: "company",
      label: "Company / Organization (Optional)",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      key: "message",
      label: "Your Message",
      rows: 5,
      required: true,
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 md:p-8 border border-border/40 relative overflow-hidden"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-secondary to-emerald-400" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-8 text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Delivered to shaikhsafiurrahman16@gmail.com
              </span>
              <h3 className="text-2xl font-bold text-foreground">Message Sent Successfully!</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Your inquiry has been routed straight to Safi ur Rahman&apos;s personal inbox. An automated confirmation receipt has also been dispatched.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/30 border border-border/40 text-left max-w-md mx-auto space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Recipient:</span>
                <span className="font-mono text-emerald-400">shaikhsafiurrahman16@gmail.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Response Window:</span>
                <span className="text-foreground">Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Delivery Status:</span>
                <span className="text-emerald-400 font-medium">Instant Notification Active</span>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-brand hover:opacity-90 transition-opacity shadow-md shadow-brand/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={onSubmit}
            className="space-y-5"
            noValidate
          >
            {/* Header info badge */}
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-muted-foreground font-medium">
                  Direct Inbox to <strong className="text-foreground">shaikhsafiurrahman16@gmail.com</strong>
                </span>
              </div>
              <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">
                End-to-End Delivery
              </span>
            </div>

            {/* Error banner if network fails */}
            {status === "error" && (
              <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs space-y-2">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`mailto:shaikhsafiurrahman16@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(
                      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\n\n${form.message}`
                    )}`}
                    className="underline font-semibold hover:opacity-80"
                  >
                    Open in Your Email Client &rarr;
                  </a>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              {fields
                .filter((f) => f.key !== "message")
                .map((field) => (
                  <FloatingField
                    key={field.key}
                    {...field}
                    value={form[field.key]}
                    error={errors[field.key]}
                    disabled={status === "submitting"}
                    onChange={(v) => onChange(field.key, v)}
                  />
                ))}
            </div>

            <FloatingField
              key="message"
              {...fields.find((f) => f.key === "message")}
              value={form.message}
              error={errors.message}
              disabled={status === "submitting"}
              onChange={(v) => onChange("message", v)}
              fullWidth
            />

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-xl py-3.5 font-semibold text-sm text-primary-foreground bg-brand hover:opacity-90 glow-brand transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25 disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={status !== "submitting" ? { scale: 1.01 } : {}}
              whileTap={status !== "submitting" ? { scale: 0.99 } : {}}
            >
              {status === "submitting" ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Sending Message to Safi&apos;s Inbox...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Message Directly</span>
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FloatingField({
  label,
  type = "text",
  rows,
  value,
  error,
  disabled = false,
  onChange,
  icon,
  fullWidth = false,
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || (value && value.length > 0);

  const InputComponent = rows ? "textarea" : "input";

  return (
    <div className={`relative ${fullWidth ? "" : ""}`}>
      {/* Icon */}
      <span
        className={`absolute left-3.5 top-3.5 transition-colors z-10 ${
          isFloating ? "text-brand" : "text-muted-foreground"
        }`}
      >
        {icon}
      </span>

      <InputComponent
        type={type}
        rows={rows}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full rounded-xl bg-muted/30 border ${
          error ? "border-destructive focus:ring-destructive/50" : "border-border/60 focus:border-brand"
        } pl-11 pr-3 pt-6 pb-2 text-sm text-foreground placeholder-transparent focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed`}
        placeholder={label}
        aria-invalid={!!error}
        aria-label={label}
      />

      {/* Floating label */}
      <label
        className={`absolute left-11 text-xs transition-all pointer-events-none ${
          isFloating
            ? "top-2 text-brand font-medium"
            : "top-3.5 text-muted-foreground"
        }`}
      >
        {label}
      </label>

      {/* Error */}
      {error && (
        <p className="absolute -bottom-5 left-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
