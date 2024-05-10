export interface Absence {
    nomModule: string;
    date: Date;
    etudiantsAbsents: string[]; // Assuming the etudiantsAbsents contains IDs of students
  }
  