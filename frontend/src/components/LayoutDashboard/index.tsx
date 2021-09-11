import styles from './styles.module.scss';

type LayoutProps = {
  children: React.ReactNode;
}

const LayoutDashboard: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id={styles.layout}>
      {children}
    </div>
  );
}

export { LayoutDashboard }