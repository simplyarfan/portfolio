"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  heroImage: string;
  content: JSX.Element;
}> = {
  "from-nobody-to-somebody": {
    title: "From Nobody to Somebody: My University Journey",
    date: "October 10, 2025",
    readTime: "8 min read",
    tags: ["Personal Growth", "Leadership", "University Life"],
    heroImage: "/images/blog_nobody.png",
    content: (
      <>
        <p className="text-accent/80 leading-relaxed text-lg">
          Looking back at my school days, I was... nobody. Not in a dramatic, movie-protagonist way—just genuinely invisible. No competitions, no sports teams, no leadership roles. I existed, attended classes, went home. That was it.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Wake-Up Call
        </h2>

        <p className="text-accent/80 leading-relaxed">
          University hit different. Maybe it was the fresh start, or maybe I just got tired of being a background character in my own life. I started saying "yes" to things—club meetings, volunteer opportunities, random events I had no business attending.
        </p>

        <p className="text-accent/80 leading-relaxed">
          The transformation wasn't overnight. It was awkward conversations, failed initiatives, and a lot of imposter syndrome. But slowly, people started knowing my name. Then my face. Then what I stood for.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          Building Something Real
        </h2>

        <p className="text-accent/80 leading-relaxed">
          I took on roles that scared me. Led projects I had no idea how to execute. Made mistakes publicly and learned even more publicly. The university became my playground for growth, and I stopped caring about looking stupid—because growth always looks a little stupid at first.
        </p>

        <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="text-primary italic text-lg">
            "The person who knows 'how' will always have a job. The person who knows 'why' will always be their boss. But the person who's willing to learn both? They'll change the game."
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Student Council Campaign
        </h2>

        <p className="text-accent/80 leading-relaxed">
          When I decided to run for student council, people thought I was crazy. The kid who did nothing in school was now running for one of the most visible positions on campus? But I had built something real—relationships, trust, a track record of actually showing up.
        </p>

        <p className="text-accent/80 leading-relaxed">
          The campaign was intense. Late nights, endless meetings, posters everywhere. And the support? Mind-blowing. Around 1,000 people backed me. One thousand people who believed in the vision, who saw the work I'd put in, who wanted to see what we could build together.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Loss That Taught Me Everything
        </h2>

        <p className="text-accent/80 leading-relaxed">
          I lost. And honestly? It stung. A lot. But here's what losing taught me that winning never could:
        </p>

        <ul className="space-y-4 text-accent/80 my-6">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">Impact isn't measured by titles.</strong> The work I did, the people I helped, the changes I pushed for—none of that disappeared because I didn't win an election.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">Support is more valuable than victory.</strong> 1,000 people believed in me. That's not a consolation prize—that's a community.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">The journey matters more than the destination.</strong> The person I became through that campaign was worth more than any position.</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          What I'd Tell My School Self
        </h2>

        <p className="text-accent/80 leading-relaxed">
          You don't need to be somebody to start. You just need to start. Every person you admire was once exactly where you are—invisible, uncertain, waiting for permission that's never coming.
        </p>

        <p className="text-accent/80 leading-relaxed">
          The difference between nobody and somebody isn't talent or luck or connections. It's deciding that your current chapter doesn't define your whole story. It's showing up when it's uncomfortable. It's building when no one's watching.
        </p>

        <div className="bg-black/50 rounded-xl p-8 border border-primary/20 my-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-accent/80">
            <li>• Start before you're ready. You'll never feel ready.</li>
            <li>• Build relationships, not just a resume.</li>
            <li>• Losing teaches you more than winning ever will.</li>
            <li>• Your impact isn't defined by titles or positions.</li>
            <li>• The person you become matters more than what you achieve.</li>
          </ul>
        </div>

        <p className="text-accent/80 leading-relaxed text-lg">
          From nobody to somebody isn't a straight line. It's messy, uncomfortable, and full of setbacks. But it's also the most worthwhile journey you'll ever take. Because at the end, you're not just somebody—you're authentically, unapologetically yourself.
        </p>

        <p className="text-accent/80 leading-relaxed text-lg mt-6">
          And that's worth more than any election.
        </p>
      </>
    ),
  },
  "post-graduation-blues": {
    title: "Post-Graduation Blues: Finding Direction in the Unknown",
    date: "October 23, 2025",
    readTime: "6 min read",
    tags: ["Life", "Career", "Self-Discovery"],
    heroImage: "/images/blog_postgrad.JPEG",
    content: (
      <>
        <p className="text-accent/80 leading-relaxed text-lg">
          They don't tell you about this part. The part after the celebration photos, after the congratulations messages stop, after everyone asks "so what's next?" and you have no idea what to say.
        </p>

        <p className="text-accent/80 leading-relaxed">
          I'm lost. Not in a "I need GPS" way, but in a "I don't even know what destination to put in" way.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Void After Structure
        </h2>

        <p className="text-accent/80 leading-relaxed">
          For years, life had a script: go to class, complete assignments, take exams, repeat. Even when I was building things and leading initiatives, there was always a framework. Semesters had endings. Projects had deadlines. Success had grades.
        </p>

        <p className="text-accent/80 leading-relaxed">
          Now? Nothing. Just this vast, terrifying freedom where every path looks equally valid and equally wrong.
        </p>

        <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="text-primary italic text-lg">
            "The hardest part about freedom isn't having it—it's knowing what to do with it."
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          Everyone Else Has It Figured Out (Spoiler: They Don't)
        </h2>

        <p className="text-accent/80 leading-relaxed">
          LinkedIn is a nightmare right now. Everyone's posting about their new jobs, their grad school acceptances, their startup launches. And here I am, exploring, experimenting, and honestly? Struggling.
        </p>

        <p className="text-accent/80 leading-relaxed">
          But I'm learning something: the people who look like they have it all figured out are often just better at hiding their uncertainty. We're all making it up as we go. Some of us are just more honest about it.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Exploration Phase
        </h2>

        <p className="text-accent/80 leading-relaxed">
          I'm trying things. Some work, some don't. I'm building projects, learning new skills, talking to people in different fields. It's chaotic and uncomfortable, but it's also kind of exciting?
        </p>

        <p className="text-accent/80 leading-relaxed">
          The pressure to "pick a path" is real. But maybe the path picks you. Maybe you just keep walking until you find yourself somewhere that feels right.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          Why I'm Considering YouTube
        </h2>

        <p className="text-accent/80 leading-relaxed">
          This might sound random, but I've been thinking about starting a YouTube channel. Not because I think I'll be the next big creator, but because:
        </p>

        <ul className="space-y-4 text-accent/80 my-6">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">I want to document this journey.</strong> The messy, uncertain, figuring-it-out phase. Maybe it'll help someone else feel less alone.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">I need a creative outlet.</strong> Something that's mine, with no grades or expectations or "right way" to do it.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">I want to build in public.</strong> Share what I'm learning, the projects I'm working on, the failures and wins.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span><strong className="text-primary">Why not?</strong> Seriously. What's the worst that happens? I try something and it doesn't work? That's literally where I am anyway.</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Uncomfortable Truth
        </h2>

        <p className="text-accent/80 leading-relaxed">
          Being lost isn't a problem to solve—it's a phase to experience. And maybe that's okay. Maybe this uncertainty is exactly where I need to be right now.
        </p>

        <p className="text-accent/80 leading-relaxed">
          I spent university becoming somebody. Now I get to figure out who that somebody actually is, without the structure, without the roles, without the external validation.
        </p>

        <div className="bg-black/50 rounded-xl p-8 border border-primary/20 my-12">
          <h3 className="text-2xl font-bold text-primary mb-4">What I'm Learning</h3>
          <ul className="space-y-3 text-accent/80">
            <li>• It's okay to not have a five-year plan.</li>
            <li>• Exploration isn't wasted time—it's necessary time.</li>
            <li>• Your worth isn't tied to your productivity.</li>
            <li>• Everyone's timeline is different, and that's fine.</li>
            <li>• Sometimes the best thing you can do is just keep moving.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          To Anyone Else Feeling Lost
        </h2>

        <p className="text-accent/80 leading-relaxed">
          You're not behind. You're not failing. You're not wasting time. You're in the messy middle, and the messy middle is where all the good stuff happens.
        </p>

        <p className="text-accent/80 leading-relaxed">
          Keep exploring. Keep building. Keep trying things that might not work. And if you want to start that YouTube channel, write that blog, launch that project—do it. Not because you know it'll succeed, but because you don't know if it won't.
        </p>

        <p className="text-accent/80 leading-relaxed text-lg mt-8">
          The post-graduation blues are real. But so is the possibility that this uncertainty is exactly what we need to figure out who we actually want to be.
        </p>

        <p className="text-accent/80 leading-relaxed text-lg mt-6">
          So here's to being lost. And to finding our way, one confused step at a time.
        </p>
      </>
    ),
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const featureRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate zoom and blur based on scroll
  const initialZoom = 100;
  const zoomOut = Math.max(100, initialZoom - scrollY / 10);
  const blur = Math.min(10, scrollY / 100);
  const opacity = Math.max(0, 1 - (scrollY / 800));

  // Special positioning for post-grad blog
  const bgPosition = params.slug === 'post-graduation-blues' ? 'center 15%' : 'center top';

  return (
    <div className="min-h-screen bg-black text-primary" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
      {/* Hero Image with Parallax Effect */}
      <div 
        ref={featureRef}
        className="fixed left-0 right-0 z-0 overflow-hidden"
        style={{
          top: '80px',
          height: 'calc(60vh - 80px)',
          backgroundImage: `url(${post.heroImage})`,
          backgroundPosition: bgPosition,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          filter: `blur(${blur}px)`,
          opacity: opacity,
          boxShadow: '0 -50px 20px -20px #000 inset',
        }}
      />

      {/* Content */}
      <div className="relative z-10" style={{ paddingTop: 'calc(60vh + 40px)' }}>
        <div className="max-w-4xl mx-auto px-6 pb-20">
          {/* Back Button */}
          <Link href="/blog">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-accent/50 hover:text-primary transition-colors mb-8"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </motion.div>
          </Link>

          {/* Article Header */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-accent/50 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-primary/10 p-8 md:p-12 space-y-6">
              {post.content}
            </div>
          </div>
        </motion.article>
        </div>
      </div>
    </div>
  );
}
