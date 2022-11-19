import Button from "@mui/material/Button";
import TextField from "@mui/material/Input";
import { useState, useEffect } from "react";

export default function App(props) {
  const [colors, setColors] = useState(["red", "blue", "purple"]);
  const [text, setText] = useState();

  const changeText = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = (event) => {
    let newArray = [...colors, text];
    setColors(newArray);
  };

  useEffect(() => {
    window.location.replace(`http://localhost:3000/#tags=${colors}`);
  }, [colors]);

  const deleteItem = (index) => {
    let newArray = colors.filter((item, i) => {
      return i !== index;
    });
    setColors(newArray);
  };

  return (
    <div className="menu">
      <div>
        <h1>Colors</h1>
        {colors.map((item, index) => (
          <ul>
            <li onClick={() => deleteItem(index)} key={index}>
              {item}
            </li>
          </ul>
        ))}
      </div>
      <div className="menu_add_new_item">
        <div>
          <TextField
            value={text}
            onChange={changeText}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <Button onClick={handleOnClick} variant="contained">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
