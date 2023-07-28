import DialogBox from "./components/DialogBox";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentProvider from "./context/ContentProvider";
import "./scss/index.scss";

export default function App() {
  return (
    <ContentProvider>
      <div className="app-container">
        <Sidebar />
        <div className="app-container-content-container">
          <DialogBox/>
          <Navbar />
          <Main />
        </div>
      </div>
    </ContentProvider>
  );
}
