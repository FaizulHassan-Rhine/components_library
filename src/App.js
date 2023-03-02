import { DatePicker } from "antd";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold  underline">Hello world!</h1>
      <DatePicker />;
      <h3>
        {" "}
        Lets go for a <FaBeer />?{" "}
      </h3>
    </div>
  );
}

export default App;
