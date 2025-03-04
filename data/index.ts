export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Research", link: "#research" },
  { name: "Certifications", link: "#certification"},
  { name: "Contact", link: "#contact" },
];

export const myTechStack = [
  "Python",
  "C/C++",
  "SQL",
  "MATLAB",
  "HTML/CSS",
  "PyTorch",
  "TensorFlow/Keras",
  "OpenCV",
  "NLTK",
  "Scikit-Learn",
  "LangChain",
  "RAG",
  "Flask",
  "FastAPI",
  "Git/GitHub",
  "MySQL",
  "HuggingFace",
  "Kaggle",
  "AWS",
  "Docker",
  "Kubernetes",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Generative AI",
  "Model Optimization",
  "RAG Evaluation",
  "Model Interpretability",
  "Data Augmentation"
];

export const projects = [
  {
    id: 1,
    title: "Optimizing RAG Performance and Evaluation",
    description: `
      • Developed a RAG-based question-answer bot for insurance policy documents, improving response accuracy and retrieval efficiency.  
      • Enhanced accuracy by 14% using semantic chunking, re-ranking, and Mistral LLM for better context understanding.
    `,
    github: "https://github.com/itskp21",
    techStack: ["LangChain", "Mistral", "RAG", "Semantic Chunking"]
  },
  {
    id: 2,
    title: "ColorGANify",
    description: `
      • Created an AI-powered tool to colorize black-and-white images with up to 85% accuracy, enhancing visual appeal and utility.  
      • Reimplemented the Pix2Pix algorithm for colorization and utilized ESRGAN for enhancing image resolution by up to 4x.
    `,
    github: "https://github.com/itskp21/ColorGANify",
    techStack: ["PyTorch", "GANs", "ESRGAN", "OpenCV"]
  },
  {
    id: 3,
    title: "TuneWeaver.AI",
    description: `
      • Developed a melody generation system using an LSTM model, processing over 300+ symbolic music files from the Essen Folksong Collection.  
      • Trained a 256-unit LSTM model over 25 epochs with an optimized batch size of 64 and a learning rate of 0.001, enhancing training efficiency by 20%.
    `,
    github: "https://github.com/itskp21/TuneWeaver.AI",
    techStack: ["TensorFlow/Keras", "Music21", "MIDI"]
  }
];

export const researchProjects = [
  {
    id: 1,
    title: "Pruning of Transformers (ViT) on CIFAR100 Through Network Slimming",
    description: `
      • Engineered a Vision Transformer (ViT) model for CIFAR-100 classification, achieving 82% accuracy after fine-tuning the pruned network with the AdamW optimizer.  
      • Implemented L1 regularization (λ = 1×10⁻⁴), promoting sparsity and resulting in a 15% reduction in parameters.
    `,
    github: "https://github.com/itskp21",
    techStack: ["PyTorch", "ViT", "Network Slimming", "L1 Regularization"]
  }
];

export const certifications = [
  {
    name: "Deep Learning Specialization",
    provider: "Coursera",
    link: "https://coursera.org/cert/deeplearning",
  },
  {
    name: "Machine Learning by Andrew Ng",
    provider: "Coursera",
    link: "https://coursera.org/cert/machinelearning",
  },
  {
    name: "Computer Vision with PyTorch",
    provider: "Udacity",
    link: "https://example.com/cert/computervision",
  }
];


export const socialMedia = [
  {
    id: 1,
    img: "assets/git.svg",
    link: "https://github.com/itskp21",
  },
  {
    id: 2,
    img: "assets/linkedin.svg",
    link: "https://www.linkedin.com/in/kush-prakhar/",
  }
];

export const skills = [
  "Python", "C++", "PyTorch", "TensorFlow", "NLP", "Machine Learning", "Generative AI"
];
