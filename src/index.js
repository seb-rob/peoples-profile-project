import reactDom from "react-dom";

const Greet = () => {
  return <h1>Hello People</h1>
}

reactDom.render(
  <Greet />,
  document.getElementById("root")
)