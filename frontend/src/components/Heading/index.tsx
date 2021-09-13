import styles from './styles.module.scss';

type HeadingProps = {
  children?: string;
  target?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'lx' | 'mx' | 'sx' | 'ls' | 'ms' | 'ss';
  color?: boolean;
  uppercase?: boolean;
};

export const Heading:React.FC<HeadingProps> = ({
  children,
  color = false,
  target = 'h1',
  size = `${styles.font_lx}`,
  uppercase = true,
}) => {
  
  const isColor = color ? color : 'color_black-500';
  const isUppercase = uppercase ? `${styles.isUppercase}` : 'none';
  const renderHeading = () => {
  
    switch(target) {
      case "h1":  return (
        <h1 id={styles.HeadingContainer} className={`${isColor} ${size} ${target} ${isUppercase}`}>
          {children}
        </h1>
      );
      case "h2":  return (
        <h2 id={styles.HeadingContainer} className={`${isColor} ${target} ${size && styles.font_mx} ${isUppercase}`}>
          {children}
        </h2>
      );
      case "h3":  return (
        <h3 id={styles.HeadingContainer} className={`${isColor} ${target} ${size && styles.font_sx} ${isUppercase}`}>
          {children}
        </h3>
      );
      case "h4":  return (
        <h4 id={styles.HeadingContainer} className={`${isColor} ${target} ${size && styles.font_ls} ${isUppercase}`}>
          {children}
        </h4>
      );
      case "h5":  return (
        <h5 id={styles.HeadingContainer} className={`${isColor} ${target} ${size && styles.font_ms} ${isUppercase}`}>
          {children}
        </h5>
      );
      case "h6":  return (
        <h6 id={styles.HeadingContainer} className={`${color} ${target} ${size && styles.font_ss} ${isUppercase}`}>
          {children}
        </h6>
      );
      default: return <h1>header example</h1>
    }
  }

  return (
    <div>{ renderHeading() }</div>
  )
    
};
