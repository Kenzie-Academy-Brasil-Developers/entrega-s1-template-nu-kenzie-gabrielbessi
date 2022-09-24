import "./style.css";

import ListComponent from "../ListComponent";

const List = ({ transaction, deleteTransaction }) => {
  return (
    <div className="divUl">
      <ul>
        {transaction.map((element, index) => (
          <ListComponent
            deleteTransaction={deleteTransaction}
            element={element}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
