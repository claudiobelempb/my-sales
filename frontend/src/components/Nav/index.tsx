import styles from './styles.module.scss';
import { NavItem } from '../NavItem';

type LinkProps = {
  title: string;
  href: string;
  target: boolean;
}

type NavProps = {
  links: LinkProps[]
}

export const Nav:React.FC<NavProps> = ({ links }) => {
  return (
    <nav id={styles.NavContainer}>
      {links.map((link, index) => {
        return <NavItem key={index} {...link} />;
      })}
    </nav>
  )
}