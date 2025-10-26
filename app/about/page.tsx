"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const technicalExperiences = [
  {
    id: 1,
    role: "AI/ML Engineer",
    company: "SecureMax",
    period: "Aug 2025 - Present",
    location: "Riyadh, Saudi Arabia · On-site",
    type: "Full-time",
    description: "Working on AI/ML solutions for cybersecurity applications.",
    tags: ["AI/ML", "Python", "Machine Learning"],
    details: "Developing and implementing machine learning models for security threat detection and analysis.",
    images: ["/images/securemax1.png", "/images/securemax2.png"],
    logo: "/images/securemax_logo.jpeg",
  },
  {
    id: 2,
    role: "Computer Engineering Intern | Space Artificial Intelligence Lab (SAIL)",
    company: "Sharjah Academy for Astronomy, Space Sciences and Technology",
    period: "May 2024 - Jul 2024",
    location: "Sharjah Emirate, United Arab Emirates · On-site",
    type: "Internship",
    description: "Selected as one of four interns to contribute to cutting-edge AI research for space science applications.",
    tags: ["AI", "Machine Learning", "Space Science"],
    details: "» Collaborated on the design and integration of AI systems for satellite imaging accuracy and space weather prediction, presenting findings to professional audiences.\n» Gained hands-on expertise in data analysis, algorithm development, and scientific reporting, contributing to the advancement of AI in space sciences.\n» Assisted in technical documentation and knowledge-sharing to support ongoing academic and research initiatives at SAASST.",
    images: ["/images/saasst1.jpeg", "/images/saasst2.JPG"],
    logo: "/images/saasst.jpeg",
  },
  {
    id: 3,
    role: "Project Intern",
    company: "American University of Sharjah",
    period: "Jan 2023 - Apr 2023",
    location: "United Arab Emirates",
    type: "Part-time",
    description: "Collaborated with a PhD researcher on a blockchain project for healthcare.",
    tags: ["Blockchain", "Solidity", "Healthcare"],
    details: "» Collaborated with a PhD researcher on a blockchain project for healthcare, developing a Solidity-based vaccine storage monitoring system.\n» Integrated Oracle&apos;s Provable Service to automate real-time data collection and temperature alerts for vaccine security.\n» Contributed to innovative blockchain applications in healthcare, bridging academic research with practical use cases.",
    images: [],
    logo: "/images/ausharjah_logo.jpeg",
  },
  {
    id: 4,
    role: "Competitor",
    company: "Global Collegiate Penetration Testing Competition (CPTC)",
    period: "Oct 2022 - Nov 2022",
    location: "United Arab Emirates",
    type: "Competition",
    description: "Competed as part of a four-member team in the CPTC regional rounds, securing 2nd place.",
    tags: ["Cybersecurity", "Penetration Testing", "Ethical Hacking"],
    details: "» Competed as part of a four-member team in the CPTC regional rounds, securing 2nd place by successfully identifying and exploiting vulnerabilities in a simulated enterprise environment.\n» Conducted penetration testing on complex network infrastructures, preparing detailed security reports and recommending mitigation strategies to strengthen defenses.\n» Advanced to the international finals in New York, representing the UAE while gaining hands-on experience in ethical hacking, cybersecurity strategy, and collaborative problem-solving.",
    images: ["/images/competitor1.jpeg"],
    logo: "/images/cptc.jpeg",
  },
];

