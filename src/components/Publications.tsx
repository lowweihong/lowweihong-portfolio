import React from "react";
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Publications.scss';

function Publications() {
    return(
    <div className="publications-container" id="publications">
        <h1>Research & Publications</h1>
        <div className="publications-grid">
            <div className="publication">
                {/* <img src={mock10} className="zoom" alt="thumbnail" width="100%"/> */}
                <h2>
                    <a href="https://arxiv.org/abs/2511.06456" target="_blank" rel="noreferrer" className="publication-link">
                        EIDSeg: Post-Earthquake Damage Assessment
                    </a>
                </h2>
                <p className="publication-authors">H. Huang, <strong>W. Low</strong>, D. Zhang, et al. (2025)</p>
                <p>Research publication accepted to the AAAI Conference on Artificial Intelligence (AAAI 2026), Artificial Intelligence for Social Impact Track.</p>
                <p className="publication-description">"EIDSeg: A Pixel-Level Semantic Segmentation Dataset for Post-Earthquake Damage Assessment from Social Media Images"</p>
                <p><strong>Technologies:</strong> Computer Vision, Semantic Segmentation, Deep Learning, PyTorch</p>
                <p className="publication-links">
                    <a href="https://arxiv.org/abs/2511.06456" target="_blank" rel="noreferrer" className="paper-link">
                        View Paper →
                    </a>
                </p>
            </div>
        </div>
    </div>
    );
}

export default Publications;

