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
    date: "October 25, 2025",
    readTime: "6 min read",
    tags: ["Personal Growth", "Leadership", "University Life"],
    heroImage: "/images/blog_nobody.png",
    content: (
      <>
        <p className="text-accent/80 leading-relaxed text-lg">
          High school me was the human equivalent of wallpaper. No competitions. No sports. No clubs. Just existing, showing up, going home. I wasn't bullied or anything dramatic—I was just <em>there</em>.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          Rock Bottom (Population: Me)
        </h2>

        <p className="text-accent/80 leading-relaxed">
          Then university happened. During a <em>global pandemic</em>. In a <em>different country</em>. Living <em>alone</em> for the first time. No pressure, right?
        </p>

        <p className="text-accent/80 leading-relaxed">
          First semester destroyed me. COVID turned campus into a ghost town. My grades tanked. I was drowning, questioning everything—my choices, my capabilities, whether I even belonged there.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Lightbulb Moment
        </h2>

        <p className="text-accent/80 leading-relaxed">
          Somewhere between failed assignments and lonely nights, I had an epiphany:
        </p>

        <p className="text-accent/80 leading-relaxed font-semibold">
          <strong>The problem wasn't the pandemic, the new country, or being alone. The problem was my thinking.</strong>
        </p>

        <p className="text-accent/80 leading-relaxed">
          I was stuck in what psychologists call an "external locus of control"—blaming everything around me for how my life was going. But the moment I shifted to an <strong className="text-primary">internal locus of control</strong>—realizing <em>I</em> had the power to change my situation—everything clicked.
        </p>

        <p className="text-accent/80 leading-relaxed">
          I stopped asking "Why is this happening to me?" and started asking "What can I do about this?"
        </p>

        <p className="text-accent/80 leading-relaxed font-semibold text-primary">
          Game changer.
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Comeback
        </h2>

        <p className="text-accent/80 leading-relaxed">
          Second semester? Different beast. My GPA soared. I was studying smarter, working harder, and actually believing I could do it. Confidence isn't something you're born with—it's something you build, one small win at a time.
        </p>

        <p className="text-accent/80 leading-relaxed">
          Then, beginning of second year, I met them—the greatest group of chaotic, brilliant, unhinged humans I've ever known. They'd plan adventures at 2 AM and ace exams the next day. They were fun, smart, adventurous, and they made me realize I could be all those things too.
        </p>

        <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
          <p className="text-primary italic text-lg">
            Iron sharpens iron. And my friends? They turned me into a damn sword.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          From Wallpaper to Main Character
        </h2>

        <p className="text-accent/80 leading-relaxed">
          With my new mindset and incredible people around me, I stopped sitting on the sidelines:
        </p>

        <ul className="space-y-3 text-accent/80 my-6">
          <li><strong className="text-primary">Residential Assistant</strong> → Helping students navigate university life</li>
          <li><strong className="text-primary">AUSMUN External Relations Officer → Deputy Director</strong> → Organizing Model UN conferences</li>
          <li><strong className="text-primary">VP → President of Neuroscience Society</strong> → Events, trips to theme parks, making neuroscience fun</li>
          <li><strong className="text-primary">Ecology Representative</strong> → Promoting sustainable living in residential halls</li>
        </ul>

        <p className="text-accent/80 leading-relaxed">
          And then the big one: <strong className="text-primary">Student Council.</strong>
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Student Council Campaign
        </h2>

        <p className="text-accent/80 leading-relaxed">
          Running for student council? <em>Me?</em> The kid who couldn't even raise his hand in high school was now running for one of the most visible positions on campus? Yeah, I didn't believe it either.
        </p>

        <p className="text-accent/80 leading-relaxed">
          The campaign was insane—late nights, posters everywhere, my face plastered around campus. Election day came.
        </p>

        <p className="text-accent/80 leading-relaxed font-semibold">
          <strong>I lost.</strong>
        </p>

        <p className="text-accent/80 leading-relaxed">
          But <strong className="text-primary">around one thousand people voted for me.</strong> People who believed in what I stood for. People who saw me and said, "Yeah, this guy."
        </p>

        <p className="text-accent/80 leading-relaxed">
          Losing stung. But it taught me: <strong className="text-primary">I had a voice. I had influence. I was <em>somebody</em>.</strong>
        </p>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Real Epiphany
        </h2>

        <p className="text-accent/80 leading-relaxed">
          Writing this made me realize something bigger: <strong className="text-primary">Nobody is actually a "nobody."</strong>
        </p>

        <p className="text-accent/80 leading-relaxed">
          Everyone is already "somebody"—they just don't see it yet. You don't need a title to matter. You don't need to win to have impact.
        </p>

        <p className="text-accent/80 leading-relaxed">
          You just need three things:
        </p>

        <ul className="space-y-4 text-accent/80 my-6">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">1.</span>
            <span><strong className="text-primary">Internal locus of control</strong> – Take ownership of your life. You're the author.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">2.</span>
            <span><strong className="text-primary">Positive mindset</strong> – Real positivity. The kind that says, "This sucks, but I can handle it."</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">3.</span>
            <span><strong className="text-primary">Good people</strong> – Find your tribe. The ones who challenge and support you.</span>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
          The Takeaway
        </h2>

        <p className="text-accent/80 leading-relaxed">
          You are not your circumstances. Mindset is everything. Surround yourself with excellence. Take the leap, even if you might fail.
        </p>

        <p className="text-accent/80 leading-relaxed">
          And remember: <strong className="text-primary">You're already somebody. You always were.</strong>
        </p>

        <div className="bg-black/50 rounded-xl p-8 border border-primary/20 my-12">
          <p className="text-accent/80 leading-relaxed text-lg italic">
            From <em>thinking</em> I was nobody to <em>realizing</em> I was always somebody—that's the real journey.
          </p>
        </div>

        <p className="text-accent/80 leading-relaxed text-lg mt-8">
          Now go be somebody. (Spoiler: you already are.)
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
