import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    title: "Management apps and automated workflows",
    description:
      "I help businesses and organizations save time and headcount with management apps and automated workflows, designed around how you already work.",
  },
  skip: "Skip to content",
  nav: {
    about: "About",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
    cta: "Start a project",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "(01 / MANAGEMENT APPS AND AUTOMATED WORKFLOWS)",
    tagline: "Management apps and automated workflows for businesses.",
    chipsLabel: "(SCOPE OF WORK)",
    chips: ["Management apps", "Automated workflows", "Training and revision tools", "Marketing and content"],
    portraitAlt: "Portrait",
    portraitCaption: "INDEPENDENT",
    portraitPlaceholder: "Your portrait photo",
  },
  about: {
    title: "About",
    index: "(02 / OVERVIEW)",
    statement:
      "I help businesses save time and headcount with management apps and automated workflows, designed around how you already work.",
    tiltCaption: "INDEPENDENT",
    cards: [
      {
        label: "(THE PROBLEM)",
        text: "Businesses and organizations often lose hours every week to repetitive work such as checking documents, sending reminders and compiling reports.",
        caption: "A COMMON SITUATION",
      },
      {
        label: "(EXPERIENCE)",
        text: "Studied Marketing, with hands-on experience in filming, photography and content production. Built a document management system for a client.",
        caption: "A WIDE BACKGROUND",
      },
      {
        label: "(HOW I WORK)",
        text: "I understand the current process first, build only what genuinely saves time, and hand over with clear documentation.",
        caption: "WORKING PRINCIPLE",
      },
      {
        label: "(COLLABORATION)",
        text: "I work independently, by project package or as a long-term partner for day-to-day operations.",
        caption: "FLEXIBLE FORMAT",
      },
    ],
  },
  projects: {
    title: "Projects",
    index: "(03 / SELECTED WORK)",
    p1: {
      eyebrow: "(CLIENT PROJECT)",
      title: "Document management system",
      clientLabel: "CLIENT:",
      summary:
        "An internal web app for submitting, checking and approving project payment files. Every step lives in one place instead of being scattered across email and chat.",
      bullets: [
        "A separate checklist for 4 file types: advance, settlement, expert payment, supplier payment",
        "4 processing statuses, with an email notice whenever the status changes",
        "Each person only sees files from the projects they are assigned to",
        "Accountants cannot approve a file they submitted themselves",
      ],
      demo: "Try the demo",
      more: "View project",
      less: "Collapse",
      flowLabel: "(4 PROCESSING STATUSES)",
      flow: ["Awaiting review", "Under review", "More documents needed", "Ready for payment"],
      shots: {
        dashboard: "The accountant’s dashboard (sample data)",
      },
      detail: {
        problemsLabel: "(PROBLEM → HOW IT IS SOLVED)",
        problems: [
          {
            problem: "Missing documents found too late",
            solution:
              "Submitters could not remember every document each file type needs, so accountants kept asking. The app has a fixed checklist per type; any missing item needs a stated reason.",
          },
          {
            problem: "No one knows where a file is",
            solution:
              "Four clear statuses (Awaiting review, Under review, More documents needed, Ready for payment), with an email notice when the status changes.",
          },
          {
            problem: "Scattered communication",
            solution:
              "Accountants and PMs leave notes directly on the file, at 3 levels: Normal, Needs attention, Urgent, so nothing is easily missed.",
          },
          {
            problem: "Hard to find and summarize",
            solution:
              "Completed files are kept in History, where they can be viewed and reprinted. An Excel report lists every file that is still missing documents.",
          },
          {
            problem: "Loose permissions",
            solution: "Each person sees only the files of the projects they are assigned to.",
          },
        ],
        safetyLabel: "(ADMINISTRATION AND SAFETY)",
        safety: [
          "The chief accountant creates projects and assigns members, accountants and PMs to each one.",
          "Sign-in is with Google, and the server verifies the real identity on every action, so no one can impersonate someone else.",
          "Accountants cannot approve a file they submitted themselves.",
          "After the retention period the system automatically deletes attachments and details, keeping only a summary line.",
          "Light and dark themes, in Vietnamese and English.",
        ],
        resultLabel: "(RESULTS)",
      },
    },
    p2: {
      eyebrow: "(PERSONAL PRODUCT)",
      title: "Wyckoff revision app",
      summary:
        "Turns a 42-chapter specialist book into an active learning system: questions, progress tracking and a daily challenge.",
      bullets: [
        "326 questions: multiple choice, chart recognition and self-graded written answers",
        "Retry mistakes, a 5-question daily challenge, badges and study streaks",
        "Cross-chapter revision sets with a glossary",
      ],
      more: "View project",
      less: "Collapse",
      shot: "The progress screen (sample data)",
      detail: {
        featuresLabel: "(FEATURES)",
        features: [
          "42 chapters plus an introduction, each with its own question set.",
          "Three question types: multiple choice (174), chart recognition (113), self-graded written answers with a model answer (39).",
          "Instant grading after every question, with an explanation.",
          "Retry mistakes, mistake notes, study streaks, confidence bets and end-of-chapter “boss” questions.",
          "A 5-question daily challenge and achievement badges.",
          "Cross-chapter revision sets with a glossary.",
          "A shared trading journal for the study group, with Google sign-in.",
        ],
        noteLabel: "(NOTE)",
        note: "The app is used privately by a study group and is not public, because its content is based on a copyrighted book.",
      },
    },
  },
  services: {
    title: "Services",
    index: "(04 / WHAT I OFFER)",
    doneLabel: "(DELIVERED)",
    done: [
      {
        name: "Process management apps",
        desc: "Submit, review and approve files, with permissions and reports.",
      },
      {
        name: "Training and revision apps",
        desc: "Turn documents into quizzes with progress tracking.",
      },
    ],
    onRequestLabel: "(ON REQUEST)",
    onRequest: [
      { name: "Automated workflows", desc: "Connect data between the tools you already use." },
      { name: "Marketing and content", desc: "Plan and produce content with a clear process." },
      { name: "Websites and landing pages", desc: "Clean, fast introduction pages." },
    ],
    note: "Have a specific task in mind? Tell me about it and we will start with a small trial.",
  },
  contact: {
    eyebrow: "(05 / START A CONVERSATION)",
    heading: "Tell me which process costs you the most time.",
    channelsLabel: "DIRECT CHANNELS",
    channels: { email: "Email", zalo: "Zalo", linkedin: "LinkedIn", cv: "Download CV" },
    copy: "Copy",
    copied: "Copied",
    form: {
      name: "YOUR NAME (REQUIRED)",
      namePh: "Jane Smith",
      email: "EMAIL (REQUIRED)",
      emailPh: "you@company.com",
      phone: "PHONE",
      phonePh: "+84 90 000 0000",
      reason: "REASON FOR CONTACT",
      reasons: { project: "Project", job: "Job opportunity", hello: "Just saying hi" },
      message: "MESSAGE",
      messagePh: "Briefly describe the task or spreadsheet you want to automate…",
      submit: "Send details",
      sending: "Sending…",
      success: "Your message has arrived. I will reply soon.",
      errRequired: "Please fill in this field.",
      errEmail: "That email address does not look right.",
      errFallback: "Could not send. Please try again or email directly.",
      errNotConfigured: "The form is not connected yet. Please use the direct channels next to it.",
      responseLabel: "RESPONSE TIME:",
    },
  },
  cases: {
    label: "PROJECT",
    back: "← All projects",
    metaLabels: {
      role: "ROLE",
      timeline: "TIMELINE",
      year: "YEAR",
      team: "TEAM",
      type: "TYPE",
      client: "CLIENT",
    },
    myRoleLabel: "(MY ROLE)",
    approachLabel: "Approach",
    scopeLabel: "(SCOPE)",
    nextLabel: "NEXT PROJECT",
    srd: {
      chips: ["Management app", "Workflow", "Permissions", "Reporting"],
      intro:
        "An internal web app for submitting, checking and approving project payment files. Every step lives in one place instead of being scattered across email and chat: submitters know what to prepare, accountants see everything on one screen, and everyone knows where a file stands.",
      meta: {
        role: "Process design · App development · Deployment",
        timeline: "07/2026 — present",
        year: "2026",
        team: "Independent",
        type: "Client project",
      },
      myRole: [
        "Turned an existing payment-process description and document checklist into a workflow that runs inside the app.",
        "Designed a separate checklist for each of 4 file types and 4 processing statuses.",
        "Designed permissions by role (submitter, accountant, chief accountant, PM) and by project.",
        "Ran an internal pilot, iterated on feedback, and added undo, archiving, Excel reports and a security review.",
      ],
      approach: [
        {
          title: "Understand the current process",
          text: "Read the process document and the checklist for the 4 document sets, and map who does what at each step.",
        },
        {
          title: "Design the flow",
          text: "Settle the 4 statuses, the roles and the rules, such as accountants never approving their own files.",
        },
        {
          title: "Internal pilot",
          text: "Open it to a pre-selected group of users, then open Google sign-in.",
        },
        {
          title: "Refine",
          text: "Iterate on feedback: email notices, notes by severity, undo, archiving, Excel reports.",
        },
      ],
      scope: [
        { n: "4", l: "file types, each with its own checklist" },
        { n: "4", l: "processing statuses" },
        { n: "3", l: "note severity levels" },
        { n: "4", l: "roles with different permissions" },
      ],
      features: [
        {
          eyebrow: "01 / SUBMIT",
          title: "Submitting a file is easy",
          text:
            "The system supports 4 file types: Advance, Settlement, Expert payment and Supplier payment, each with its own document list. The submitter picks the right file type and follows the list provided.",
          bullets: ["4 common file types, each with its own checklist", "Attach the right project from the very first step"],
          alt: "Choosing the file type to submit",
        },
        {
          eyebrow: "02 / CHECKLIST",
          title: "A clear document checklist",
          text:
            "Required documents are listed according to SRD’s rules, so submitters can easily check a file before sending it. For each item they can tick it, attach a file or paste a link; if a document is not available, they simply state the reason so the accountant knows.",
          bullets: ["Attach files directly or paste a document link", "State a reason if an item is not yet available"],
          alt: "The document checklist for an advance request",
        },
        {
          eyebrow: "03 / TRACKING",
          title: "Transparent status tracking",
          text:
            "Each file has one of 4 statuses: Awaiting review, Under review, More documents needed, Ready for payment. Submitters can follow the status to see which step the file is at and whether more documents are needed.",
          bullets: ["Get an email when a file changes status", "Review the full processing history of every file"],
          alt: "The submitter’s file list with statuses",
        },
        {
          eyebrow: "04 / REVIEW",
          title: "For the reviewer",
          text:
            "Accountants can see the checklist, attached documents and the submitter’s notes on one screen. After reviewing, they can request more documents or confirm payment with a single action.",
          bullets: ["Exchange notes directly with the submitter", "Cannot approve a file they submitted themselves"],
          alt: "The accountant’s file processing screen",
        },
        {
          eyebrow: "05 / ARCHIVE",
          title: "Complete history and reports",
          text:
            "Completed files are kept in History and can still be viewed and printed in full when needed. The system also exports an Excel report of every file that is still missing documents in one click.",
          bullets: ["Know in advance when detailed data will be cleaned up", "Export the missing-items report to Excel"],
          alt: "File history and the missing-items report",
        },
      ],
      parts: {
        features: {
          label: "(PART 01)",
          title: "Features, step by step",
          intro: "From submission to payment approval, every step has its own clear screen.",
        },
        problems: {
          label: "(PART 02)",
          title: "Problems and how they are solved",
          intro: "Five bottlenecks in the old process and how the app handles each one.",
        },
        safety: {
          label: "(PART 03)",
          title: "Administration and safety",
          intro: "Permissions, security and retention.",
        },
      },
    },
    wyckoff: {
      chips: ["Training and revision", "Active learning", "Progress tracking"],
      intro:
        "Turns a 42-chapter specialist book into an active learning system. Instead of rereading, learners answer questions, get instant feedback, retry what they got wrong and keep a daily rhythm.",
      meta: {
        role: "Learning design · App development",
        timeline: "08/2026 — 10/2026",
        year: "2026",
        team: "Independent",
        type: "Personal product",
      },
      myRole: [
        "Wrote a specification before building: learning goals, must-have features and what was deliberately left out.",
        "Designed the question structure per chapter and three question types.",
        "Designed the habit mechanics: study streaks, a daily challenge, badges.",
        "Built the app, Google sign-in and a shared journal for the group.",
      ],
      approach: [
        {
          title: "Set the goal",
          text: "Learn to remember and apply, not to reread: the focus is active testing.",
        },
        {
          title: "Split the content",
          text: "42 chapters, each with its own question set.",
        },
        {
          title: "Instant feedback",
          text: "Grade right after each question with an explanation, then retry the ones missed.",
        },
        {
          title: "Keep motivation up",
          text: "Study streaks, a 5-question daily challenge, badges and cross-chapter revision sets.",
        },
      ],
      scope: [
        { n: "42", l: "chapters" },
        { n: "326", l: "questions" },
        { n: "3", l: "question types" },
        { n: "6", l: "achievement badges" },
      ],
      parts: {
        features: { label: "(PART 01)", title: "Features" },
        note: { label: "(NOTE)", title: "Why there is no public version" },
      },
    },
  },
  footer: { cv: "CAPABILITY PROFILE", privacy: "PRIVACY POLICY", rights: "All rights reserved." },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: [date]",
    back: "← Back to home",
    sections: [
      {
        h: "What I collect",
        p: "Only what you type into the contact form: your name, email, phone number (optional), reason for contact and message.",
      },
      {
        h: "How it is used",
        p: "To reply to your request. I do not sell this information or share it with third parties for advertising.",
      },
      {
        h: "How it is sent",
        p: "When you submit the form, the content is passed through an email delivery service to my inbox. This site uses no tracking cookies or analytics tools.",
      },
      {
        h: "Your rights",
        p: "You can ask me to delete or correct anything you have sent by emailing me.",
      },
    ],
  },
};
