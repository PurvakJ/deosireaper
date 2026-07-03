import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS, IMAGES, COMPANY } from "@/lib/site-data";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

// ⚠️ WARNING: Hardcoded credentials - Only for testing! ⚠️
// NEVER do this in production. These credentials are now exposed to everyone.
const EMAILJS_CONFIG = {
  serviceId: "service_kiil6fv",
  templateId: "template_0pb5e2v",
  publicKey: "zPW7vJijZ4Cbk5aND",
};

// For production, use environment variables:
// const EMAILJS_CONFIG = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
// };

// Check if configured (always true with hardcoded values)
const isEmailJSConfigured = Object.values(EMAILJS_CONFIG).every(Boolean);

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Send Enquiry — Deosi Reaper" },
      {
        name: "description",
        content:
          "Request a quote or product details from Deosi Agriculture Works. We respond within one business day.",
      },
      {
        property: "og:title",
        content: "Send Enquiry — Deosi Reaper",
      },
      {
        property: "og:description",
        content: "Request a quote or product details.",
      },
    ],
  }),
  component: Enquiry,
});

function Enquiry() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email address" : "";
      case "phone":
        return !/^[\+\d\s\-\(\)]{8,}$/.test(value) ? "Please enter a valid phone number" : "";
      case "city":
        return value.trim().length < 2 ? "Please enter your city/state" : "";
      default:
        return "";
    }
  };

  const validateForm = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    // Required fields
    const fields = ["name", "email", "phone", "city"];
    fields.forEach((field) => {
      const value = formData.get(field) as string || "";
      const error = validateField(field, value);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      const error = validateField(name, e.target.value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!formRef.current) return;

    if (!isEmailJSConfigured) {
      alert("Email service is not configured. Please contact support.");
      return;
    }

    const formData = new FormData(formRef.current);
    if (!validateForm(formData)) {
      // Focus first field with error
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const element = formRef.current.querySelector(`[name="${firstError}"]`);
        if (element instanceof HTMLElement) {
          element.focus();
        }
      }
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        formRef.current.reset();
        setSent(true);
        setTouched({});
        // Reset sent state after 10 seconds
        setTimeout(() => setSent(false), 10000);
      } else {
        throw new Error(`Email service returned status: ${result.status}`);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      
      let errorMessage = "Unable to send enquiry. Please try again.";
      if (error instanceof Error) {
        if (error.message.includes("template")) {
          errorMessage = "Email template configuration error. Please contact support.";
        } else if (error.message.includes("service")) {
          errorMessage = "Email service unavailable. Please try again later or call us directly.";
        }
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Send Enquiry"
        title="Tell us what you need."
        description="Share your requirement and we'll get back with pricing, availability and delivery timeline — usually within one working day."
        image={IMAGES.posterContact}
      />

      <section className="py-20" aria-label="Enquiry form">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="bg-card border border-border p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center py-10"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle2 
                        className="w-16 h-16 text-brand-red mx-auto mb-4" 
                        aria-hidden="true"
                      />
                      <h3 className="font-heading text-3xl uppercase mb-3">
                        Enquiry Received
                      </h3>
                      <p className="text-muted-foreground">
                        We'll be in touch shortly. For urgent needs, call{" "}
                        <a 
                          href={`tel:${COMPANY.phones[1]?.replace(/\s/g, "")}`}
                          className="text-brand-red hover:underline"
                        >
                          {COMPANY.phones[1]}
                        </a>
                        .
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      ref={formRef}
                      onSubmit={sendEmail}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-5"
                      noValidate
                      aria-label="Enquiry form"
                    >
                      <div className="text-xs uppercase tracking-[0.3em] text-brand-red">
                        Fill the form below
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <Field
                          label="Full Name"
                          name="name"
                          required
                          error={errors.name}
                          touched={touched.name}
                          onBlur={handleBlur}
                        />
                        <Field
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          required
                          error={errors.phone}
                          touched={touched.phone}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <Field
                          label="Email"
                          name="email"
                          type="email"
                          required
                          error={errors.email}
                          touched={touched.email}
                          onBlur={handleBlur}
                        />
                        <Field
                          label="City / State"
                          name="city"
                          required
                          error={errors.city}
                          touched={touched.city}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div>
                        <label 
                          htmlFor="product-select"
                          className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                        >
                          Product of Interest
                        </label>
                        <select
                          id="product-select"
                          name="product"
                          className="w-full border border-border bg-background px-4 py-3 focus:border-brand-red outline-none"
                          onBlur={handleBlur}
                        >
                          <option value="">Select a product…</option>
                          {PRODUCTS && PRODUCTS.length > 0 ? (
                            PRODUCTS.map((p) => (
                              <option key={p.slug || p.name} value={p.name}>
                                {p.name}
                              </option>
                            ))
                          ) : (
                            <option value="Other / Not Sure">Other / Not sure</option>
                          )}
                          <option value="Other / Not Sure">Other / Not sure</option>
                        </select>
                      </div>

                      <div>
                        <label 
                          htmlFor="message-textarea"
                          className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message-textarea"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your farm, crop, tractor HP…"
                          className="w-full border border-border bg-background px-4 py-3 focus:border-brand-red outline-none resize-none"
                          onBlur={handleBlur}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        aria-busy={loading}
                        className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 text-sm uppercase tracking-widest font-semibold transition-colors"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                      
                      {!isEmailJSConfigured && (
                        <p className="text-amber-600 text-sm text-center mt-2" role="alert">
                          ⚠️ Email service is temporarily unavailable. Please call us directly.
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="bg-brand-charcoal text-brand-cream p-8 md:p-10 h-full grain-overlay">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-yellow mb-4">
                  Direct Contact
                </div>
                <h3 className="font-heading text-3xl uppercase mb-8">
                  Prefer to call?
                </h3>
                <ul className="space-y-5" role="list">
                  {COMPANY.phones && COMPANY.phones.map((phone, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-brand-red" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">
                          Phone {index > 0 ? index + 1 : ""}
                        </div>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-lg hover:text-brand-yellow transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    </li>
                  ))}

                  {COMPANY.email && (
                    <li className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-brand-red" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">
                          Email
                        </div>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-lg hover:text-brand-yellow transition-colors"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </li>
                  )}

                  {COMPANY.address && (
                    <li className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-red/20 border border-brand-red/40 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-brand-red" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">
                          Visit
                        </div>
                        <div className="text-sm text-brand-cream/80 leading-relaxed">
                          {COMPANY.address}
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
  touched,
  onBlur,
}: FieldProps) {
  const id = `field-${name}`;
  const hasError = touched && error;

  return (
    <div>
      <label 
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={!!hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`w-full border ${hasError ? 'border-red-500' : 'border-border'} bg-background px-4 py-3 focus:border-brand-red outline-none transition-colors`}
        onBlur={onBlur}
      />
      {hasError && (
        <p 
          id={`${id}-error`}
          className="text-red-500 text-sm mt-1"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}