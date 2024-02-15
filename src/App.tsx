import "./components/ui/Alert/Alert";
import Alert from "./components/ui/Alert/Alert";
import {
  BellRing,
  XCircle,
  BookPlus,
  CheckCheck,
  AlertCircle,
} from "lucide-react";

const App = () => {
  return (
    <div>
      <Alert
        type={"default-alert"}
        icon={<BellRing size={25}></BellRing>}
        title={"Your Future Plan"}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nemo
          ipsa minus deleniti possimus cum quis expedita, consequatur vitae
          pariatur atque saepe, <a>repellendus quisquam</a> cupiditate fugit ad
          harum? Id, explicabo!
        </p>
      </Alert>
      <Alert
        type={"note-alert"}
        icon={<AlertCircle size={25}></AlertCircle>}
        title={"Notes"}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nemo
          ipsa minus deleniti possimus cum quis expedita, consequatur vitae
          pariatur atque saepe, repellendus quisquam cupiditate fugit ad harum?
          Id, <a>explicabo!</a>
        </p>
      </Alert>
      <Alert
        type={"error-alert"}
        icon={<XCircle size={25}></XCircle>}
        title={"Something went wrong"}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nemo
          ipsa minus <a>deleniti possimus</a> cum quis expedita, consequatur
          vitae pariatur atque saepe, repellendus quisquam cupiditate fugit ad
          harum? Id, explicabo!
        </p>
      </Alert>
      <Alert
        type={"success-alert"}
        icon={<CheckCheck size={25}></CheckCheck>}
        title={"Successed Task"}
        desc={"success"}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          <a>Odit nemo</a>
          ipsa minus deleniti possimus cum quis expedita, consequatur vitae
          pariatur atque saepe, repellendus quisquam cupiditate fugit ad harum?
          Id, explicabo!
        </p>
      </Alert>
      <Alert
        type={"tips-alert"}
        icon={<BookPlus size={25}></BookPlus>}
        title={"Tips & Triks"}
        desc={"tips"}
      >
        <p>
          <a>Lorem</a>, ipsum dolor sit amet consectetur adipisicing elit. Odit
          nemo ipsa minus deleniti possimus cum quis expedita, consequatur vitae
          pariatur atque saepe, repellendus quisquam cupiditate fugit ad harum?
          Id, explicabo!
        </p>
      </Alert>
    </div>
  );
};

export default App;
