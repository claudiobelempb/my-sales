import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <header id={styles.header_container} className={`container`}>
      <div className={`content`}>
        <h1>Header</h1>
      </div>
    </header>
  );
}

export { Header };