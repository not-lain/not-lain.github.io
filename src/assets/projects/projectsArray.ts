import { ImageRAG, mixin, nobg, rag } from "./index";
export const projectArray = [
    {
        name: "Image Based Search Engine",
        description: "A search engine that uses image similarity to find similar images in a dataset. It uses a pre-trained CLIP model to encode images and then uses Faiss to search for similar images in the dataset.",
        image: ImageRAG,
        type: "open source",
        hostedLink: "https://huggingface.co/blog/not-lain/image-retriever#demo",
        githubLink: "https://huggingface.co/spaces/not-lain/image-retriever",
    },
    {
        name: "PyTorchModelHubMixin",
        description: "PyTorchModelHubMixin is a Python package that provides a set of mixins for PyTorch models to make them compatible with the Hugging Face Model Hub. It allows users to easily upload their PyTorch models to the Model Hub and use them with the Hugging Face ecosystem.",
        image: mixin,
        type: "open source",
        hostedLink: "https://huggingface.co/blog/not-lain/building-hf-integrated-libraries",
        githubLink: "https://github.com/not-lain/pxia",
    },
    {
        name: "RAG using HF tools",
        description: "A blogpost about how to use RAG (Retrieval Augmented Generation) chatbot using LLAMA3 model.",
        image: rag,
        type: "open source",
        hostedLink: "https://huggingface.co/blog/not-lain/rag-chatbot-using-llama3",
        githubLink: "https://huggingface.co/spaces/not-lain/RAG-Chatbot",
    },
    {
        name: "Background Remover",
        description: "Helped with open sourcing BiRefNet and RMBG1.4 models for background removal. The models are available on the HuggingFace.",
        image: nobg,
        type: "open source",
        hostedLink: "https://huggingface.co/ZhengPeng7/BiRefNet",
        githubLink: "https://huggingface.co/spaces/not-lain/background-removal",
    },
];
