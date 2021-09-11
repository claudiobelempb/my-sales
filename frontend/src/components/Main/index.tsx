import styles from './styles.module.scss';

type MainProps = {
  children: React.ReactNode;
}
const Main: React.FC<MainProps> = ({children}) => {
  return (
    <main id={styles.main_container} className={`container`}>
      <div className={`content`}>
        {children}
      </div>
    </main>
  );
}

export { Main }