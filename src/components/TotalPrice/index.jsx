import "./style.css";

const TotalPrice = ({ transaction }) => {
  const sumPrice = transaction
    .reduce((acumulator, previousNumber) => {
      return (
        acumulator +
        (previousNumber.type === "Entrada"
          ? parseInt(previousNumber.value)
          : parseInt(previousNumber.value) * -1)
      );
    }, 0)
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  return (
    <section className="totalPrice">
      <div className="totalPrice-position">
        <div className="totalPrice-value">
          <p className="totalPrice-value__text">Valor total:</p>
          <span className="span-totalPrice">{sumPrice}</span>
        </div>
        <span className="totalPrice-text">O valor se refere ao saldo</span>
      </div>
    </section>
  );
};

export default TotalPrice;
