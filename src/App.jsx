import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopted-me"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "luna",
      breed: "cake",
    }),
    React.createElement(Pet, {
      animal: "cat",
      name: "musa",
      breed: "kola",
    }),
    React.createElement(Pet, {
      animal: "munni",
      name: "tanz",
      breed: "pasta",
    }),
  ]);
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(React.createElement(App));
