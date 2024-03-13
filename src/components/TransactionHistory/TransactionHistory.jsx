import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tableHeadTR}>
          <th className={css.tableTH}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={css.tableTR} key={item.id}>
              <td className={css.tableTD}>{item.type}</td>
              <td className={css.tableTD}>{item.amount}</td>
              <td className={css.tableTD}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
