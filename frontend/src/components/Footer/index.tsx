import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer id={styles.footer_container} className={`container`}>
      <div className={`content`}>
        <h1>Footer</h1>
      </div>
    </footer>
  );
}

export { Footer };