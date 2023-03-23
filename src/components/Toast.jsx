import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
    </div>
  );
}
