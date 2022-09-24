import { useState } from "react";
import "./styles.css";

const Form = ({ addListTransaction }) => {
  const [form, setForm] = useState({});

  function handleForm(event) {
    event.preventDefault();
    addListTransaction(form);
  }

  return (
    <form className="form" onSubmit={handleForm}>
      <div className="form-description">
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          required
          className="form-input__description"
          onChange={(event) =>
            setForm({ ...form, description: event.target.value })
          }
        />
        <span className="span-padraoForm">Ex. Compra de roupas</span>
      </div>
      <div className="form-valueType">
        <div>
          <label>Valor</label>
          <input
            type="number"
            placeholder="1"
            required
            className="form-input__value"
            onChange={(event) =>
              setForm({ ...form, value: event.target.value })
            }
          />
        </div>

        <div>
          <label>Tipo de valor</label>
          <select
            name="valor"
            id="valor"
            required
            className="form-select__type"
            onChange={(event) => setForm({ ...form, type: event.target.value })}
          >
            <option value="">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" className="button-form">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
