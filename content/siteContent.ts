// All site copy lives here. Never hardcode strings in components.

export const nav = {
  logo: "SkemaLS",
  links: [
    { label: "About", href: "/about" },
    { label: "The Work", href: "/the-work" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  cta: "Find Your Path",
};

export const hero = {
  eyebrow: "AI-POWERED ACCOUNTABILITY",
  headline: "Your own AI accountability system.\nBuilt by a coach. Running every morning.",
  subtitle:
    "For business owners who can't close the gap between who they are and who they need to be. Custom-configured for your goals, your patterns, and the specific ways you get stuck — not a template, not an app, not someone else's system.",
  ctaPrimary: "Find Your Path",
  ctaSecondary: "See How It Works",
  featureStrip: [
    "Pattern Recognition",
    "Daily Accountability",
    "Priority Filtering",
    "Progress Tracking",
  ],
};

export const empathy = {
  headline: "The Cure for Your Chaos.",
  paragraphs: [
    "Another day ends. You're tired. You worked hard. And you have nothing concrete to show for it. Not because you didn't try — because nothing you've tried was built for how you actually work.",
    "You've read the books. Downloaded the apps. Tried time-blocking, color-coded calendars, accountability partners — none of it stuck because none of it was built for you.",
    "This isn't a discipline problem. It's a systems problem. And this is a solvable problem.",
  ],
  emphasizedIndex: 2,
};

export const proofInsight = {
  quote:
    "Most of my clients come in describing the wrong problem. Design tools, marketing help, bookkeeping fixes — none of those are the actual issue. The intake process exists because people describe symptoms, not root causes. Finding the actual problem is the first move.",
};

export const schemaDefinition = {
  term: "sche·ma",
  pronunciation: "/ ˈskiːmə /",
  partOfSpeech: "noun",
  definition:
    "A mental framework that organizes and interprets information. Your underlying set of instructions — the patterns, beliefs, and decision-making rules that drive how you operate daily.",
  etymology: "Origin: Greek skhēma — form, figure, plan.",
  brandHeadline: "SkemaLS — Skema Life System.",
  brandDescription:
    "Your goals. Your values. Your decision filters. Your patterns — built into an AI system you interact with every day.",
  brandPunchline: "It's not advice. It's your operating system, externalized.",
};

export const pathSelector = {
  label: "The Diagnostic",
  headline: "Is the problem you, your business, or both?",
  subhead: "This question opens the door. Your answer shapes everything we build.",
  paths: [
    {
      id: "A",
      color: "#DC2626",
      title: "The Person",
      description:
        "One person. One system. Built around your goals, your patterns, and whatever your life contains — business, personal, or both. The system captures what's in your head and finds the patterns across all of it.",
      cta: "This sounds like me →",
    },
    {
      id: "B",
      color: "#2563EB",
      title: "The Business",
      description:
        "The problem requires building systems for more than one person. Your people are capable — the workflows, communication, and execution layer underneath them isn't. You need a diagnostic and systems your team can actually run.",
      cta: "This sounds like me →",
    },
    {
      id: "C",
      color: "#7C3AED",
      title: "Custom",
      description:
        "If your situation doesn't fit PATH A or PATH B, PATH C offers a custom solution that emerges during intake. It can be more than either path, less, or simply different. Custom deliverables — research briefs, strategic documents, knowledge bases — are built alongside your MySkema when your situation calls for it.",
      cta: "Tell me about your situation →",
    },
  ],
};

export const howItWorks = {
  label: "How It Works",
  headline: "Three steps. Every path.",
  steps: [
    {
      number: "01",
      title: "Build",
      description:
        "You complete an intake form. Camden uses your responses to generate custom interview questions. The interview is about an hour via video call, phone or in person. From that recording, he builds your system: Project Instructions, an Interview Summary with coaching feedback, and a Setup Email. The system is yours from day one.",
    },
    {
      number: "02",
      title: "Deploy",
      description:
        "Your AI system lives in your own Claude account. You own it — it's not a subscription to someone else's platform. The morning check-in takes 10 minutes. The system knows your history. Every conversation builds on the last. If you can type, you can use it. Camden handles the configuration. You handle the conversation.",
    },
    {
      number: "03",
      title: "Refine",
      description:
        "Every Friday, your system generates a weekly summary. Camden runs it through his system and sends coaching feedback — what you're doing well, what the data shows you're avoiding, and the next layer of your system. The pattern recognition gets sharper the longer you use it.",
    },
  ],
};

export const features = {
  label: "What You Get",
  headline: "MySkema. Your personal operating system.",
  subhead:
    "One place. 10 minutes every morning. A system that orders your day, tracks your goals, captures your ideas, and holds you accountable — then speaks back to you.",
  cards: [
    {
      title: "Your Morning Log",
      description:
        "Capture your day before it captures you. Brain dump. Open tasks. Unfinished decisions. Ideas that'll disappear if you don't write them down. 10 minutes of structure that clears your head and sets your priority. This isn't journaling — it's a daily operating briefing. And the AI reads every word.",
    },
    {
      title: "See What You Can't See",
      description:
        "The AI catches contradictions between what you say you want and what you're actually doing. Avoidance patterns. Momentum trends. Energy cycles. The things you consistently skip, delay, or rationalize away — surfaced automatically.",
    },
    {
      title: "Accountability That Doesn't Flinch",
      description:
        "Missed a commitment? It notices. Avoiding the hard thing? It says so. But it also catches wins you'd overlook, reinforces momentum when you're building it, and reminds you of past efforts paying off right now. Brutal honesty. Genuine encouragement. Both.",
    },
    {
      title: "Capture Everything. Do What Matters.",
      description:
        "Ideas, tasks, and decisions — captured before they're gone. Then the AI triages by impact using your decision framework. Highest-leverage actions rise. Busy work gets flagged. What to delegate, defer, or delete becomes obvious.",
    },
    {
      title: "Decide Faster. Decide Better.",
      description:
        "Describe any opportunity or situation. The AI runs it through your 10-year vision and personal values. Returns a recommendation filtered through what matters to you — not generic advice from someone who doesn't know your business.",
    },
    {
      title: "Proof You're Moving",
      description:
        "Weekly AI-generated reports tracking entries, wins completed, patterns identified, and gaps. Hard data on what's actually happening — not how it feels. Your coach reviews these and adjusts the system. You own the data.",
    },
  ],
  progressiveDeployment: {
    headline: "The system starts small. That's the point.",
    body: [
      "Week 1 is one habit: a 10-minute morning check-in. Nothing else is added until that's established. No new dashboards. No tech stack to configure. If you can type a text message, you can do this.",
      "Every system you've abandoned failed for the same reason — it gave you everything at once. This one doesn't. Complexity is added as you level up, when the foundation is proven, not before.",
    ],
    weeks: [
      "Week 1: Daily check-in and pattern recognition.",
      "Week 2: Priority filtering and decision support added.",
      "Week 4: Strategic modules and deeper pattern analysis.",
      "Month 3: The system is running your task triage, your decision framework, your pattern recognition, and whatever your work actually demands. That's the ceiling — and it's different for every client.",
    ],
    closing:
      "The check-in doesn't replace protected time. It produces it. Ten minutes of structured focus that ends with a clear priority for the next two hours. That's the whole mechanism.",
  },
};

export const whatItsNot = {
  label: "Clear Expectations",
  headline: "What this is not.",
  rows: [
    {
      left: "Not a course.",
      right:
        "An operational system you use daily. It works because you use it — not because you finished it.",
    },
    {
      left: "Not a chatbot.",
      right:
        "Configured with your goals, values, and operating principles. It knows your business because your coach built it that way.",
    },
    {
      left: "Not a template.",
      right:
        "Every deployment is custom-built from a deep-dive interview. No two systems are the same.",
    },
    {
      left: "Not just software.",
      right:
        "The AI handles daily accountability. Your coach handles strategic direction. You get both.",
    },
    {
      left: "Not theoretical.",
      right:
        "Every framework was built and tested in a real operating business before it was ever offered to a client.",
    },
  ],
};

export const practitionerProof = {
  label: "Built by a Practitioner",
  headline: "Tested on the founder first. Then on clients.",
  paragraphs: [
    "I built this system for myself before I offered it to anyone. I was ending many days exhausted with little to show for it — responsive to everyone, in control of nothing. The system was the solution to my own problem.",
    "I ran it on myself and developed it for months. Protected deep work time. Controlled working environment. Weekly review. When I began having consistently directed days instead of reactive ones, I started building it for others.",
    "That's not a credential. That's a requirement. I won't coach someone through something I haven't lived.",
  ],
};

export const clientProof = {
  label: "Client Proof",
  headline: "What happens in the first 30 days.",
  subhead:
    "The system runs inside Claude — an AI platform your coach configures specifically for you. Here's what clients experience.",
  cards: [
    {
      eyebrow: "WEEK 1",
      eyebrowColor: "#DC2626",
      headline: "The Pattern Named",
      body: "The AI identified an avoidance loop across four consecutive journal entries. The client had been living inside it for months and couldn't see it from the inside. Her coach named it. She changed it.",
    },
    {
      eyebrow: "5 DAYS",
      eyebrowColor: "#7C3AED",
      headline: "Research to Contract",
      body: "Client researched a negotiation tactic on Monday. Applied it to a live counter-offer on Friday. Got the contract. One week from learning to earning.",
    },
    {
      eyebrow: "WEEK 1",
      eyebrowColor: "#DC2626",
      headline: "The 2:30am Problem",
      body: "Financial anxiety was waking her at 2:30am. The first week of journaling named the avoidance loop causing it. She'd been living inside it for months. Naming it was the beginning of breaking it.",
    },
    {
      eyebrow: "WEEK 1",
      eyebrowColor: "#DC2626",
      headline: "She Extended It Herself",
      body: "In her first week, she found a gap in her own system, fixed it without help, then built a new accountability feature no one asked for. She upgraded her account the same week. All unprompted.",
    },
    {
      eyebrow: "WEEK 2",
      eyebrowColor: "#06B6D4",
      headline: "$14,000 a Year. Unbudgeted.",
      body: "Two weeks of journaling revealed she was performing 90 minutes of duties outside her job description every morning before her actual work began. The organization had no idea. Now it's a board conversation.",
    },
    {
      eyebrow: "WEEK 4",
      eyebrowColor: "#7C3AED",
      headline: "The Leverage Was Already There",
      body: "Sponsor commitments tripled in a single activated call session. The opportunity existed before the system. The system got her to use it.",
    },
  ],
  // Toggle to true once permission is confirmed to display the quote publicly.
  testimonialPublished: false,
  testimonial: {
    quote: "Why is it so much easier to take criticism from Claude than it is another person?",
    attribution: "Week 1 Client",
  },
};

export const founder = {
  label: "About Camden",
  headline: "Camden Bennett",
  imageSrc: "/images/camden-headshot.jpg",
  imageAlt: "Camden Bennett, founder of SkemaLS",
  bio: [
    "I didn't build SkemaLS because I had it figured out. I built it because I didn't. What changed wasn't a book or a framework — it was building a system from scratch around my specific goals and patterns, then running it every morning until the evidence showed up in my days.",
    "I spent 15 years in the Navy — Diver, then Intelligence Officer. Later, real estate broker of local top-producing brokerage. Problem solving and data clarity were already important to me, but when I started running a real estate brokerage, I needed productivity that I didn't have. I now run the same system in my business that I build for every client. That's not a credential. That's a requirement.",
  ],
};

export const qualifierForm = {
  label: "Get Started",
  headline: "Find out which path is yours.",
  subhead: "Five questions. 90 seconds. No sales call until there's a fit.",
  steps: [
    {
      id: "path",
      question: "Is the problem primarily…",
      type: "single-select" as const,
      options: [
        { label: "More personal — habits, focus, consistency", value: "A" },
        { label: "More business — operations, team, systems", value: "B" },
        { label: "Both — it's all connected", value: "A" },
      ],
    },
    {
      id: "frustration",
      question: "What does a frustrating day look like right now?",
      type: "textarea" as const,
      placeholder: "Be specific — this shapes what we build.",
    },
    {
      id: "tried",
      question: "What have you already tried?",
      type: "multi-select" as const,
      options: [
        { label: "Productivity apps (Notion, Todoist, Asana, etc.)", value: "apps" },
        { label: "Books and courses (Atomic Habits, GTD, etc.)", value: "books" },
        { label: "Coaching or consulting", value: "coaching" },
        { label: "AI tools (ChatGPT, Claude, etc.)", value: "ai" },
        { label: "Nothing yet — I've been winging it", value: "nothing" },
      ],
    },
    {
      id: "outcome",
      question: "What outcome would make this worth it in 90 days?",
      type: "textarea" as const,
      placeholder: "",
    },
    {
      id: "contact",
      question: "Where should we send your results?",
      type: "contact" as const,
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
    },
  ],
  result: {
    A: {
      pathLabel: "PATH A",
      title: "Your path is individual accountability.",
    },
    B: {
      pathLabel: "PATH B",
      title: "Your path is business diagnostics.",
    },
    C: {
      pathLabel: "PATH C",
      title: "Your path is the hybrid — personal + business.",
    },
  },
  resultDescription:
    "Book a free 15-minute call and we'll talk through what your system could look like. No pitch. No pressure.",
  resultCta: "Book Your Free Call",
  backLabel: "Back",
  nextLabel: "Next",
  submitLabel: "See My Path",
  afterSubmit:
    "After you submit: Camden reviews your answers and responds within 24 hours to schedule a free 15-minute call. No pitch. No pressure. Just a real conversation about whether this is the right fit.",
};

export const cta = {
  headline: "Ready to stop carrying everything in your head?",
  description:
    "15 minutes. Free. We'll talk through what you're dealing with and whether a MySkema system makes sense. No pitch. No pressure.",
  buttonLabel: "Find Your Path",
  trustLine: "You own your account. You own your data. No lock-in. No black box.",
  contact: "camden@skemals.com · 801-910-6528",
  pricing: "PATH A starts at $750 — includes your custom system build and three months of weekly coaching review. Business engagements are quoted by scope.",
};

export const footer = {
  logo: "SkemaLS",
  links: ["About", "Pricing", "FAQ", "Contact"],
  legalLinks: ["Privacy Policy"],
  location: "Pinedale, Wyoming",
};

export const about = {
  meta: {
    title: "About Camden Bennett — SkemaLS",
    description:
      "Camden Bennett built SkemaLS for himself before offering it to clients. 15 years in the Navy. Real estate broker. Founder of a productivity system that runs every morning.",
  },
  section1: {
    eyebrow: "ABOUT CAMDEN",
    headline: "I didn't figure it out. I built my way out.",
    paragraphs: [
      "I know what it's like to end a day exhausted with nothing to show for it. Not because I didn't work. I worked constantly. I was available to everyone, responsive to everything, and in control of nothing. My days were shaped by whoever needed something from me next. I had more goals than I'd ever had — and less ability to move them forward than at any point in my career.",
      "I realized this when I took over as broker of Pinedale Properties, the top-producing real estate brokerage in Sublette County, Wyoming. More responsibility. More people depending on me. More things I wanted to build. And a growing gap between how hard I was working and what I was actually producing.",
      "I didn't have a discipline problem. I simply had no systems.",
    ],
    imageSrc: "/images/camden-headshot.jpg",
    imageAlt: "Camden Bennett, founder of SkemaLS",
  },
  section2: {
    eyebrow: "THE SEARCH",
    headline: "I tried everything. Here's what I mean by that.",
    paragraphs: [
      "I put my headphones on and told my co-workers I wasn't available. That lasted about a week before something urgent enough came along to override it.",
      "I started coming in earlier than everyone else. That bought me thirty minutes, maybe forty-five, before the day took over again.",
      "I tried notebooks. Notes on my desk. A desk calendar. A digital calendar. Multiple digital calendars at once. I read the books. I used ChatGPT without any structure, which is exactly as useful as it sounds.",
      "None of it worked. Not because the tools were bad — because none of it was built into a system. A notebook doesn't hold you accountable. A calendar doesn't tell you what to prioritize. An AI without structure just reflects your chaos back at you.",
      "The breakthrough wasn't a tool. It was understanding that context switching was quietly destroying my productivity in a way I couldn't see from the inside. Every interruption, every reactive response to a message was costing me recovery time I wasn't tracking. My days felt full. My output told a different story.",
      "A concrete example: for years, my office tried to send one email per month to our client list. Without a system behind it, it was impossible to sustain. Once I systematized it, I went to two emails per week — a comprehensive market update and a weekly blog post. Same person. Completely different output. The only variable was the system.",
    ],
  },
  section3: {
    eyebrow: "THE BACKGROUND",
    headline: "What 15 years in the Navy actually taught me.",
    paragraphs: [
      "I grew up in Wyoming. Joined the Navy. Spent fifteen years.",
      "My first job was as a Navy Diver — underwater inspections, hull cleanings, repairs on ships and submarines, work inside ballast tanks, occasional salvage operations. A job that demands focus and precision in conditions that aren't comfortable.",
      "I earned a dual bachelor's degree in English and Anthropology while serving, which led to a commission as an Intelligence Officer. I deployed on the USS John C. Stennis, CVN-74, on the admiral's staff. My job was to monitor the maritime environment for threats and brief decision-makers accurately enough that they could act with confidence.",
      "In intelligence work, the goal isn't to gather information — it's to synthesize it into something a decision-maker can use. Bad analysis, delivered with confidence, gets people hurt. Good analysis, clearly communicated, changes outcomes. You learn to distinguish between noise and signal. You learn that the quality of a decision is only as good as the quality of the information feeding it.",
      "That discipline — looking at a stream of information and identifying what actually matters — is exactly what SkemaLS does for a client's weekly journal data. The mechanism is different. The skill is the same.",
      "I came back to Wyoming when it was time to leave the Navy and put my family somewhere stable. My connections were here. The real estate opportunity was here. I became a broker, then the managing broker. And that's when the productivity problem I'd been managing finally outran me.",
    ],
  },
  section4: {
    eyebrow: "HOW I WORK NOW",
    headline: "What a morning actually looks like.",
    paragraphs: [
      "I'm up by six. Three or four days a week I run and do a calisthenics routine. I fast until lunch. Coffee, supplements for cognitive function, electrolytes. I read my Bible.",
      "Then I open MySkema, type the time and date, and say: Let's run a journal.",
      "Ten minutes. Designed for focus, not reflection — a way to clear my head and lock in my priorities before the day can take over. The system walks me through it:",
    ],
    listItems: [
      "A gratitude entry. One thing.",
      "A brain dump of whatever's creating noise — worries, anxieties, unresolved things sitting in the background. Getting them out of my head and into the system clears space for actual work.",
      "A stream of consciousness: ideas, impressions, observations about ongoing business, things I want to accomplish. Unfiltered. The AI reads all of it.",
      "A rotating daily theme. Every day of the week has a different focus. One day I identify someone who helped me that week and reach out to thank them. Another day I evaluate what I'm giving time to that doesn't deserve it, and decide what replaces it. These themes keep the system from going stale.",
      "The journal ends with the things I need to spend uninterrupted time on to actually move the needle. By the time I close the check-in, I know exactly what I'm protecting my morning for.",
    ],
    closingParagraph:
      "Friday, I generate a weekly summary. The patterns that surface across a full week of entries are things I'd never catch day-to-day. That accumulation is where the real coaching value lives.",
  },
  section5: {
    eyebrow: "WHAT I BUILD FOR YOU",
    headline: "I'm doing what I coach people to do.",
    paragraphs: [
      "I've been using this system longer than any of my clients. Every framework I offer has been tested on myself first. Every configuration decision I make for a client is informed by what I've learned from my own system and from patterns observed across dozens of client engagements.",
      "Here's what I've learned: most people, even those who know they're disorganized, don't realize the extent of it. They don't see how much time they lose to context switching. They don't see how fractured their days actually are until the journal data shows them. They come in thinking they need more discipline. What they need is a system that works with how they actually function — not against it.",
      "I'm an entrepreneur running two businesses. I understand the pressure of too many priorities and not enough protected time. I've studied productivity more seriously than most people I know — not as an academic exercise, but because I needed it to work.",
      "My clients tell me I'm easy to talk to. That the coaching goes deep and compounds over time in a way generic coaching never did. The clients who take it seriously and run with it see massive increases in productivity and clarity — not because of motivation, but because the system holds when the motivation doesn't.",
      "Not theory. Not a course. Not a template.",
      "A system built from a conversation about how you actually work, run by someone who built it for himself first.",
    ],
  },
  cta: {
    buttonLabel: "Find Your Path",
    buttonHref: "/#qualifier",
  },
};

export const faq = {
  eyebrow: "COMMON QUESTIONS",
  headline: "Everything you're probably wondering.",
  items: [
    {
      question: "What is SkemaLS?",
      answer:
        "SkemaLS builds custom AI accountability systems for business owners and individuals. The system — called MySkema — is configured around your specific goals, patterns, and the ways you consistently get stuck. It runs in your own Claude account every morning. Your coach reviews your progress weekly and adjusts the system over time. It's not an app, not a course, and not a template. Every deployment is built from scratch.",
    },
    {
      question: "How is this different from hiring a coach?",
      answer:
        "Traditional coaching produces insights. SkemaLS produces a system that runs whether you remember to engage with it or not. The AI holds the accountability between coaching sessions — that's the gap traditional coaching doesn't close. You get both the system and the coach.",
    },
    {
      question: "What is MySkema?",
      answer:
        "MySkema is your personal AI system — a custom Claude project configured around how you actually work. You use it every morning in a 10-minute check-in. It tracks your goals, captures your thinking, surfaces patterns you can't see from inside them, and holds you accountable to what you said you'd do. You own the account. You own the data.",
    },
    {
      question: "Do I need to know how to use AI?",
      answer:
        "If you can type in a word processing document, you can do this. Camden sets up the entire system. You interact with it the same way you'd send a text — type what's on your mind, read what comes back. There's nothing to install, no interface to learn, no settings to configure.",
    },
    {
      question: "How much time does this take each day?",
      answer:
        "The morning check-in takes 10 minutes. The weekly summary takes about 5 minutes to generate and send. The system does the rest.",
    },
    {
      question: "What happens in the first week?",
      answer:
        "You complete an intake form. Camden uses your responses to generate custom interview questions. You spend about an hour together — he asks everything the form surfaced, goes deeper where needed, and records the conversation. Within days you receive your Project Instructions, an Interview Summary with coaching feedback, and a Setup Email. Your system goes live and your first morning check-in begins.",
    },
    {
      question: "What does the weekly review look like?",
      answer:
        "Every Friday, your system generates a weekly summary. You send it to Camden by email. He runs it through an analysis engine built from client pattern data and coaching frameworks, and sends back a coaching response: what you're doing well, what the data shows you're avoiding, and — when you're ready — additions to your system that take it to the next level.",
    },
    {
      question: "Is this a subscription? Can I cancel?",
      answer:
        "Pricing is monthly. You can cancel at any time. Your Claude account and everything in it belongs to you — no lock-in, no black box. If you cancel, your system stays in your account and continues to work.",
    },
    {
      question: "What kinds of businesses is this built for?",
      answer:
        "PATH A serves individuals — solo operators, executives, and business owners who are the bottleneck in their own performance. PATH B serves organizations where the dysfunction is structural. PATH C serves business owners where personal and business challenges are inseparable. If you run something and feel behind your own potential, it's built for you.",
    },
  ],
  cta: {
    headline: "Still have questions?",
    body: "Camden reviews every qualifier personally. The fastest way to get answers is to start.",
    buttonLabel: "Find Your Path",
    buttonHref: "/#qualifier",
  },
};

export const contact = {
  eyebrow: "GET IN TOUCH",
  headline: "Start with the qualifier.",
  body: "The fastest path to working together is the 5-question qualifier. It takes 90 seconds, routes you to the right path, and gets your answers directly to Camden. No intake form. No sales call until there's a fit.",
  buttonLabel: "Find Your Path",
  buttonHref: "/#qualifier",
  directContact: {
    label: "Prefer to reach out directly?",
    email: "camden@skemals.com",
    phone: "801-910-6528",
  },
};

export const services = {
  eyebrow: "THE DIAGNOSTIC",
  headline: "Is the problem you, your business, or both?",
  subheadline:
    "Your answer shapes everything we build. Three paths. One intake process. No two systems are the same.",
  cta: {
    headline: "Not sure which path is yours?",
    body: "The qualifier takes 90 seconds. Camden reviews every submission personally.",
    buttonLabel: "Find Your Path",
    buttonHref: "/#qualifier",
  },
};

export const privacyPolicy = {
  title: "Privacy Policy",
  effectiveDate: "March 26, 2026",
  lastUpdated: "March 26, 2026",
  contact: "camden@skemals.com | 801-910-6528",
  location: "Pinedale, Wyoming",
  sections: [
    {
      heading: "What This Policy Covers",
      body: "This Privacy Policy explains what information SkemaLS collects when you visit skemals.com, how that information is used, and what choices you have. SkemaLS is a one-person coaching practice operated by Camden Bennett. Your data is never sold, rented, or traded.",
    },
    {
      heading: "Information We Collect",
      body: "",
      subsections: [
        {
          label: "Information you provide directly:",
          text: "When you complete the qualifier form or contact us, we collect the information you submit — typically your name, email address, phone number, and your responses to intake questions. We only collect what you choose to give us.",
        },
        {
          label: "Information collected automatically:",
          text: "When you visit skemals.com, standard web analytics tools collect basic technical data: pages visited, time spent on the site, device type, browser type, and general geographic location (city/country level). This data is aggregated and anonymous — it is not tied to your name or contact information.",
        },
        {
          label: "Cookies:",
          text: "This site uses cookies to support analytics and basic site functionality. Analytics cookies help us understand how visitors use the site so we can improve it. You can disable cookies in your browser settings at any time.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      body: "Information you submit through the qualifier form or contact form is used exclusively to:",
      list: [
        "Respond to your inquiry",
        "Schedule and conduct an initial consultation",
        "Build and deliver your MySkema system if you become a client",
        "Send coaching feedback and session-related communications",
      ],
      footer: "We do not use your information for advertising, email marketing lists, or any purpose unrelated to the service you requested.",
    },
    {
      heading: "How We Store and Protect Your Information",
      body: "Intake responses and client information are stored in tools used to deliver the coaching service (which may include Notion, Google Workspace, and Claude). These platforms maintain their own security and privacy standards. We do not store payment card information — payments are processed by third-party payment processors who are responsible for securing that data.\n\nWe take reasonable precautions to protect your information, but no method of transmission over the internet is completely secure. If you have concerns about a specific piece of sensitive information, contact us before submitting it through a web form.",
    },
    {
      heading: "Information Sharing",
      body: "We do not sell, rent, or share your personal information with third parties for marketing purposes.\n\nWe may share information only in these limited circumstances:",
      subsections: [
        {
          label: "Service delivery:",
          text: "Tools necessary to deliver the coaching service (e.g., scheduling software, document storage). These are disclosed to clients directly.",
        },
        {
          label: "Legal compliance:",
          text: "If required by law, court order, or government authority.",
        },
        {
          label: "Business transfer:",
          text: "In the unlikely event SkemaLS is sold or merged, client data would transfer as part of the business. You would be notified before that occurs.",
        },
      ],
    },
    {
      heading: "Google Analytics",
      body: "This site uses Google Analytics 4 to understand how visitors use the site. Google Analytics collects anonymized usage data. Google's use of this data is governed by Google's Privacy Policy (policies.google.com/privacy). You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout).",
    },
    {
      heading: "Your Rights",
      body: "You have the right to:",
      subsections: [
        { label: "Access", text: "the personal information we hold about you" },
        { label: "Correct", text: "any inaccurate information" },
        { label: "Request deletion", text: "of your information (subject to any legal obligations we have to retain records)" },
        { label: "Withdraw consent", text: "for any communication at any time" },
      ],
      footer: "To exercise any of these rights, email camden@skemals.com. We will respond within 30 days.",
    },
    {
      heading: "Children's Privacy",
      body: "SkemaLS is a professional coaching service intended for adults. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has submitted information through this site, contact us and we will delete it promptly.",
    },
    {
      heading: "External Links",
      body: "This site may contain links to external websites. We are not responsible for the privacy practices of those sites. We recommend reviewing the privacy policy of any site you visit.",
    },
    {
      heading: "Changes to This Policy",
      body: "If we make material changes to this policy, we will update the \"Last Updated\" date at the top and, where appropriate, notify active clients by email. Continued use of the site after changes are posted constitutes acceptance of the updated policy.",
    },
    {
      heading: "Contact",
      body: "Questions about this policy or your data:",
      contact: {
        name: "Camden Bennett",
        company: "SkemaLS",
        email: "camden@skemals.com",
        location: "Pinedale, Wyoming",
      },
    },
  ],
};

export const pricing = {
  meta: {
    title: "Pricing — SkemaLS",
    description:
      "What SkemaLS costs — and what it's worth. PATH A starts at $1,000/month. PATH B from $1,500/month. PATH C custom.",
  },
  hero: {
    eyebrow: "INVESTMENT",
    headline: "What SkemaLS costs — and what it's worth.",
    body: "The right question isn't what you pay per month. It's what it costs to stay stuck for another year. Recovered time, clearer decisions, forward momentum on the things that keep getting pushed — that's the return. The investment is what makes the system real.",
  },
  pathA: {
    eyebrow: "PATH A — INDIVIDUAL",
    eyebrowColor: "#DC2626",
    headline: "One person. One system. Built from a real conversation.",
    body: [
      "PATH A is for one person — a solo operator, executive, or business owner who works hard and can't close the gap between intention and result. The system handles whatever your life contains. Business, personal, or both. PATH A doesn't separate domains — it captures what's in your head and finds the patterns across all of it.",
      "The engagement begins with a 60–75 minute deep-dive interview. Camden maps your goals, decision framework, behavioral patterns, and specific avoidance loops. The result is a custom AI system that runs inside your own Claude account, knows what you said you'd do, and won't let you forget it.",
    ],
    price: "$1,000/month",
    includes: [
      "Intake form",
      "Deep-dive interview",
      "Custom Project Instructions",
      "Interview Summary with coaching feedback",
      "Setup Email",
      "Weekly progress review",
      "Progressive system upgrades as you level up",
      "Your system lives in your own account — keeps running even if you stop working with Camden",
    ],
    cta: { label: "Find Your Path", href: "/#qualifier" },
  },
  pathB: {
    eyebrow: "PATH B — ORGANIZATIONAL",
    eyebrowColor: "#7C3AED",
    headline: "Multiple people. Organizational scope. Executable Monday morning.",
    body: [
      "PATH B is for teams and organizations where the problem isn't one person's productivity — it's how the organization operates, markets, communicates, or executes. The bottlenecks live between people, in workflows, in systems that don't exist yet.",
      "The trigger is simple: does solving this require building systems for more than one person? If yes — PATH B.",
      "Every engagement starts with a diagnostic. Camden maps the people, their workflows, and where time disappears before designing anything. Deliverables include a bottleneck map, a people map, named Claude Projects configured for each person executing the work, and a phased implementation plan with clear ownership and time estimates.",
    ],
    price: "$1,500/month (1–3 person teams)",
    priceNote:
      "Larger organizations and project-based engagements are quoted after a discovery conversation.",
    includes: [
      "Organizational diagnostic",
      "Bottleneck and people mapping",
      "Individual Claude Project deployments for each team member",
      "Phased implementation plan",
    ],
    includesNote:
      "Standard PATH B configures and deploys existing systems — websites, custom dashboards, and purpose-built applications are separate engagements.",
    cta: { label: "Start the conversation", href: "/#qualifier?path=b" },
  },
  pathC: {
    eyebrow: "PATH C — SPECIAL PROJECTS",
    eyebrowColor: "#06B6D4",
    headline: "When the situation requires more than configuration.",
    body: [
      "PATH C triggers when solving the problem requires Camden to produce external deliverables that live outside the client's personal system — a research brief, a strategic document, a legal education resource, a knowledge base built for a specific business situation.",
      "MySkema is still the foundation. The extra work is the overlay.",
      "Not sure which path applies to you? The intake determines it. Most clients find out during the qualifier conversation.",
    ],
    price: "Custom quote based on scope.",
    cta: { label: "Find Your Path", href: "/#qualifier" },
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    headline: "A few things people ask before committing.",
    items: [
      {
        question: "Is there a minimum commitment?",
        answer:
          "We're establishing a three-month minimum across all engagements. Transformation doesn't happen in thirty days. Three months gives the system enough cycles to produce real pattern data and gives the coaching enough time to produce results you can point to. You'll know by month two whether it's working.",
      },
      {
        question: "Do you offer discounts?",
        answer:
          "No. If the scope isn't right, we adjust the scope. Discounting a price that was set correctly doesn't serve either of us.",
      },
      {
        question: "What's included in the monthly investment?",
        answer:
          "The intake form and deep-dive interview. Custom system build — Project Instructions, Interview Summary, Setup Email. Weekly coaching review of your Friday summary. Progressive system upgrades as you level up. Camden's pattern recognition across your data accumulated over weeks and months — not just a check-in call.",
      },
      {
        question: "What does it cost to run the system day-to-day?",
        answer:
          "A Claude account runs approximately $20/month. That's yours — separate from the coaching investment. You own it whether we're working together or not.",
      },
      {
        question: "What if I'm not ready for a full engagement?",
        answer:
          "The qualifier takes 90 seconds. If you're not the right fit yet, Camden will tell you directly and you won't be pushed toward a call. No pitch. No pressure.",
      },
    ],
  },
  footerCta: {
    headline: "The system starts at $1,000/month.",
    subheadline:
      "That's roughly $33/day for an AI system that runs every morning, catches the patterns you can't see, and gets sharper every week.",
    cta: { label: "Find Your Path", href: "/#qualifier" },
    microCopy:
      "No commitment until there's a fit. Camden reviews every qualifier personally.",
  },
};
