import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { IconContext } from 'react-icons';

function SocialLinks() {
  return (
    <IconContext.Provider value={{ size: '1.8rem', className: 'text-gray-600 hover:text-blue-600 transition' }}>
      <div className="flex justify-center md:justify-start gap-4">
        <a 
          href="https://www.linkedin.com/in/rafael-joar-parungao-330a202b9/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://profile.indeed.com/p/rafaelp-yky264f" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Indeed"
        >
          <SiIndeed />
        </a>

        <a 
          href="https://github.com/rjdparungao" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </IconContext.Provider>
  );
}

export default SocialLinks;
