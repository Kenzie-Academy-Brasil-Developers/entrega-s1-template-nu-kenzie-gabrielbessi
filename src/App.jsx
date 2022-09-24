import { useState } from "react";
import PageLogin from "./components/PageLogin";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Buttons from "./components/Buttons";
import TotalPrice from "./components/TotalPrice";

import "./App.css";

const App = () => {
  const [transaction, setTransaction] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function addListTransaction(newTransaction) {
    setTransaction([...transaction, newTransaction]);
    setFilteredList([...transaction, newTransaction]);
  }

  function deleteTransaction(deletar) {
    const filterDelete = transaction.filter((element) => element !== deletar);

    setTransaction(filterDelete);
    setFilteredList(filterDelete);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <PageLogin setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <section className="section-position">
            <div>
              <Form addListTransaction={addListTransaction} />
              <TotalPrice transaction={transaction} />
            </div>
            <div className="section-buttonList">
              <Buttons
                setTransaction={setTransaction}
                filteredList={filteredList}
              />
              <List
                transaction={transaction}
                deleteTransaction={deleteTransaction}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default App;
