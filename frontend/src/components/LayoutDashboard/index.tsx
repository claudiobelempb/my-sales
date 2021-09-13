import React from 'react';
import { Aside } from '../Aside';
import { Brand } from '../Brand';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';
import { Nav } from '../Nav';
import { mock } from '../Nav/mock';
import styles from './styles.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
}

const LayoutDashboard: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div id={styles.layout}>
      <Brand/>
        <Header/>
        <Aside>
        <Nav links={mock} />
        </Aside>
        <Main>
          <h1>{title}</h1>
          {children}  
        </Main>
        <Footer/>
    </div>
  );
}

export { LayoutDashboard }