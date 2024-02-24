import ModuleList from "../Modules/List";
import MyButtonsComponent from "./buttons";
import StatusButtons from "./status";
import "./index.css"

function Home() {
  return (
    <div className="d-flex">
        <div className="width70Percent">
            <MyButtonsComponent/>
            <ModuleList />
        </div>
        <div className="width30Percent p-4">
            <StatusButtons/>
        </div>
    </div>
  );
}
export default Home;
