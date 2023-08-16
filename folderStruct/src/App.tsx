import { useState } from "react";
import { initialFolders } from "./folders";
import DisplayFolders from "./displayFolders";
import "./App.css";

function App() {
  const [folders] = useState(initialFolders);
  return (
    <div>
      {folders?.map((folder, index) => (
        <div key={`${folder.name}${index}`}>
          <div style={{ fontWeight: "bolder" }}>
          
            {folder.files.length > 0 ? "> " + folder.name : folder.name}
          </div>

          <DisplayFolders folders={folder.files} />
        </div>
      ))}
    </div>
  );
}

export default App;
