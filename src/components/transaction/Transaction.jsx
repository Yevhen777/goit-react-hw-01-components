import style from './Transaction.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={style.table}>
    <Thead />
    <tbody className={style.tbody}>
      {items.map((prop, index) => (
        <Transaction
          key={prop.id}
          type={prop.type}
          amount={prop.amount}
          currency={prop.currency}
          index={index}
        ></Transaction>
      ))}
    </tbody>
  </table>
);

const Thead = () => (
  <tr className="tr">
    <th className={style.th}>Type</th>
    <th className={style.th}>Amount</th>
    <th className={style.th}>Currency</th>
  </tr>
);

const Transaction = ({ id, type, amount, currency }) => (
  <tr className={style.tr}>
    <td className={style.td}>{type}</td>
    <td className={style.td}>{amount}</td>
    <td className={style.td}>{currency}</td>
  </tr>
);
