"use client"

// import Link from "next/link" // Removed unused import
import { motion } from "framer-motion"
import { useId, useState } from "react"
// import { ButtonCta } from "@/components/ui/button-cta" // Removed unused import
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BlurIn } from "@/components/ui/blur-in"
import { AuroraButton } from "@/components/ui/aurora-button" // Added import
// NOTE: Floating and FloatingElement components are missing. 
// Assuming they exist at @/components/ui/parallax-floating for now.
// You will need to create or find these components.
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import Image from "next/image"

const exampleImages = [
  {
    url: "/Docuvid Marketing 1.jpg",
  },
  {
    url: "/Docuvid Marketing 2.jpg",
  },
  {
    url: "/Docuvid Marketing 5.jpg",
  },
  {
    url: "/Docuvid Marketing 4.jpg",
  },
  {
    url: "/Docuvid Marketing 3.jpg",
  },
]

function LandingHero() {
  // Placeholder implementation as Floating components are missing
  const id = useId()
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string): boolean => {
    // Simple regex for basic email format check
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
      // Construct and trigger mailto link
      const subject = encodeURIComponent("Early Access Request");
      const body = encodeURIComponent(email); // Send entered email in body
      window.location.href = `mailto:hello@docuvid.app?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="hidden md:block top-[15%] left-[2%] md:top-[25%] md:left-[3%]"
        >
          <motion.div
            className="relative w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 hover:scale-105 duration-200 transition-transform -rotate-[3deg] shadow-2xl rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <Image
              src={exampleImages[0].url}
              alt={"Docuvid Marketing"}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="hidden md:block top-[0%] left-[8%] md:top-[6%] md:left-[7%]"
        >
          <motion.div
            className="relative w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 hover:scale-105 duration-200 transition-transform -rotate-12 shadow-2xl rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
          >
            <Image
              src={exampleImages[1].url}
              alt={"Docuvid Marketing"}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.div
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 -rotate-[4deg] hover:scale-105 duration-200 transition-transform shadow-2xl rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.5 }}
          >
            <Image
              src={exampleImages[2].url}
              alt={"Docuvid Marketing"}
              fill
              className="object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="relative top-[5%] left-[75%] md:top-[2%] md:left-[83%] lg:left-[75%]"
        >
          <motion.div 
            className="relative w-40 md:w-80 h-[105px] md:h-[210px] hover:scale-105 duration-200 transition-transform shadow-2xl rotate-[9deg] rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.5 }}
          >
            <Image
              src={exampleImages[3].url}
              alt={"Docuvid Marketing"}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.div
            className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 hover:scale-105 duration-200 transition-transform shadow-2xl rotate-[19deg] rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1.5 }}
          >
            <Image
              src={exampleImages[4].url}
              alt={"Docuvid Marketing"}
              fill
              className="object-cover"
            />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="relative flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto">
        <motion.img
          src="/main docuvid logo.svg"
          alt="Docuvid Logo"
          className="absolute top-[-30%] sm:top-[-50%] left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 z-40 pointer-events-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
        />
        <BlurIn
          word={"Turn Your Documentation\nInto Scalable Video\nEducation."}
          className="relative mt-12 sm:mt-4 md:mt-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center w-full justify-center items-center flex-col flex whitespace-pre-wrap leading-tight font-calendas tracking-tight space-y-1 md:space-y-4 z-50"
        />
        <motion.p
          className="relative px-4 sm:px-12 md:px-18 text-sm sm:text-lg md:text-lg lg:text-xl text-center font-overusedGrotesk pt-4 sm:pt-8 md:pt-10 lg:pt-12 z-50"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0 },
            visible: { filter: "blur(0px)", opacity: 1 },
          }}
        >
          Use your software documentation to create narrated video tutorials. Effortlessly scale user onboarding and education across your growing user base even globally!.
        </motion.p>

        <div className="relative flex flex-col items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-xs z-50 w-full">
          <form
            onSubmit={handleSubmit}
            className="space-y-2 w-full"
            noValidate
          >
            <Label htmlFor={id} className="sr-only">Email</Label>
            <div className="flex flex-col sm:flex-row gap-2 items-stretch">
              <Input
                id={id}
                name="email"
                className={`flex-1 bg-white h-12 w-full sm:w-auto border ${emailError ? 'border-red-500 border-2' : 'border-input'}`}
                placeholder="Enter your email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "email-error" : undefined}
              />
              <div className="w-full sm:w-auto flex-shrink-0">
                <AuroraButton
                  type="submit"
                  glowClassName="from-pink-500 via-purple-500 to-blue-500"
                  className="h-12 cursor-pointer w-full"
                >
                  Get Early Access
                </AuroraButton>
              </div>
            </div>
            {emailError && (
              <p id="email-error" className="text-red-500 text-xs mt-1 self-start w-full text-left">
                {emailError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export { LandingHero } 