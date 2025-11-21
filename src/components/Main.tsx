import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import '../assets/styles/Main.scss';

// Array of profile images - add your image filenames here
const profileImages = [
  'profile.JPEG',
  'profile2.JPG',  // Add more images: profile2.JPEG, profile3.JPEG, etc.
  'profile3.jpg',
  // Add more image filenames as needed
];

function Main() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    if (profileImages.length <= 1) return; // Don't rotate if only one image

    const interval = setInterval(() => {
      setFadeClass('fade-out');
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % profileImages.length
        );
        setFadeClass('fade-in');
        
        setTimeout(() => {
          setFadeClass('');
        }, 300);
      }, 300);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = profileImages[currentImageIndex] || profileImages[0];

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img 
            src={`${process.env.PUBLIC_URL}/${currentImage}`} 
            alt="Low Wei Hong" 
            className={`${fadeClass} ${currentImageIndex === 0 ? 'round-image' : 'rect-image'}`}
            onError={(e) => {
              // Fallback to first image if current image doesn't exist
              if (currentImageIndex !== 0) {
                e.currentTarget.src = `${process.env.PUBLIC_URL}/${profileImages[0]}`;
              }
            }}
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/lowweihong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lowweihong" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:lowweihong14@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Low Wei Hong</h1>
          <p>Senior Data Scientist & AI Engineer</p>
          <p className="contact-info">404.247.2157 • Atlanta, GA • Open to Relocation</p>
          
          <div className="resume-download">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Low_Wei_Hong_Resume.pdf"
              className="resume-button"
            >
              Download Resume
            </Button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/lowweihong" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lowweihong" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:lowweihong14@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;