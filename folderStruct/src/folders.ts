export type Folder = {
  name: string;
  files: Folder[];
};

// export type Folders = Folder[] | undefined;

export const initialFolders: Folder[] = [
  {
    name: "node_modules",
    files: [
      {
        name: "package-lock",
        files: [],
      },
    ],
  },
  {
    name: "SRC",
    files: [
      {
        name: "assets",
        files: [
          {
            name: "logo.png",
            files: [],
          },
        ],
      },
    ],
  },
  {
    name: "public",
    files: [
      {
        name: "index.html",
        files: [],
      },
    ],
  },
  {
    name: ".gitignore",
    files: [],
  },
];