const nonTechnicalExperiences = [
  {
    id: 1,
    role: "Deputy Director of External Relations",
    company: "AUSMUN",
    period: "Jun 2024 - Jun 2025",
    location: "Sharjah Emirate, United Arab Emirates · Hybrid",
    type: "Full-time",
    description: "Built and sustained international partnerships with universities, sponsors, and institutions.",
    tags: ["Leadership", "Communication", "Public Outreach"],
    details: "» Built and sustained international partnerships with universities, sponsors, and institutions, strengthening AUSMUN&apos;s global presence in the Model UN circuit.\n» Directed global branding and promotion efforts across digital, media, and press channels, ensuring consistent communication and international visibility.\n» Coordinated cross-team collaboration and leveraged stakeholder feedback to align outreach with AUSMUN&apos;s long-term objectives while resolving external conflicts.",
    images: ["/images/deputydirector1.jpeg", "/images/deputydirector2.jpeg"],
    logo: "/images/ausmun_logo.jpeg",
  },
  {
    id: 2,
    role: "President (formerly Vice President) | Neuroscience Society",
    company: "American University of Sharjah",
    period: "Sep 2023 - Jun 2025",
    location: "Sharjah Emirate, United Arab Emirates · On-site",
    type: "Full-time",
    description: "Advanced from Vice President to President, overseeing strategic planning and execution of academic events.",
    tags: ["Leadership", "Event Planning", "Communication"],
    details: "» Advanced from Vice President to President, overseeing strategic planning and execution of academic events, workshops, and seminars that elevated neuroscience awareness across campus.\n» Expanded the society&apos;s professional network by connecting members with neuroscience experts and fostering interdisciplinary collaborations with other clubs and departments.\n» Strengthened organizational growth through funding, recruitment, and mentorship, enhancing visibility, ensuring continuity, and solidifying the society&apos;s reputation in the academic community.",
    images: [],
    logo: "/images/ausharjah_logo.jpeg",
  },
  {
    id: 3,
    role: "Residential Assistant | KL Mens Halls",
    company: "American University of Sharjah",
    period: "Aug 2023 - Jun 2025",
    location: "United Arab Emirates",
    type: "Contract",
    description: "Supervised 25–30 residents, ensuring compliance with university housing regulations.",
    tags: ["Leadership", "Communication", "Time Management"],
    details: "» Supervised 25–30 residents, ensuring compliance with university housing regulations and creating a safe, inclusive, and supportive living environment.\n» Conducted personal check-ins, responded to emergencies, and provided guidance on academic and personal challenges to strengthen student well-being.\n» Organized residence communications through bulletin boards, updates, and programming, fostering a sense of community within the halls.",
    images: ["/images/residentialassistant1.jpeg", "/images/residentialassistant2.jpg"],
    logo: "/images/ausharjah_logo.jpeg",
  },
  {
    id: 4,
    role: "Shadow Mentor",
    company: "American University of Sharjah",
    period: "Sep 2024 - Oct 2024",
    location: "United Arab Emirates · On-site",
    type: "Mentorship",
    description: "Mentored high school students by facilitating guided classes and tours of engineering facilities.",
    tags: ["Leadership", "Communication", "Mentorship"],
    details: "» Mentored high school students by facilitating guided classes, tours of engineering facilities, and personalized discussions on academic and career goals.\n» Served as a role model for aspiring engineers, representing the university and creating a welcoming atmosphere for exploration and growth.\n» Supported departmental outreach by bridging the gap between school and university education, inspiring students to pursue engineering confidently.",
    images: [],
    logo: "/images/ausharjah_logo.jpeg",
  },
  {
    id: 5,
    role: "Ecology Representative",
    company: "AUS Office of Sustainability",
    period: "Jun 2024 - May 2025",
    location: "United Arab Emirates · Hybrid",
    type: "Full-time",
    description: "Led sustainability education programs that raised awareness and participation across the university community.",
    tags: ["Sustainability", "Leadership", "Communication"],
    details: "» Led sustainability education programs that raised awareness and participation across the university community.\n» Forged collaborative partnerships with academic institutions and networks to amplify outreach and impact.\n» Advocated sustainable practices and communication strategies that achieved measurable reductions in resource consumption and footprint.",
    images: ["/images/sustainability1.jpeg"],
    logo: "/images/aus_sustainability.jpeg",
  },
  {
    id: 6,
    role: "Public Relations Officer",
    company: "Higher Education Climate Dialogues (HECD)",
    period: "Apr 2024 - May 2024",
    location: "On-site",
    type: "Full-time",
    description: "Built partnerships with universities, advocacy groups, and stakeholders to expand HECD&apos;s role in higher education climate dialogue.",
    tags: ["Public Relations", "Communication", "Leadership"],
    details: "» Built partnerships with universities, advocacy groups, and stakeholders to expand HECD&apos;s role in higher education climate dialogue.\n» Coordinated PR initiatives with conference organizers and departments, ensuring alignment with HECD&apos;s mission and strategic objectives.\n» Served as a bridge for feedback and conflict resolution, safeguarding HECD&apos;s reputation and fostering constructive engagement.",
    images: [],
    logo: "/images/hecduae_logo.jpeg",
  },
  {
    id: 7,
    role: "External Relations Officer",
    company: "AUSMUN",
    period: "Oct 2023 - Feb 2024",
    location: "United Arab Emirates",
    type: "Full-time",
    description: "Established relationships with institutions and sponsors to strengthen AUSMUN's position within the Model UN circuit.",
    tags: ["External Relations", "Leadership", "Communication"],
    details: "» Established relationships with institutions and sponsors to strengthen AUSMUN&apos;s position within the Model UN circuit.\n» Promoted AUSMUN&apos;s branding across social and press channels, ensuring visibility and recognition in international forums.\n» Supported cross-department collaboration, external feedback integration, and dispute resolution to maintain organizational credibility.",
    images: ["/images/externalrelations1.jpeg", "/images/externalrelations2.JPG"],
    logo: "/images/ausmun_logo.jpeg",
  },
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science - BS, Computer Engineering",
    school: "American University of Sharjah",
    period: "2021 - 2025",
    description: "Specialized in artificial intelligence, machine learning, and computer engineering with focus on innovative solutions.",
    scholarships: [
      "Outstanding Student Merit Scholarship - 40% scholarship on entire college tuition",
      "Active Student Scholarship - 25% scholarship for active participation",
      "Ideal Student Award - May 2025",
      "Male Residential Hall of the Year Award x2 - May 2025",
      "Undergraduate Research Grant - Jan 2024",
    ],
    certifications: [
      "Generative AI Leader - Google Cloud Skills Boost",
      "Introduction to Generative AI - Google",
      "Introduction to Generative AI Studio - Google",
      "Introduction to Image Generation - Google",
      "Introduction to Large Language Models - Google",
      "Introduction to Responsible AI - Google",
    ],
    recommendations: [
      { 
        name: "Ahmed Soliman", 
        title: "Student Experience Leader | Residential Life & Learning Communities Specialist",
      },
      { 
        name: "Maha Jibril", 
        title: "Senior Specialist - Student Activities at American University of Sharjah",
      },
    ],
  },
  {
    id: 2,
    degree: "High School Diploma, Computer Science",
    school: "New Middle East International School",
    period: "2007 - 2021",
    description: "Completed high school education with focus on computer science and technology.",
    scholarships: [],
    certifications: [],
    recommendations: [],
  },
];

