import reactDom from "react-dom";

//Resource import
import {peoplesData} from "./peoplesData";

//component import
import PersonComponent from "./components/Person";


const PersonList = () => {
  return(
    <section>
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