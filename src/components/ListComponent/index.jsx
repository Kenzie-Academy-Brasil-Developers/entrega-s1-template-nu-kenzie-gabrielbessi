import { FaTrash } from "react-icons/fa";
import "./style.css";

const ListComponent = ({ deleteTransaction, element }) => {
  if (element.type === "Entrada") {
    return (
      <li className="liEntrada">
        <div className="liEntrada-descriptionType">
          <p>{element.description}</p>
          <span>{element.type}</span>
        </div>
        <div className="liEntrada-valueButton">
          <span>R$ {element.value}</span>
          <button onClick={() => deleteTransaction(element)}>
            <FaTrash />
          </button>
        </div>
      </li>
    );
  }
  return (
    <li className="liSaida">
      <div className="liSaida-descriptionType">
        <p>{element.description}</p>
        <span>{element.type}</span>
      </div>
      <div className="liSaida-valueButton">
        <span>R$ {element.value}</span>
        <button onClick={() => deleteTransaction(element)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default ListComponent;
