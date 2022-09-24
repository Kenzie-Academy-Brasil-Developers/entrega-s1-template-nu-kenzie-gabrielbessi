import "./style.css";

const Buttons = ({ setTransaction, filteredList }) => {
  function filterEntrada() {
    const entradaFilter = filteredList.filter(({ type }) => type === "Entrada");

    setTransaction(entradaFilter);
  }

  function filterDespesas() {
    const saidaFilter = filteredList.filter(({ type }) => type === "Saída");

    setTransaction(saidaFilter);
  }

  function filterTodos() {
    setTransaction(filteredList);
  }

  return (
    <section className="filter">
      <div>
        <p className="filter-text">Resumo Financeiro</p>
      </div>

      <div className="filter-buttons">
        <button onClick={filterTodos} className="filter-buttons__todos">
          Todos
        </button>
        <button onClick={filterEntrada} className="buttonAll">
          Entradas
        </button>
        <button onClick={filterDespesas} className="buttonAll">
          Despesas
        </button>
      </div>
    </section>
  );
};

export default Buttons;
