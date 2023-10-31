export class Directory{
  constructor(directory){
    this.name = "";
    this.type = "";

    this.sort_directory(directory);
  }

  sort_directory(directory){
      if(directory){
        if(directory.includes(".")){
          this.name = directory;
          this.type = "File";
        }else{
          this.name = directory;
          this.type = "Directory";
        }
      }
  }
}
