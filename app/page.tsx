import Image from "next/image"
import Link from "next/link"
import { SiHuggingface, SiX, SiGithub, SiLinkedin, SiMailboxdotorg } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Resume Button at Top */}
      <div className="flex justify-end mb-4">
        <a
          href="https://drive.google.com/file/d/1v1dZzLjYQ6tpQg-QA9N7AKg2ABqmbWFT/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2  text-black font-semibold rounded shadow"
        >
          View Resume
        </a>
      </div>
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-1">Hafedh Hichri</h1>

        {/* Profile Image */}
        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src="/hafedh.jpg?height=160&width=160"
            alt="Profile Photo"
            width={160}
            height={160}
            className="object-cover"
            priority
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-4">
          <Link href="https://x.com/not_so_lain" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiX size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://huggingface.co/not-lain" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiHuggingface size={20} />
            <span className="sr-only">HuggingFace</span>
          </Link>
          <Link href="https://github.com/not-lain" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/hafedh-hichri/" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:hhichri60@gmail.com" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiMailboxdotorg size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-12">
        <p className="mb-4">
          Hafedh Hichri, also known online as <Link href="https://github.com/not-lain" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">not-lain</Link>, is a machine learning engineer at <Link href="https://www.linkedin.com/company/mermory/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">mermory</Link> and a <Link href="https://huggingface.co/hugging-fellows" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Hugging Face Fellow</Link>.
          He develops custom AI models and integrates them with Hugging Face's platform, sharing his knowledge through blog posts on topics like training custom AI models and building RAG chatbots.
        </p>

        <p className="mb-4">
          Hafedh enjoys creating open-source software and is passionate about making complex research accessible. His interests include machine learning, natural language processing, and computer vision.
        </p>

        <p className="mb-4">
          He studied Computer Science at the <Link href="https://enetcom.rnu.tn/en" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">National School of Electronics and Telecommunications of Sfax (ENET'Com)</Link>, and has contributed to libraries major AI libraries in the field such as transformers, unsloth, autotiktokenizers, and multiple others.
        </p>

        <p className="mb-4">
          Hafedh's goal is to contribute to the advancement of open-source AI and make machine learning more accessible.
        </p>

        <hr className="my-8 border-gray-200" />
      </section>

      {/* Blog Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>

        <p className="mb-4">
          I write about machine learning, natural language processing, and open-source software mostly in{" "}
          <Link href="https://huggingface.co/not-lain/activity/articles" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            HuggingFace
          </Link>
          . Here are some of my recent blog posts:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            🔭{" "}
            <Link href="https://huggingface.co/blog/not-lain/kv-caching" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              KV Caching Explained: Optimizing Transformer Inference Efficiency
            </Link>{" "}
            A deep dive into the concept of KV caching in transformers, explaining its significance and providing practical examples.
          </li>
          <li>
            🔍{" "}
            <Link href="https://huggingface.co/blog/not-lain/tensor-dims" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Mastering Tensor Dimensions in Transformers
            </Link>{" "}
            A comprehensive guide to understanding tensor dimensions in transformers, with practical examples and tips for effective manipulation.
          </li>
          <li>
            🚀{" "}
            <Link href="https://huggingface.co/blog/not-lain/building-hf-integrated-libraries" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              PyTorchModelHubMixin: Bridging the Gap for Custom AI Models on Hugging Face
            </Link>{" "}
            A detailed exploration of the PyTorchModelHubMixin class, showcasing its role in integrating custom AI models with the Hugging Face ecosystem.
          </li>
          <li>
            🧠{" "}
            <Link href="https://huggingface.co/blog/not-lain/rag-chatbot-using-llama3" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              RAG using huggingface tools
            </Link>{" "}
            A step-by-step guide to building a Retrieval-Augmented Generation (RAG) chatbot using Hugging Face tools, with practical examples and code snippets.
          </li>
          <li>
            🚀{" "}
            <Link href="https://huggingface.co/blog/not-lain/image-retriever" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Image-based search engine
            </Link>{" "}
            A tutorial on creating an image-based search engine using Hugging Face tools, with practical examples and code snippets.
          </li>
        </ul>
      </section>

      {/* Open Source Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Open Source</h2>

        <p className="mb-4">
          Most of my work comes in this field the form of contributions to other libraries.
          A couple of notable libraries I contributed to are:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            <Link href="https://github.com/huggingface/transformers/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain%20" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              🤗 Transformers
            </Link>
          </li>
          <li>
            <Link href="https://github.com/unslothai/unsloth/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              🦥 Unsloth
            </Link>
          </li>
          <li>
            <Link href="https://github.com/gradio-app/gradio/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain%20" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gradio-color.png"
                alt="Gradio Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              /> Gradio
            </Link>
          </li>
          <li>
            <Link href="https://github.com/chonkie-inc/chonkie/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://avatars.githubusercontent.com/u/205278415?s=200&v=4"
                alt="Chonkie Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              /> Chonkie
            </Link>
          </li>
          <li>
            <Link href="https://github.com/huggingface/huggingface.js/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              🤗 HuggingFace.js
            </Link>
          </li>
          <li>
            <Link href="https://github.com/fal-ai/fal/issues?q=sort%3Aupdated-desc%20is%3Amerged%20is%3Apr%20author%3Anot-lain" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4-JD-JVK07Rd_Nnp4l1mQf_zkHJDVtVv_Ciz0N17cjEIvn_gj42ujbvx7zocG2L1nlI&usqp=CAU"
                alt="Fals Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              /> fal
            </Link>
          </li>
        </ul>
        <p className="mb-4">
          I also maintain a couple of libraries:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <Link href="https://github.com/not-lain/loadimg" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://github.com/not-lain/loadimg/raw/main/loadimg.png?raw=true"
                alt="Loadimg Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              /> Loadimg
            </Link>
          </li>
          <li>
            <Link href="https://github.com/not-lain/pxia" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://github.com/not-lain/pxia/raw/main/logo.png?raw=true"
                alt="Pxia Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              /> Pxia
            </Link>
          </li>
          <li>
            <Link href="https://github.com/chonkie-inc/chonkie" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://avatars.githubusercontent.com/u/205278415?s=200&v=4"
                alt="Chonkie Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              /> Chonkie [collaborator]
            </Link>
          </li>
        </ul>
        <p className="mb-4">
          I also contributed to integrating several models with Hugging Face using PyTorchModelHubMixin, including:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <Link href="https://huggingface.co/ZhengPeng7/BiRefNet" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://www.birefnet.top/Business/faiai.webp"
                alt="BiRefNet Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              BiRefNet
            </Link>
          </li>
          <li>
            <Link href="https://huggingface.co/PramaLLC/BEN2" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://avatars.githubusercontent.com/u/157913250?v=4"
                alt="Prama Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              BEN2
            </Link>
          </li>
          <li>
            <Link href="https://huggingface.co/PeiqingYang/MatAnyone" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://github.com/pq-yang/MatAnyone/raw/main/assets/matanyone_logo.png"
                alt="MatAnyone Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              MatAnyone
            </Link>
          </li>
          <li>
            <Link href="https://huggingface.co/skytnt/anime-seg" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn-avatars.huggingface.co/v1/production/uploads/1650375870480-noauth.png"
                alt="AnimeSeg Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              anime-seg
            </Link>
          </li>
          <li>
            <Link href="https://huggingface.co/Arabic-Clip/araclip" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn-avatars.huggingface.co/v1/production/uploads/61934cc71832e6ac3837d8b0/f2VVUYHkDkhLQvNxSE5ra.png"
                alt="AraClip Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              araclip
            </Link>
          </li>
          <li>
            <Link href="https://huggingface.co/briaai/RMBG-1.4" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn-avatars.huggingface.co/v1/production/uploads/65659985cfbe8a857070d950/1HTn-HmGDwK53SSJ5dEYt.png"
                alt="briaa Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              RMBG-1.4
            </Link>
          </li>
          <li>
            <Link href="https://huggingface.co/takara-ai/SwarmFormer-Sentiment-Base" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://cdn-avatars.huggingface.co/v1/production/uploads/6613f7ae43c4456e13ecbdcc/CkDvoJY5UnC7SGkln8PrX.jpeg"
                alt="Takara Logo"
                width={24}
                height={24}
                className="object-contain mr-2 inline-block"
                priority
              />
              SwarmFormer
            </Link>
          </li>

        </ul>

      </section>

      {/* Invited Talks Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Invited Talks and News</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            On <strong>April 27, 2025</strong>, I gave a talk at the{" "}
            <Link href="https://www.facebook.com/Genesis.Labs.INSAT/posts/pfbid02jgFpxEYXZEh8JXERJEcwwpPhGjuNTKh4yERdaP52yGdncfa1Uj5KpfUoKzixPAarl" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              Genesis Labs-INSAT
            </Link>{" "} about AI in Healthcare [
            <Link href="https://docs.google.com/presentation/d/19xWdNUaIgb3jlXOJRzY5Z7bpbk8HyckFpyfAsi4ceRU/edit?usp=sharing" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              slides
            </Link>
            ].
          </li>
        </ul>
      </section>


      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} - Hafedh Hichri</p>
      </footer>
    </div>
  )
}