export default function About() {
  const [expandedTechExp, setExpandedTechExp] = useState<number | null>(null);
  const [expandedNonTechExp, setExpandedNonTechExp] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-primary" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* Hero Section with Grid Background */}
      <section className="relative pt-32 pb-8 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl text-primary mb-4 tracking-tight" style={{ fontFamily: "var(--font-bungee), Impact, sans-serif", fontWeight: 400 }}>
              ABOUT ME
            </h1>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              Who I Am
            </p>
          </motion.div>
        </div>

        {/* Grid background - brighter */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#CFFFE2 1px, transparent 1px), linear-gradient(90deg, #CFFFE2 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* Bio Section with Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-3xl md:text-4xl leading-tight mb-8" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                I&apos;m <span className="text-primary font-semibold">Syed Arfan Hussain</span>, a developer who loves building things that live on the internet.
              </p>
              <p className="text-xl text-accent/70 leading-relaxed" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                I&apos;m passionate about creating <span className="text-primary">unique digital experiences</span> that are minimal, functional, and memorable. 
                Whether it&apos;s building AI/ML solutions, crafting smooth animations, or creating interactive experiences, I&apos;m always up for the challenge.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl border border-primary/20 overflow-hidden">
              <Image
                src="/images/img1.jpg"
                alt="Syed Arfan Hussain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 flex justify-center"
        >
          <motion.a
            href="/SyedArfanHussain_CV.pdf"
            download="SyedArfanHussain_CV.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group px-10 py-5 bg-primary text-black rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-3"
          >
            {/* Content */}
            <div className="flex items-center gap-3">
              <svg 
                className="w-6 h-6 group-hover:animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span className="tracking-wide">
                Download Resume
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Technical Experience Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl text-primary mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              TECHNICAL
              <br />
              EXPERIENCE
            </h2>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              Technical Roles & Projects
            </p>
          </motion.div>

          <div className="space-y-1">
            {technicalExperiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                exp={exp}
                index={index}
                onImageClick={setSelectedImage}
                expanded={expandedTechExp === exp.id}
                onToggle={() => setExpandedTechExp(expandedTechExp === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </section>

        {/* Non-Technical Experience Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl text-primary mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              NON-TECHNICAL
              <br />
              EXPERIENCE
            </h2>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              Non-Technical Roles & Leadership
            </p>
          </motion.div>

          <div className="space-y-1">
            {nonTechnicalExperiences.map((exp, index) => (
              <ExperienceItem
                key={exp.id}
                exp={exp}
                index={index}
                onImageClick={setSelectedImage}
                expanded={expandedNonTechExp === exp.id}
                onToggle={() => setExpandedNonTechExp(expandedNonTechExp === exp.id ? null : exp.id)}
              />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl text-primary mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              EDUCATION
            </h2>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              Where I Learned
            </p>
          </motion.div>

          <div className="space-y-1">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-t border-primary/10 py-8 px-6"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-3xl md:text-4xl font-sans font-semibold text-primary">
                        {edu.degree}
                      </h3>
                      <span className="text-accent/40 text-sm font-sans">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xl text-secondary font-sans mb-4">{edu.school}</p>
                    <p className="text-accent/70 font-sans mb-6">{edu.description}</p>
                  </div>

                  {edu.scholarships.length > 0 && (
                    <div className="mb-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <h4 className="text-lg font-sans font-semibold text-primary mb-3">Scholarships & Awards</h4>
                          <ul className="space-y-2">
                            {edu.scholarships.map((scholarship, i) => (
                              <li key={i} className="text-accent/70 font-sans flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {scholarship}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {edu.id === 1 && (
                          <div className="relative h-64 rounded-lg border border-primary/20 overflow-hidden">
                            <Image
                              src="/images/grad_pic.jpg"
                              alt="Graduation Photo"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {edu.recommendations.length > 0 && (
                    <div>
                      <h4 className="text-lg font-sans font-semibold text-primary mb-3">Recommendations</h4>
                      <div className="space-y-3">
                        {edu.recommendations.map((rec, i) => (
                          <div key={i} className="border-l-2 border-primary/30 pl-4">
                            <p className="text-accent/80 font-sans font-semibold">{rec.name}</p>
                            <p className="text-accent/50 text-sm font-sans">{rec.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl text-primary mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              SKILLS
            </h2>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              What I Work With
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { name: "React", logo: "react" },
              { name: "Next.js", logo: "nextdotjs" },
              { name: "TypeScript", logo: "typescript" },
              { name: "Node.js", logo: "nodedotjs" },
              { name: "Python", logo: "python" },
              { name: "TailwindCSS", logo: "tailwindcss" },
              { name: "Framer Motion", logo: "framer" },
              { name: "Three.js", logo: "threedotjs" },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border border-primary/20 p-6 text-center hover:bg-primary/5 transition-all duration-300 rounded-lg flex flex-col items-center gap-3 animated-border"
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.logo}.svg`}
                  alt={skill.name}
                  className="w-12 h-12 float-animation"
                  style={{ filter: 'invert(1) sepia(1) saturate(3) hue-rotate(95deg) brightness(1.1)', animationDelay: `${index * 0.2}s` }}
                />
                <span className="text-sm font-sans text-primary">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-primary hover:text-secondary transition-colors text-4xl font-light"
                  aria-label="Close"
                >
                  ×
                </button>

                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage}
                    alt="Expanded view"
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg border border-primary/30"
                    style={{ maxHeight: '85vh', objectFit: 'contain' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Experience Item Component
function ExperienceItem({ exp, index, expanded, onToggle, onImageClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-t border-primary/10"
    >
      <div
        onClick={onToggle}
        className="group py-8 hover:bg-primary/5 transition-all duration-300 px-6 cursor-pointer"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-white rounded-lg border border-primary/20 flex items-center justify-center overflow-hidden p-2">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-baseline gap-4 mb-2">
              <h3 className="text-2xl md:text-3xl font-sans font-semibold text-primary group-hover:text-secondary transition-colors">
                {exp.role}
              </h3>
              <span className="text-accent/40 text-sm font-sans">
                {exp.period}
              </span>
            </div>
            <p className="text-lg text-secondary font-sans mb-2">{exp.company}</p>
            <p className="text-sm text-accent/50 font-sans mb-3">{exp.location} · {exp.type}</p>
            <p className="text-accent/70 font-sans mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-xs font-sans px-3 py-1 border border-primary/20 text-primary/70 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 border border-primary/30 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-6"
            >
              <div className="border-t border-primary/10 pt-6">
                <p className="text-accent/80 font-sans mb-6 whitespace-pre-line">{exp.details}</p>
                
                {exp.images.length > 0 && (
                  <div className={`grid ${exp.images.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-2'} gap-4`}>
                    {exp.images.map((img: string, i: number) => {
                      // Determine object position based on experience and image index
                      let objectPosition = 'center';
                      
                      // Residential Assistant - first image slightly down to show certificate
                      if (exp.id === 3 && exp.role.includes('Residential Assistant') && i === 0) {
                        objectPosition = 'center 40%';
                      }
                      // Residential Assistant - second image at top
                      else if (exp.id === 3 && exp.role.includes('Residential Assistant') && i === 1) {
                        objectPosition = 'center top';
                      }
                      // Sustainability - first image slightly down to show face
                      else if (exp.id === 5 && exp.role.includes('Ecology') && i === 0) {
                        objectPosition = 'center 35%';
                      }
                      // Sustainability - second image at top
                      else if (exp.id === 5 && exp.role.includes('Ecology') && i === 1) {
                        objectPosition = 'center top';
                      }
                      // External Relations Officer - second image (right)
                      else if (exp.id === 7 && exp.role.includes('External Relations Officer') && i === 1) {
                        objectPosition = 'center top';
                      }
                      // Deputy Director - first image (left)
                      else if (exp.id === 1 && exp.role.includes('Deputy Director') && i === 0) {
                        objectPosition = 'center top';
                      }
                      
                      return (
                        <div 
                          key={i} 
                          className="relative h-64 rounded-lg border border-primary/20 overflow-hidden cursor-pointer hover:border-primary/50 transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            onImageClick(img);
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${exp.role} - Image ${i + 1}`}
                            fill
                            className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            style={{ objectPosition }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
