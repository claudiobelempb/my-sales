import styles from './styles.module.scss';

type AsideProps = {
  children: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
  return (
    <aside id={styles.aside_container} className={`container`}>
      <div className={`content`}>
        <h1>
          {children}
        </h1>
      </div>
    </aside>
  );
}

export { Aside };