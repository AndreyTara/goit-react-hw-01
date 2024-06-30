import css from "./Transaction.module.css";

function Transaction({ transaction }) {
  const { type, amount, currency } = transaction;
  return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
  );
}
export default Transaction;
