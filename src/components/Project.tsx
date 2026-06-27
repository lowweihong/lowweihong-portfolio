import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Key Projects & Achievements</h1>
        <div className="projects-grid">
            <div className="project">
                <img
                    src={`${process.env.PUBLIC_URL}/cosmos.gif`}
                    className="zoom"
                    alt="Cosmos Data Gap Analyzer Demo"
                    width="100%"
                />
                <h2>
                    <a href="https://github.com/lowweihong/cosmos-data-analyzer" target="_blank" rel="noreferrer" className="project-link">
                        Cosmos Data Gap Analyzer
                    </a>
                </h2>
                <p>An agentic pipeline that turns a plain-English failure hypothesis into a validated, targeted training dataset for NVIDIA Cosmos. It derives evaluation criteria, generates diverse scenarios, and curates frames using a VLM judge. The hard part is the diversity-versus-relevance tradeoff, handled at two layers: a cosine-similarity filter at planning rejects near-identical scenarios, and a DSPy metric-driven guardrail at retry checks that rewritten prompts stay on-hypothesis before a retry is allowed.</p>
                <p><strong>Technologies:</strong> FLUX.1-dev (NVIDIA NIM), Claude Sonnet (VLM judge), DSPy, SQLite + FTS5, Weights &amp; Biases</p>
                <p className="project-links">
                    <a href="https://github.com/lowweihong/cosmos-data-analyzer" target="_blank" rel="noreferrer" className="repo-link">
                        View Repository →
                    </a>
                </p>
            </div>

            <div className="project">
                <img
                    src={`${process.env.PUBLIC_URL}/glossarion-demo.gif`}
                    className="zoom"
                    alt="Glossarion PDF to Knowledge-Graph Explorer Demo"
                    width="100%"
                />
                <h2>
                    <a href="https://glossariograph.xyz" target="_blank" rel="noreferrer" className="project-link">
                        Glossarion — PDF to Knowledge-Graph Explorer
                    </a>
                </h2>
                <p>A live Graph RAG product that turns uploaded PDFs into an interactive, explorable knowledge graph. The backend streams LLM-extracted entities and relationships to the client over SSE and renders them as a force-directed graph you can navigate in real time. Designed, built, and deployed end to end.</p>
                <p><strong>Technologies:</strong> Next.js, Claude Sonnet, Server-Sent Events (SSE), Supabase, react-force-graph-2d</p>
                <p className="project-links">
                    <a href="https://glossariograph.xyz" target="_blank" rel="noreferrer" className="repo-link">
                        Live Demo →
                    </a>
                    {" · "}
                    <a href="https://github.com/lowweihong/glossarion" target="_blank" rel="noreferrer" className="repo-link">
                        View Repository →
                    </a>
                </p>
            </div>

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
                <img 
                    src={`${process.env.PUBLIC_URL}/kgr.gif`} 
                    className="zoom" 
                    alt="Knowledge Graph Retriever Demo" 
                    width="100%"
                />
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
                <h2>LLM-based Verilog Code Automation</h2>
                <p>Developed LLM-based automation for Verilog code, streamlining issue resolution in repositories using SWE-bench-style techniques. Engineered Retrieval-Augmented Generation (RAG) workflows, optimizing Verilog task efficiency through advanced AI-driven solutions.</p>
                <p><strong>Technologies:</strong> LLM, RAG, Python, PyTorch</p>
            </div>

            
            
        </div>
    </div>
    );
}

export default Project;