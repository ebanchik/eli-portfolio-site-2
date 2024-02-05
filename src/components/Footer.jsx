import linkedinLogo from '../assets/logos/linkedin_logo.svg';
import githubLogo from '../assets/logos/github_logo.svg';
import instaLogo from '../assets/logos/insta_logo.svg';
export function Footer() {
  return (
    <footer>
      <div className="footer">
        {/* Add your footer content here */}
        <p className="foot-text">&copy; 2024 Eli Banchik</p>
      </div>
      <div className="social-icon-footer">
              <a href="https://www.linkedin.com/in/elibanchik/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="LinkedIn Logo" /></a>
              <a href="https://github.com/ebanchik" rel="noopener noreferrer"><img src={githubLogo} alt="Description for image 2" /></a>
              <a href="https://www.instagram.com/elibanchik/" rel="noopener noreferrer"><img src={instaLogo} alt="Description for image 3" /></a>
            </div>
    </footer>
  );
}
