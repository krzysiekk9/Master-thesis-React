import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Row from "./components/Row";
import Img from "./components/Images";

function App() {
  const [rowNum, setRowNum] = useState(0);
  const [imgNum, setImgNum] = useState(0);

  let arr = [];
  let arr2 = [1];
  //metody dotyczące tabel
  const create = (amount) => {
    setRowNum(amount);
  };
  const add = (amount) => {
    setRowNum(rowNum + amount);
  };
  const deleteTab = () => {
    setRowNum(0);
  };
  const createTable = (count) => {
    for (let i = 1; i <= count; i++) {
      arr[i] = i;
    }
  };
  //metody dotyczące zdjęć
  const createImg = (amount) => {
    setImgNum(amount);
  };
  const renderImg = (count) => {
    for (let i = 1; i < count; i++) {
      arr2[i] = i;
    }
  };
  const deleteImg = () => {
    setImgNum(1);
  };

  createTable(rowNum);
  renderImg(imgNum);

  return (
    <div className="App">
      <Header
        create={create}
        add={add}
        deleteTab={deleteTab}
        createImg={createImg}
        deleteImg={deleteImg}
      />
      <table className="table">
        <tbody>
          {arr.map((i) => {
            return <Row key={i} rowNum={i}></Row>;
          })}
        </tbody>
      </table>
      {arr2.map((i) => {
        return <Img key={i} imgNum={i} />;
      })}
    </div>
  );
}

export default App;
