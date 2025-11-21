import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="career-journey">
      <div className="items-container">
        <h1>Career Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="03/2025 - 05/2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">EIC Lab Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Georgia Institute of Technology - Atlanta, GA, USA</h4>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Developed LLM-based automation for Verilog code, streamlining issue resolution in repositories using SWE-bench-style techniques for enhanced code quality.</li>
              <li>Engineered Retrieval-Augmented Generation (RAG) workflows, optimizing Verilog task efficiency through advanced AI-driven solutions.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11/2022 - 08/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">OKX - Singapore</h4>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Engineered a KYC passport validation tool by deploying Optical Character Recognition (OCR) to extract data and sophisticated text-matching logic to verify consistency across both sides of the document, resulting in 99% matching accuracy.</li>
              <li>Engineered and deployed an internal generative AI chatbot using Faiss (Vector DB), automating responses for P2P merchants and reducing manual support workload by 35%.</li>
              <li>Owned the core address matching component for a user-wide risk monitoring system, using embedding matching method to achieve 95% accuracy in identifying potentially linked accounts.</li>
              <li>Fine-tuned and deployed more than 13 translation models, cutting vendor translation costs by 35%.</li>
              <li>Optimized translation model inference speed by 1.5x using CTranslate for GPU-based deployment.</li>
              <li>Built and deployed a news intelligence distribution system, achieving more than 95% accuracy in matching news to internal teams.</li>
              <li>Designed and deployed a centralized web crawling system using Docker, enabling 40+ concurrent crawlers across multiple markets with zero downtime for 10+ users.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="06/2019 - 06/2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior NLP Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Shopee - Singapore</h4>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Trained spam detection models, achieving 98%+ precision across 6 markets in production.</li>
              <li>Developed a classification system for Indonesian marketplace listings, categorizing 3,000+ categories with 80%+ accuracy.</li>
              <li>Extracted product keywords via text mining, securing 40%+ acceptance by internal reviewers.</li>
              <li>Built SPU classification models for laptops and maintained over 97% accuracy across regions.</li>
              <li>Deployed and maintained 7 daily ML pipelines using Airflow for production monitoring and updates.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2018 - 05/2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tech Lead, Local Business Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">Shopee - Singapore</h4>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Trained machine learning models for product classification, achieving 97% accuracy and reducing human annotation by 60%.</li>
              <li>Single-handedly led the LPG initiative end-to-end—from web crawling to data pipelines and database management—improving system efficiency and reducing LPG claim rates by 50%.</li>
              <li>Automated sending report process from uploading file to google drive, sending email and updating google sheet.</li>
              <li>Mentored two interns, converting one to a full-time role through targeted skill development.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="12/2017 - 05/2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern (Part-Time)</h3>
            <h4 className="vertical-timeline-element-subtitle">Shanghai Linksure Network Technology Co. Ltd – Singapore</h4>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Queried over 1 billion big data in Hive to analyse users' distribution within a time frame.</li>
              <li>Created a json parser to give insight about the housing market in a specific region in China using Python.</li>
              <li>Applied machine learning method to cluster factories into regions for top 10 cities in China.</li>
              <li>Built a multi-threaded Python web crawler, collecting millions of POI's (Point of Interest) and hundreds of thousands of AOI's (Area of Interest) efficiently.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2017 - 07/2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Dentsu Aegis Network, Global Data Innovation Centre – Singapore</h4>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
              <li>Proposed and implemented a streamlined Python automation process to convert ontologies from XMind to OWL format, shortening the workflow from hours to minutes.</li>
              <li>Built a Python script to automate Google Trends calculations and comparisons for multiple companies, aiding competitive analysis.</li>
              <li>Designed marketing ontologies using XMind for visualization and Protégé for classes/relationships, boosting campaign knowledge representation.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;