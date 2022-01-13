import reactDom from "react-dom";

//CSS
import "./index.css"

//Resource import
import {peoplesData} from "./peoplesData";

//component import
import PersonComponent from "./components/Person";


const PersonList = () => {
  return(
    <section className="personList-section">
      {peoplesData.map(people => {
        return(
          <PersonComponent key={people.id} {...people} ></PersonComponent>
        )
      })}
    </section>
  )
}

reactDom.render(
  <PersonList />,
  document.getElementById("root")
)