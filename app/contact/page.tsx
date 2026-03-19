import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";


export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-[#fafaf8] px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left Column - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div>
              <div
                className="mb-4 tracking-widest text-[#6b6b6b]"
                style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
              >
                GET IN TOUCH
              </div>
              <h2
                className="mb-6 text-[#1a1a1a]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
              >
                Experience GUIAC
              </h2>
              <p
                className="leading-relaxed text-[#6b6b6b]"
                style={{ fontSize: "1.125rem", lineHeight: "1.8" }}
              >
                Discover our collection at select boutiques or connect with us
                to learn more about the world of GUIAC.
              </p>
            </div>

            {/* Store Locator */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">

                <div>
                  <h3 className="mb-2 text-[#1a1a1a]">Boutique Locations</h3>
                  <p className="text-[#6b6b6b]" style={{ fontSize: "0.9375rem" }}>
                    Paris • Milan • New York • Tokyo
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-[#1a1a1a]">Follow Our Journey</h3>
              <div className="flex gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]"
                >

                  <span style={{ fontSize: "0.9375rem" }}>Instagram</span>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[#6b6b6b] transition-colors hover:text-[#1a1a1a]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <span style={{ fontSize: "0.9375rem" }}>TikTok</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">

       
              </div>
            
              <div className="space-y-2">
           
              
              </div>
         
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
