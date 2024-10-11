import styles from "./calculator.module.css";
import { useState, React } from "react";

const calculator = () => {
  const [numero, setNumero] = useState(0);
  const [OldNum, setOldNum] = useState(0);
  const [operacao, setOperacao] = useState();

  const InputNum = (e) => {
    var num = e.target.value;

    if (numero === 0) {
      setNumero(num);
    } else {
      setNumero(numero + num);
    }
  };

  const clear = () => {
    setNumero(0);
  };

  const porcentagem = () => {
    setNumero(numero / 100);
  };

  const calcular = () => {
    switch (operacao) {
      case "+":
        setNumero(parseFloat(OldNum) + parseFloat(numero));
        break;
      case "-":
        setNumero(parseFloat(OldNum) - parseFloat(numero));
        break;
      case "*":
        setNumero(parseFloat(OldNum) * parseFloat(numero));
        break;
      case "/":
        setNumero(parseFloat(OldNum) / parseFloat(numero));
        break;
    }
  };

  const deleteNum = () => {
    const newNum = numero.toString().slice(0, -1);
    setNumero(newNum === "" ? 0 : newNum);
  };

  const operacao1 = (e) => {
    var op = e.target.value;
    setOperacao(op);
    setOldNum(numero);
    setNumero(0);
  };

  return (
    <div>
      <h1 className={styles.titulo}>Calculadora</h1>
      <div className={styles.calculadora}>
        <div className={styles.tela}>
          <span>{numero}</span>
        </div>
        <div className={styles.entradas}>
          <div className={styles.entrada}>
            <button onClick={clear}>AC</button>
            <button onClick={deleteNum}>CE</button>
            <button onClick={porcentagem}>%</button>
            <button onClick={operacao1} value={"/"}>
              /
            </button>
          </div>
          <div className={styles.entrada}>
            <button onClick={InputNum} value={7}>
              7
            </button>
            <button onClick={InputNum} value={8}>
              8
            </button>
            <button onClick={InputNum} value={9}>
              9
            </button>
            <button onClick={operacao1} value={"+"}>
              +
            </button>
          </div>
          <div className={styles.entrada}>
            <button onClick={InputNum} value={4}>
              4
            </button>
            <button onClick={InputNum} value={5}>
              5
            </button>
            <button onClick={InputNum} value={6}>
              6
            </button>
            <button onClick={operacao1} value={"-"}>
              -
            </button>
          </div>
          <div className={styles.entrada}>
            <button onClick={InputNum} value={1}>
              1
            </button>
            <button onClick={InputNum} value={2}>
              2
            </button>
            <button onClick={InputNum} value={3}>
              3
            </button>
            <button onClick={operacao1} value={"*"}>
              *
            </button>
          </div>
          <div className={styles.entrada}>
            <button onClick={InputNum} value={0}>
              0
            </button>
            <button onClick={InputNum} value={"."}>
              .
            </button>
            <button style={{ visibility: "hidden" }}></button>
            <button onClick={calcular}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default calculator;
