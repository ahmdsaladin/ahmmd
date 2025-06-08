"use client"

import Image from "next/image"
import { ArrowRight, Camera, Globe, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedButton from "@/components/animated-button"

const timeline = [
  {
    year: "2016",
    title: "Beginning Freelance Career",
    description:
      "Started as a Visual Designer and Creative Consultant, crafting unique visual stories through posters, logos, and branding for independent clients. Built a reputation for adaptive, high-touch design spanning cinematic, cultural, and commercial realms.",
  },
  {
    year: "2017",
    title: "Award-Winning Film Posters",
    description:
      "Designed short film posters that gained recognition at the Alexandria International Film Festival, collaborating closely with Amir Cinema to merge narrative and aesthetics.",
  },
  {
    year: "2018",
    title: "Music Poster Series",
    description:
      "Created visually diverse music posters across genres—from ambient electronica to underground rap—infusing each with emotion and identity, solidifying a distinctive stylistic voice.",
  },
  {
    year: "2019",
    title: "Branding & Product Design Expansion",
    description:
      "Led full rebranding for Malica, a baby wrap brand, including logo redesign, packaging aesthetics, and soft-tone marketing visuals. Expanded expertise into product design and strategic branding for varied clients.",
  },
  {
    year: "2020",
    title: "Synthform Lab",
    description:
      "Appointed Lead Poster & UI Designer at Synthform Lab. Delivered cutting-edge poster campaigns and contributed to UI design projects, integrating artistic vision with user-centered interfaces.",
  },
  {
    year: "2021",
    title: "High-Profile Film Poster Projects",
    description:
      "Designed posters for acclaimed films such as Silk Road, Russian Roulette, Plastic Sunlight, and The River That Forgot Its Name—blending cinematic storytelling with visual innovation.",
  },
  {
    year: "2022",
    title: "Nebula Studio",
    description:
      "Senior Product & Visual Designer at Nebula Studio. Spearheaded product design and visual identity projects, pushing boundaries in interface aesthetics and brand coherence.",
  },
  {
    year: "Present",
    title: "Ongoing Freelance & Creative Consulting",
    description:
      "Continuing to deliver bespoke visual designs, logos, product branding, and posters, combining deep artistic sensibility with strategic clarity. Passionately exploring the intersection of culture, technology, and emotion in design.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/WORK2.png"
          alt="About Ahmd"
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">About Me</h1>
          <p className="text-white/90 text-lg max-w-2xl">The story behind the lens</p>
        </motion.div>
      </section>
      <div className="header-height"></div>

      {/* Bio Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/avatar.png"
              alt="my portrait"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
            <p className="text-primary mb-4">
              Design is not what I do. It's how I see. I am Ahmed, also known as Ahmd—a Design Architect devoted to the art of shaping visual narratives into intentional, immersive experiences. I believe design is where soul meets system: a space where aesthetics are not decoration, but revelation. Whether it's a poster that breathes story, a logo that carries a brand's soul, or an interface that feels like second nature—I design to bridge the abstract and the intimate, the visionary and the functional. Every project is a dialogue between clarity and emotion, structure and spirit.
            </p>
            <p className="text-primary mb-4">
            This approach allows me to move fluidly across disciplines, adapting my tools to the challenge—always in pursuit of meaningful impact.
            </p>
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-primary" />
                <span className="text-primary">30+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-primary" />
                <span className="text-primary">Award-winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-primary" />
                <span className="text-primary">Workshops & Mentoring</span>
              </div>
            <h2 className="text-3xl md:text-4xl mb-6 mt-8">My Approach</h2>
            <p className="text-primary mb-4">
              My design process is rooted in empathy, elevated by precision. I begin by listening—not just to clients, but to context, culture, and constraint. I believe that beauty without clarity is noise, and function without soul is forgettable. My goal is to find the form that feels inevitable, the layout that speaks, the interaction that flows like thought.
            </p>
            <p className="text-primary mb-4">
            This approach allows me to move fluidly across disciplines, adapting my tools to the challenge—always in pursuit of meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Poster Design",
                description:
                  "I create bold, conceptual visuals that distill complex ideas into striking, unforgettable compositions. Posters, to me, are modern frescoes—glimpses of a story, frozen in time, designed to provoke thought and stir emotion. Each layout is a balance of silence and sound, space and symbol. Whether cinematic, cultural, or campaign-driven, my posters aim to speak before they are read.",
              },
              {
                title: "Logo Design",
                description:
                  "A logo is more than a mark—it's the distilled essence of a brand's soul. I craft symbols that are not only aesthetically timeless, but strategically engineered to hold meaning, memory, and trust. From monograms to abstract forms, I design with clarity, geometry, and archetype, ensuring each identity feels as inevitable as it is intentional.",
              },
              {
                title: "Magazine & Editorial Layout",
                description:
                  "This is where typography becomes choreography. I design editorial experiences that guide the reader through rhythm, structure, and emotion—harmonizing text and image into a visual narrative. Whether for print or digital, I weave hierarchy, pacing, and whitespace to ensure each page breathes with precision and poetry.",
              },
              {
                title: "Product Design",
                description:
                  "From packaging to form language, I approach product design as the physical embodiment of a brand's values. I focus on tactile storytelling—textures, materials, and proportions that invite touch and trust. Whether it's a minimal box or a complex 3D shape, I design with sensory intelligence, crafting artifacts that are both functional and emotionally compelling.",
              },
              {
                title: "UI/UX Design",
                description:
                  "I design digital experiences that are intuitive, elegant, and deeply human. My approach bridges psychology and aesthetics: mapping user behavior, designing interaction flows, and shaping interfaces that feel natural and alive. Whether it's a mobile app or responsive web platform, I craft environments where users don't just navigate—they belong. Every click, transition, and gesture is designed with care, serving both purpose and identity.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-primary dark:text-primary-secondary bg-primary-secondary dark:bg-primary p-8 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-primary-secondary dark:text-primary-foreground text-xl mb-4">{item.title}</h3>
                <p className="text-primary-secondary dark:text-primary-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/4">
                <h3 className="text-xl">{item.year}</h3>
              </div>
              <div className="md:w-3/4">
                <h4 className="font-medium text-2xl mb-2">{item.title}</h4>
                <p className="text-primary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-w-[90%] justify-self-center mr-4 ml-4 py-20 my-20 px-4 md:px-8 rounded-3xl border-[1px] border-border">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-3xl md:text-4xl mb-6">Let's Begin?</h2>
          <p className="text-primary max-w-2xl mx-auto mb-8">
            If you're building something that matters—something that wants to connect, endure, evolve—I'd love to help shape its voice and form.
          Explore the portfolio. Feel the story in every frame.
            Then reach out—and let's design something unforgettable.
          </p>
          <AnimatedButton href="/contact" variant="primary" icon={<ArrowRight size={18} />}>Get in Touch</AnimatedButton>
        </motion.div>
      </section>
    </div>
  )
}
