import { Absence } from "./absence";
import { Emploi } from "./emploi";
import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";
import { Formation } from "./formation";
interface Document {
  fileName: string;
  description?: string;
}
export interface Module {
    _id: string; // Identifiant MongoDB généré automatiquement
    nomModule: string;
    etudiants: Etudiant[]; // Tableau d'identifiants d'objets Étudiant
    enseignant: Enseignant; // Define the type as Enseignant
    formations: Formation; // Define the type as Formation
    emploi: Emploi;
    documents: Document[];
    absences: Absence[];
  }
  