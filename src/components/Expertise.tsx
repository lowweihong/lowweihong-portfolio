import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Using faNetworkWired (or faGlobe) for Web3/Data section if faChartLine isn't available
import { faBrain, faServer, faLayerGroup, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Group 1: The "Target" (GenAI & NLP)
const labelsGenAI = [
    "Large Language Model (LLM)",
    "Vision Language Model (VLM)",
    "Retrieval-augmented generation (RAG)",
    "Transformers",
    "Natural Language Processing (NLP)",
    "Text Generation",
    "Dialogue Systems"
];

// Group 2: The "Foundation" (Core ML & Math)
const labelsCoreML = [
    "Deep Learning",
    "Reinforcement Learning (RL)",
    "PyTorch",
    "TensorFlow",
    "Supervised Learning",
    "Unsupervised Learning",
    "Data Visualization (Tableau/Plotly)"
];

// Group 3: The "Scale" (Cloud & Big Data)
const labelsInfra = [
    "AWS",
    "Docker",
    "Airflow",
    "Kafka",
    "Spark",
    "Hive",
    "Hadoop"
];

// Group 4: The "Builder" (Web3, Dev & Data Acquisition)
const labelsDev = [
    "Python",
    "C++",
    "SQL",
    "Solidity",
    "Web3 & Smart Contracts",
    "Web Scraping (Scrapy/Playwright)",
    "Rapid Prototyping"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Key Skills</h1>
            <div className="skills-grid">
                
                {/* 1. Generative AI Focus */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Generative AI & NLP</h3>
                    <p>
                        Specializing in the end-to-end development of cutting-edge AI. 
                        Expertise in VLM and LLM architectures, RAG pipelines for 
                        context-aware agents, and advanced dialogue systems.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">GenAI Stack:</span>
                        {labelsGenAI.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 2. Deep Learning & Analytics */}
                <div className="skill">
                    <FontAwesomeIcon icon={faLayerGroup} size="3x"/>
                    <h3>Deep Learning & Analytics</h3>
                    <p>
                        Strong foundation in advanced machine learning paradigms. 
                        From building Reinforcement Learning agents to training complex 
                        Deep Learning models using PyTorch and TensorFlow.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Core ML:</span>
                        {labelsCoreML.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 3. Cloud & Big Data */}
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Cloud & Data Engineering</h3>
                    <p>
                        Expert in deploying scalable AI solutions on AWS. 
                        Proficient in managing big data pipelines with Spark and Kafka, 
                        and containerizing production workflows using Docker.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Infrastructure:</span>
                        {labelsInfra.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* 4. Web3 & Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>Web3 & Data Strategy</h3>
                    <p>
                        Bridging full-stack development with domain expertise. 
                        Experienced in writing Solidity Smart Contracts for Web3, 
                        and engineering high-speed data scrapers for market intelligence.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Dev & Web3:</span>
                        {labelsDev.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;