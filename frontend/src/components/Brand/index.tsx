import styles from './styles.module.scss';

const Brand: React.FC = () => {
  return (
    <div id={styles.brand_container} className={`container`}>
      <div className={`content`}>
        <h1>Minhas Vendas</h1>
      </div>
    </div>
  );
}

export { Brand };