import { Container } from './styles';
import Store from "../../stores/stores"
import { observer } from "mobx-react-lite"
import { useContext, useEffect } from 'react';
import { api } from '../../services/api';



function TransactionsTable() {
  const store = useContext(Store)
  
  const {transactions, getTransactions} = store

  useEffect(() => {
    api.get('/transactions').then(response => getTransactions(response.data)).catch(error => console.log(error))
  },[getTransactions])  
 
  

  return (
    <Container >
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          {transactions.map(transaction => (
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}</td>
            </tr>
          ))}
        
          
        </tbody>
      </table>
    </Container>
  );
};

export default observer(TransactionsTable);
