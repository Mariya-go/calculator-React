import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Screen from "./components/Screen";
import { evaluate, string } from "mathjs";
import "./App.css";

const App = () => {
  let [text, setText] = useState("");

  const buttonHandler = (textBtn) => {
    if (textBtn !== "=") {
      setText((previousText) => previousText + "" + textBtn);
    } else {
      setText(evaluate(text));
    }
  };

  const buttonsText = [
    [1, 2, 3, "/"],
    [4, 5, 6, "*"],
    [7, 8, 9, "+"],
    [0, ".", "=", "-"],
  ];

  return (
    <Card>
      <Screen value={text} />
      <div className="btn-container">
        {buttonsText.map((row, index) => (
          <div key={index} className="row">
            {row.map((btn) => (
              <Button
                key={btn}
                text={btn}
                style="btn"
                buttonHandler={() => buttonHandler(btn)}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default App;
