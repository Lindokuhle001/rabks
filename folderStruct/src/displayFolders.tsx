import { Folder } from "./folders";
interface DisplayFoldersProps {
  folders: Folder[];
}

function DisplayFolders({ folders }: DisplayFoldersProps) {

  return (
    <div>
      {folders.map((folder, index) => (
        <div style={{paddingLeft:'1rem'}} key={`${folder.name}${index}`}>
          {folder.files.length > 0  ? '> ' + folder.name : folder.name}
          <DisplayFolders folders={folder.files} />
        </div>
      ))}
    </div>
  );
}

export default DisplayFolders;


