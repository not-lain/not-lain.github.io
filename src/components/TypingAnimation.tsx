"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return <TypeAnimation sequence={["Machine Learning Engineer 💻", 1000, "HuggingFace Fellow 🤗", 1000, "Open Source Contributor 📖", 1000]} wrapper="span" speed={50} className="font-bold lg:text-3xl text-blue-500" repeat={Infinity} />;
};

export default TypingAnimation;
