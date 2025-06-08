"use client"

import Image from "next/image"
import { Mail, MapPin, Instagram, Twitter, Facebook, Youtube, Linkedin, Github, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header
      <div className="header-height"></div> */}

       {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/WORK2.png"
          alt="Contact Ahmd"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">Contact</h1>
          <p className="text-white/90 text-lg max-w-2xl">Part of your vision</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-primary/60 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <motion.div
              className="space-y-6 mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {[
                {
                  icon: <Mail className="text-primary mt-1" size={20} />,
                  title: "Email",
                  content: "sotahmed100@gmail.com",
                },
                {
                  icon: <MapPin className="text-primary mt-1" size={20} />,
                  title: "Location",
                  content: "Alexandria - Egypt",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-primary/60">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl mb-4">Keep Up To Date</h3>
              <div className="flex flex-wrap gap-1">
                {[
                  { icon: <Instagram size={26} />, label: "Instagram", href: "https://www.instagram.com/ahmdsaladin/" },
                  { icon: <Twitter size={26} />, label: "Twitter", href: "https://x.com/ahmdsaladin" },
                  { icon: <Facebook size={26} />, label: "Facebook", href: "https://www.facebook.com/AhmdSaladindesigns" },
                  { icon: <Youtube size={26} />, label: "Youtube", href: "https://www.youtube.com/ahmdsaladin" },
                  { icon: <Linkedin size={20} />, label: "Linkedin", href: "https://linkedin.com/in/ahmdsaladin" },
                  { icon: <Github size={26} />, label: "Github", href: "https://github.com/ahmdsaladin" },
                  { icon: <MessageCircle size={26} />, label: "WhatsApp", href: "https://wa.me/01069761060" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-secondary rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    {/* <span className="text-primary-foreground dark:text-primary-foreground">{item.label}</span> */}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-primary dark:bg-primary-foreground p-8 rounded-2xl shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl mb-6">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          {[
            {
              question: "Do you take on freelance or commission-based work?",
              answer:
                "Yes — I work with individuals, studios, and brands on a wide range of visual projects, from posters and brand identity to UI and product design. Share your idea, and let's see if it resonates.",
            },
            {
              question: "Can I commission you for a film or music poster?",
              answer:
                "Absolutely. Crafting emotionally and visually resonant posters is one of my core offerings. Whether it's a short film, feature, or album release, I tailor the design to the soul of the work.",
            },
            {
              question: "Do you offer branding or logo design services?",
              answer:
                "Yes — I provide end-to-end branding services, including logo design, color systems, product aesthetics, and packaging. I especially enjoy working with brands that carry a strong narrative or cultural essence.",
            },
            {
              question: "Are your designs available as prints or collectibles?",
              answer:
                "Select poster artworks are available as high-quality prints upon request. I occasionally release limited edition pieces — join my newsletter or reach out directly to inquire.",
            },
            {
              question: "What's your typical process when working with clients?",
              answer:
                "My process is adaptive — grounded in deep listening, visual storytelling, and clarity of intent. Whether it's a logo, a film poster, or an interface, I work closely with clients to translate abstract visions into meaningful visual realities.",
            },
            {
              question: "Do you collaborate with international clients?",
              answer:
                "Yes, most of my work is global. I've collaborated with filmmakers, musicians, and entrepreneurs across continents — from Egypt to Europe to East Asia. Remote work is seamless, and I'm always open to new creative dialogues.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-medium text-xl mb-2">{item.question}</h3>
              <p className="text-primary/60">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

        {/* Featured Collections */}
      <section className="mt-20 mb-20 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Featured Collections</h2>
            <p className="text-primary max-w-2xl mx-auto">
              Explore some of my most popular photography collections from around the world
            </p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View All Collections
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
