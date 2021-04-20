import logoImg from '../../assets/logo.svg'
import { Container, Content} from './styles';

interface HeaderProps {
  onIsNewTransactionModal: () => void;
}


function Header({onIsNewTransactionModal}: HeaderProps) {


  return (
    <Container>
      <Content>

        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onIsNewTransactionModal}>Nova transação</button>

      
      </Content>

    </Container>
  );
};

export default Header;
