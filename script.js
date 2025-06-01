const style = document.createElement('style');
style.textContent = `
    * {
    background: #fff !important;
    color: #000 !important;
    border-color: #000 !important;
    box-shadow: none !important;
  }


.resume .resume_left .resume_profile img {
  display: none;
}

.resume .resume_left .resume_profile::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1; 
  background-image: url('https://raw.githubusercontent.com/jsn01000111/My-portfolio/refs/heads/main/profile.png');
  background-size: cover;
  background-position: center;
  border: 1px solid #000;
}


  .icon,
  .resume_hobby ul li {
    background: #fff !important;
    border: 1px solid #000 !important;
    color: #000 !important;
  }


  .skill_progress span {
    background: #000 !important;
  }

  a {
    color: #000 !important;
    text-decoration: underline !important;
  }

  img {
    border: 1px !important;
  }

element.style {
    outline: 0 !important;
}

.resume .resume_right .resume_work ul li:before, .resume .resume_right .resume_education ul li:before 
{
    border: 2px solid #000 !important;
}

.resume .resume_right .resume_work ul li:after, .resume .resume_right .resume_education ul li:after
 {
    background: #000 !important;
 }

`;
document.head.appendChild(style);
