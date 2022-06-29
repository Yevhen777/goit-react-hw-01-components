export const TransactionHistory = ({ items }) => (
    <>
  <table class="transaction-history">
    <thead>
    <tbody>
      {items.map((item) => (
        <Transaction
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          
        ></Transaction>
      ))}
      </thead>
    </tbody>
  </table>
  </>
);





const Transaction = ({ id, type, amount, currency }) => (
  
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  

  
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
                
);


