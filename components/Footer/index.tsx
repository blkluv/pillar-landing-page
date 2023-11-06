import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles['footer-section']}>
      <div className={styles['footer-section-content']}>
        <img src="/logo-white.png" alt="Pillar Markets Logo footer" width={120} height={60} />
        <p>Blockchain Infrastructure Powering Private Real Estate</p>
        <a href="mailto:info@arvrtise.com">info@arvrtise.com</a>
        <div className={styles['button-container']}>
          <a
            href="https://www.linkedin.com/groups/14347080/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['icon']}>
            <LinkedInIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
          </a>
          <a
            href="https://x.com/cre_club"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['icon']}>
            <TwitterIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
          </a>
        </div>
      </div>
      <div className={styles['footer-section-disclaimer']}>
        <p>
          Past performance in no guarantee of future results. Any historical returns, expected returns, or
          probability projections may not reflect actual future performance and are provided by the sponsor of
          the investment opportunity and subject to change. All securities involve risk and may result in
          partial or total loss.
        </p>
      </div>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} Arvrtise</p>
        <Link href="/sponsor">Sponsors</Link>
        <Link href="/career">Careers</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy-and-cookies">Privacy and Cookies</Link>
        <Link href="/confidentiality-agreement">Confidentiality Agreement</Link>
      </footer>
    </section>
  );
};

export default Footer;
