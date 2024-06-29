import css from "./TransactionHistory.module.css";

function Transaction({ prop }) {
  const { id, type, amount, currency } = prop;
  return (
    <tr className={css.tr} key={id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}

function TransactionHistory({ props }) {
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
          {props.map((prop) => {
            return (
              <>
                <Transaction prop={prop} />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TransactionHistory;
