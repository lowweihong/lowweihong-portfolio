import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Projects & Achievements</h1>
        <div className="projects-grid">
        <div className="project">
                <img 
                    src={`${process.env.PUBLIC_URL}/NPC-demo.gif`} 
                    className="zoom" 
                    alt="NPC Dialogue Generation Demo" 
                    width="100%"
                />
                <h2>
                    <a href="https://github.com/lowweihong/lora-finetune-NPC" target="_blank" rel="noreferrer" className="project-link">
                        NPC Dialogue Generation with LoRA Fine-tuning
                    </a>
                </h2>
                <p>Fine-tuned Microsoft's Phi-3-mini-4k-instruct model using LoRA (Low-Rank Adaptation) to generate character-consistent NPC dialogue for games. The model generates contextual, in-character responses based on personality, biography, and emotional state.</p>
                <p><strong>Key Features:</strong> Trained on 1,723 examples from HuggingFace dataset, using 4-bit quantization for memory efficiency. Achieved improved character consistency through supervised fine-tuning with LoRA adapters (rank=16, alpha=16).</p>
                <p><strong>Technologies:</strong> LoRA, Phi-3, Transformers, PEFT, 4-bit Quantization, BERTScore, BLEU, ROUGE-L, PyTorch</p>
                <p className="project-links">
                    <a href="https://github.com/lowweihong/lora-finetune-NPC" target="_blank" rel="noreferrer" className="repo-link">
                        View Repository →
                    </a>
                </p>
            </div>
            
            <div className="project">
                <img 
                    src={`${process.env.PUBLIC_URL}/dagger_carracing.gif`} 
                    className="zoom project-video" 
                    alt="Car Racing Demo" 
                    width="100%"
                />
                <h2>
                    <a href="https://github.com/lowweihong/grp6-dagger" target="_blank" rel="noreferrer" className="project-link">
                        DAgger Paper Reimplementation: Imitation Learning Study
                    </a>
                </h2>
                <p>Comprehensive reimplementation and validation of the Dataset Aggregation (DAgger) algorithm for autonomous driving using CarRacing-v3. Implemented and compared four approaches: PPO Expert baseline, Behavioral Cloning (BC), DAgger, and SMILe (Stochastic Mixing Iterative Learning).</p>
                <p><strong>Key Results:</strong> Improved DAgger implementation achieved 98.4% of expert performance (625.16 vs 635.14 average reward), validating the core insights of the original paper. Demonstrated that iterative learning with expert corrections significantly outperforms traditional behavioral cloning.</p>
                <p><strong>Technologies:</strong> Reinforcement Learning, Imitation Learning, PyTorch, Stable-Baselines3, Gymnasium, TensorFlow</p>
                <p className="project-links">
                    <a href="https://github.com/lowweihong/grp6-dagger" target="_blank" rel="noreferrer" className="repo-link">
                        View Repository →
                    </a>
                </p>
            </div>

            <div className="project">
                <video 
                    src={`${process.env.PUBLIC_URL}/kgr.webm`} 
                    className="zoom project-video" 
                    // controls 
                    width="100%"
                    preload="metadata"
                >
                    Your browser does not support the video tag.
                </video>
                <h2>
                    <a href="https://github.com/KeXin95/HuggingfaceKG-retriever" target="_blank" rel="noreferrer" className="project-link">
                        Knowledge Graph Retriever with PCST <span className="in-progress">(In Progress)</span>
                    </a>
                </h2>
                <p>Graph-enhanced retrieval pipeline pairing PCST (Prize-Collecting Steiner Tree) with LLM prompting to reduce hallucinations in question answering. Implements semantic search on knowledge graphs using FAISS and PCST algorithm for optimal subgraph extraction.</p>
                <p><strong>Key Features:</strong> Modular design with semantic edge merging, batched GPU processing, web UI with FastAPI, and comprehensive configuration management. Uses graph structure to provide more accurate and contextually relevant answers compared to traditional RAG approaches.</p>
                <p><strong>Technologies:</strong> Knowledge Graphs, PCST Algorithm, FAISS, Semantic Search, PyTorch Geometric, Transformers, FastAPI, Sentence Transformers</p>
                <p className="project-links">
                    <a href="https://github.com/KeXin95/HuggingfaceKG-retriever" target="_blank" rel="noreferrer" className="repo-link">
                        View Repository →
                    </a>
                </p>
            </div>

            <div className="project">
                {/* <img src={mock01} className="zoom" alt="thumbnail" width="100%"/> */}
                <h2>LLM-based Verilog Code Automation</h2>
                <p>Developed LLM-based automation for Verilog code, streamlining issue resolution in repositories using SWE-bench-style techniques. Engineered Retrieval-Augmented Generation (RAG) workflows, optimizing Verilog task efficiency through advanced AI-driven solutions.</p>
                <p><strong>Technologies:</strong> LLM, RAG, Python, PyTorch</p>
            </div>

            
            
        </div>
    </div>
    );
}

export default Project;