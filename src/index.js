import reactDom from "react-dom";

//component import
import PersonComponent from "./components/Person";


const PersonList = () => {
  return(
    <section>
      <PersonComponent />
    </section>
  )
}

reactDom.render(
  <PersonList />,
  document.getElementById("root")
)