// Single source of truth for the portfolio content.
// Rendered by the lain page (app/page.tsx), the classic page (app/hafedh/page.tsx) and the terminal.

export type Segment = { text: string; href?: string }

export type SocialIcon = "x" | "huggingface" | "github" | "linkedin" | "email"

export type Social = { label: string; href: string; icon: SocialIcon }

export type Blog = {
  emoji: string
  title: string
  href: string
  description: string
}

export type Project = {
  name: string
  href: string
  description: string
  emoji?: string
  logo?: string
  badge?: string
  note?: string
}

export type ProjectGroup = {
  id: string
  title: string
  intro: string
  projects: Project[]
}

export type Talk = {
  date: string
  before: string
  event: { label: string; href: string }
  after: string
  slides?: string
}

export const profile = {
  name: "Hafedh Hichri",
  handle: "not-lain",
  photo: "/hafedh.jpg",
  avatar: "https://avatars.githubusercontent.com/u/70411813",
  // Y2K, used as the "wired since" counter on the lain page (/)
  wiredSince: "2000-01-01T00:00:00Z",
  resume:
    "https://docs.google.com/document/d/1tSznOs_vf2fHMkbjzVHHb7J_uYICrN_8pBIuDjmFTx0/edit?usp=sharing",
  socials: [
    { label: "Twitter", href: "https://x.com/not_so_lain", icon: "x" },
    { label: "HuggingFace", href: "https://huggingface.co/not-lain", icon: "huggingface" },
    { label: "GitHub", href: "https://github.com/not-lain", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hafedh-hichri/", icon: "linkedin" },
    { label: "Email", href: "mailto:lain.hichri@gmail.com", icon: "email" },
  ] satisfies Social[],
}

export const intro: Segment[][] = [
  [
    { text: "My name is Hafedh Hichri, I also go by " },
    { text: "not-lain", href: "https://github.com/not-lain" },
    { text: " in the wired, I'm a Software Engineer at " },
    { text: "Feyn", href: "https://usefeyn.com/" },
    { text: " (previously called Chonkie) and a " },
    { text: "Hugging Face Fellow", href: "https://huggingface.co/hugging-fellows" },
    { text: "." },
  ],
  [
    {
      text: "I'm passionate about making AI accessible through open-source contributions to libraries like transformers, unsloth, peft, .... I studied Computer Science at the ",
    },
    {
      text: "National School of Electronics and Telecommunications of Sfax (ENET'Com)",
      href: "https://enetcom.rnu.tn/en",
    },
    { text: "." },
  ],
]

export const blogsIntro: Segment[] = [
  {
    text: "I write about machine learning, natural language processing, and open-source software mostly in ",
  },
  { text: "HuggingFace", href: "https://huggingface.co/not-lain/activity/articles" },
  { text: ". Here are some of my recent blog posts:" },
]

export const blogs: Blog[] = [
  {
    emoji: "👁️",
    title: "Visualizing How VLMs Work",
    href: "https://huggingface.co/blog/not-lain/vlms",
    description:
      "A deep dive into how VLMs aggregate and process data across modalities, co-authored with Ed Daniels.",
  },
  {
    emoji: "🔭",
    title: "KV Caching Explained: Optimizing Transformer Inference Efficiency",
    href: "https://huggingface.co/blog/not-lain/kv-caching",
    description:
      "A deep dive into the concept of KV caching in transformers, explaining its significance and providing practical examples.",
  },
  {
    emoji: "🔍",
    title: "Mastering Tensor Dimensions in Transformers",
    href: "https://huggingface.co/blog/not-lain/tensor-dims",
    description:
      "A comprehensive guide to understanding tensor dimensions in transformers, with practical examples and tips for effective manipulation.",
  },
  {
    emoji: "🚀",
    title: "PyTorchModelHubMixin: Bridging the Gap for Custom AI Models on Hugging Face",
    href: "https://huggingface.co/blog/not-lain/building-hf-integrated-libraries",
    description:
      "A detailed exploration of the PyTorchModelHubMixin class, showcasing its role in integrating custom AI models with the Hugging Face ecosystem.",
  },
  {
    emoji: "🧠",
    title: "RAG using huggingface tools",
    href: "https://huggingface.co/blog/not-lain/rag-chatbot-using-llama3",
    description:
      "A step-by-step guide to building a Retrieval-Augmented Generation (RAG) chatbot using Hugging Face tools, with practical examples and code snippets.",
  },
  {
    emoji: "🚀",
    title: "Image-based search engine",
    href: "https://huggingface.co/blog/not-lain/image-retriever",
    description:
      "A tutorial on creating an image-based search engine using Hugging Face tools, with practical examples and code snippets.",
  },
]

export const projectGroups: ProjectGroup[] = [
  {
    id: "contributions",
    title: "open source",
    intro:
      "Most of my work comes in this field the form of contributions to other libraries. A couple of notable libraries I contributed to are:",
    projects: [
      {
        name: "Transformers",
        emoji: "🤗",
        href: "https://github.com/huggingface/transformers/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain%20",
        description: "State-of-the-art AI library by Hugging Face.",
      },
      {
        name: "Unsloth",
        emoji: "🦥",
        href: "https://github.com/unslothai/unsloth/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain",
        description: "Efficient fine-tuning for LLMs.",
      },
      {
        name: "PEFT",
        emoji: "🤗",
        href: "https://github.com/huggingface/peft/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain",
        description:
          "Parameter-Efficient Fine-Tuning methods for large models by Hugging Face.",
      },
      {
        name: "Gradio",
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gradio-color.png",
        href: "https://github.com/gradio-app/gradio/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain%20",
        description: "Python Library for building machine learning web-applications.",
      },
      {
        name: "Chonkie",
        logo: "https://avatars.githubusercontent.com/u/205278415?s=200&v=4",
        href: "https://github.com/chonkie-inc/chonkie/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain",
        description: "AI library for efficient data chunking and building RAG pipelines.",
        badge: "maintainer",
        note: "Currently working at this company and serving as their maintainer.",
      },
      {
        name: "HuggingFace.js",
        emoji: "🤗",
        href: "https://github.com/huggingface/huggingface.js/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain",
        description:
          "JavaScript client for Hugging Face APIs. I contributed to API features and bug fixes.",
      },
      {
        name: "fal",
        logo: "/logos/fal.png",
        href: "https://github.com/fal-ai/fal/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain",
        description: "SDK Client for FAL",
      },
      {
        name: "Argilla",
        logo: "https://avatars.githubusercontent.com/u/18415507?s=200&v=4",
        href: "https://github.com/argilla-io/argilla/pulls?q=is%3Amerged+is%3Apr+author%3Anot-lain",
        description:
          "Collaboration tool for AI engineers and domain experts to build high-quality datasets.",
      },
    ],
  },
  {
    id: "maintained",
    title: "maintained",
    intro: "I also maintain a couple of libraries:",
    projects: [
      {
        name: "Loadimg",
        logo: "https://github.com/not-lain/loadimg/raw/main/loadimg.png?raw=true",
        href: "https://github.com/not-lain/loadimg",
        description:
          "A fast, lightweight image loader for web apps. I am the creator and maintainer.",
      },
      {
        name: "Pxia",
        logo: "https://github.com/not-lain/pxia/raw/main/logo.png?raw=true",
        href: "https://github.com/not-lain/pxia",
        description:
          "A pixel manipulation library for creative coding. I am the creator and maintainer.",
      },
    ],
  },
  {
    id: "feyn",
    title: "models @ feyn",
    intro: "I also created these models at my company, Feyn:",
    projects: [
      {
        name: "FeyNoBg",
        logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/6067760d5a275b0e26010e6b/onWKgqCJEj5cc9sZ4h9IK.png",
        href: "https://usefeyn.com/blog/feynobg",
        description:
          "State-of-the-art background removal model that predicts per-pixel alpha mattes.",
      },
      {
        name: "MultiMatte",
        logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/6067760d5a275b0e26010e6b/onWKgqCJEj5cc9sZ4h9IK.png",
        href: "https://usefeyn.com/blog/multimatte",
        description:
          "Text-guided background removal built on SAM 3: name the object to keep and it removes everything else.",
      },
    ],
  },
  {
    id: "integrations",
    title: "integrations",
    intro:
      "I also contributed to integrating several models with Hugging Face using PyTorchModelHubMixin, including:",
    projects: [
      {
        name: "BiRefNet",
        logo: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*bNskDbetalj7HBPWuML13A.png",
        href: "https://huggingface.co/ZhengPeng7/BiRefNet",
        description:
          "SOTA Background Removal model for camouflaged image segmentation (chameleon, etc.).",
      },
      {
        name: "BEN2",
        logo: "https://avatars.githubusercontent.com/u/157913250?v=4",
        href: "https://huggingface.co/PramaLLC/BEN2",
        description:
          "SOTA Background Removal model for detailed image segmentation (hair strands, etc.).",
      },
      {
        name: "MatAnyone",
        logo: "https://github.com/pq-yang/MatAnyone/raw/main/assets/matanyone_logo.png",
        href: "https://huggingface.co/PeiqingYang/MatAnyone",
        description:
          "Video propagation model for consistent object segmentation across frames.",
      },
      {
        name: "MatAnyone2",
        logo: "https://github.com/pq-yang/MatAnyone2/blob/main/assets/matanyone2_logo.png?raw=true",
        href: "https://huggingface.co/PeiqingYang/MatAnyone2",
        description:
          "Video propagation model for consistent object segmentation across frames.",
      },
      {
        name: "anime-seg",
        logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/1650375870480-noauth.png",
        href: "https://huggingface.co/skytnt/anime-seg",
        description: "Anime image segmentation model.",
      },
      {
        name: "araclip",
        logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/61934cc71832e6ac3837d8b0/f2VVUYHkDkhLQvNxSE5ra.png",
        href: "https://huggingface.co/Arabic-Clip/araclip",
        description: "Arabic CLIP model for image-text tasks.",
      },
      {
        name: "RMBG-1.4",
        logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/65659985cfbe8a857070d950/1HTn-HmGDwK53SSJ5dEYt.png",
        href: "https://huggingface.co/briaai/RMBG-1.4",
        description: "Background removal model.",
      },
      {
        name: "SwarmFormer",
        logo: "https://cdn-avatars.huggingface.co/v1/production/uploads/6613f7ae43c4456e13ecbdcc/CkDvoJY5UnC7SGkln8PrX.jpeg",
        href: "https://huggingface.co/takara-ai/SwarmFormer-Sentiment-Base",
        description:
          "Transformer variant using hierarchical local-global attention reducing cost with strong accuracy.",
      },
    ],
  },
]

export type NowItem = {
  category: string
  items: string[]
}

export const now: NowItem[] = [
  {
    category: "currently",
    items: [
      "Working as a Software Engineer at Feyn (a company formerly known as Chonkie)",
      "Serving as maintainer for Chonkie, an AI library for efficient data chunking and RAG pipelines",
      "Developing and maintaining background removal models (FeyNoBg, MultiMatte)",
    ],
  },
  {
    category: "learning",
    items: [
      "Multi-modal AI and the intersection of vision and language models",
      "Improving RAG systems for better retrieval quality and efficiency",
      "Creative coding and interactive visualizations",
    ],
  },
  {
    category: "exploring",
    items: [
      "Smaller, more efficient model architectures",
      "Tools for AI engineers that make building and experimenting easier",
      "The future of open-source in the AI era",
    ],
  },
  {
    category: "thinking about",
    items: [
      "Writing more technical blog posts and tutorials",
      "Building better developer experiences for AI tools",
      "The role of community-driven research in advancing the field",
    ],
  },
]

export const talks: Talk[] = [
  {
    date: "September 26, 2026",
    before: "I was a judge at",
    event: { label: "IndabaX Tunisia", href: "https://www.instagram.com/p/DdtRI2miJfG/?img_index=2" },
    after: "and gave a talk about best practices in finetuning",
    slides:
      "https://docs.google.com/presentation/d/10JV4uC8sfd6anTh9Vff1h4EHVf-CgNIrgzVvpWrc54g/edit?usp=sharing",
  },
  {
    date: "February 19, 2026",
    before: "I shared my knowledge about",
    event: {
      label: "Chonkie and Qdrant integration",
      href: "https://www.linkedin.com/posts/qdrant_qdrant-vectorsearch-officehours-activity-7429120120742092800-HAE8/",
    },
    after: "in discord",
    slides: "https://not-lain.github.io/slides/",
  },
  {
    date: "February 11, 2026",
    before: "I was invited to",
    event: { label: "Data & Beyond", href: "https://www.facebook.com/photo?fbid=1548907313904823" },
    after: "to talk about RAG and different approaches in the field",
    slides:
      "https://docs.google.com/presentation/d/1k3J7X0b9YcYiSGJVk0jogTPLlJKEIFazXvF_CLiCQJc/edit?usp=sharing",
  },
  {
    date: "January 18, 2026",
    before: "I gave a keynote at",
    event: { label: "Vectors in Orbit", href: "https://www.facebook.com/photo?fbid=860170536643056" },
    after: "about Chonkie",
  },
  {
    date: "October 16, 2025",
    before: "I gave a speech at",
    event: {
      label: "PyData",
      href: "https://www.meetup.com/pydata-milton-keynes/events/311025969/?eventOrigin=group_upcoming_events",
    },
    after: "about AI agents",
    slides:
      "https://docs.google.com/presentation/d/1CPcJgpyd5A3eh2ZIq9zecsBH2D1DshOxK1uEHt-Bg-U/edit?usp=sharing",
  },
  {
    date: "October 9th, 2025",
    before: "I gave a talk at the",
    event: {
      label: "Hugging Face server",
      href: "https://www.linkedin.com/posts/ed-daniels-339a811a3_computer-vision-hangout-were-back-activity-7381287630178795520-2FOM",
    },
    after: "about Building how VLMs work",
    slides:
      "https://docs.google.com/presentation/d/1h7x4EoX5h15DWKItsycqH-rJ6c020bEGzlhlKz8EAWU/edit?usp=sharing",
  },
  {
    date: "June 13 to 15 2025",
    before: "I was one of the judges at",
    event: {
      label: "Artificial Intelligence National Summit V3",
      href: "https://www.linkedin.com/posts/artificial-intelligence-national-summit_ains2025-ai-rag-activity-7338626090820694016--kys?utm_source=share&utm_medium=member_desktop&rcm=ACoAADHJ074BHxxPkGGXTCvene-FdU4B_MJqkMo",
    },
    after: "and I gave a talk about Chonkie",
    slides:
      "https://docs.google.com/presentation/d/1JplGOs5nSOgI672BwNUM7xdhPVis9FQBKgkiHyrKzIA/edit?usp=sharing",
  },
  {
    date: "April 27, 2025",
    before: "I gave a talk at the",
    event: {
      label: "Genesis Labs-INSAT",
      href: "https://www.facebook.com/Genesis.Labs.INSAT/posts/pfbid02jgFpxEYXZEh8JXERJEcwwpPhGjuNTKh4yERdaP52yGdncfa1Uj5KpfUoKzixPAarl",
    },
    after: "about AI in Healthcare",
    slides:
      "https://docs.google.com/presentation/d/19xWdNUaIgb3jlXOJRzY5Z7bpbk8HyckFpyfAsi4ceRU/edit?usp=sharing",
  },
]

// 88x31 buttons, shown on / and /buttons
export type Badge = { name: string; href: string; src: string }

export const SITE = "https://not-lain.github.io"

export const myBadge: Badge = { name: "not-lain", href: `${SITE}/`, src: "/buttons/not-lain.svg" }

export const badges: Badge[] = [
  { name: "minhash", href: "https://minha.sh", src: "/buttons/minhash.gif" },
  { name: "vmfunc", href: "https://vmfunc.re/", src: "/buttons/vmfunc.png" },
  { name: "CSS is awesome", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", src: "/buttons/css.png" },
  { name: "got html?", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", src: "/buttons/html.gif" },
  { name: "powered by python", href: "https://www.python.org", src: "/buttons/python.svg" },
]

export const badgeSnippet = `<a href="${myBadge.href}"><img src="${SITE}${myBadge.src}" width="88" height="31" alt="${myBadge.name}"></a>`
