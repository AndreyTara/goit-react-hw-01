import css from "./TransactionHistory.module.css";
import Transaction from "./../Transaction/Transaction";

function TransactionHistory({ transactions }) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {transactions.map((transaction) => {
            const { id } = transaction;
            return (
              <tr className={css.tr} key={id}>
                <Transaction transaction={transaction} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionHistory;
