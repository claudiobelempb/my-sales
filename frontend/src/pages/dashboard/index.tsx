import { LayoutDashboard } from "../../components/LayoutDashboard";

import { Aside } from '../../components/Aside';
import { Header} from '../../components/Header';
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Brand } from "../../components/Brand";

export default function Dashboard(){
  return (
    <>
      <LayoutDashboard>
        <Brand/>
        <Header/>
        <Aside>
          <h1>Aside</h1>
        </Aside>
        <Main>
          <h1>Main</h1>
        </Main>
        <Footer/>
      </LayoutDashboard>
    </>
  );
}
