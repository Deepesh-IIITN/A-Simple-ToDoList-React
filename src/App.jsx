import React, { useState } from "react";
import TodoELe from "./TodoEle";
import "./styles.css";
import AddItem from "./AddItem";
const App = () => {
  const [arr, setElement] = useState([]);

  function add(event) {
    event.preventDefault();
    const temp = document.getElementsByName("work")[0].value;
    setElement([...arr, temp]);
    event.target.reset();
  }
  function deleteItem(id) {
    setElement((preValue) => {
      return preValue.filter((x, i) => {
        return i !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card" style={{ width: "23rem" }}>
            <div className="card-body">
              <h5 className="card-title">To-Do List</h5>
              <hr />
              <div>
                <AddItem add={add} />
                <hr />
                <div>
                  {arr.length > 0 && (
                    <p style={{ color: "red" }}>
                      To delete a list click on it.
                    </p>
                  )}
                  <ul>
                    {arr.map((x, y) => {
                      return (
                        <TodoELe key={y} id={y} li={x} func={deleteItem} />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
