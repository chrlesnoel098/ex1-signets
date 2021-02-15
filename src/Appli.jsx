import "./Appli.scss";
import Entete from "./composants/Entete";
import BoutonAjoutSignets from "./composants/BoutonAjoutSignets";
import ListeSignets from "./composants/ListeSignets";

export default function Appli() {

  const utilisateurConnecte = "Camille Semaan";

  return (
    <div className="Appli">
      <Entete utilisateur={utilisateurConnecte} />

      <ListeSignets />

      <BoutonAjoutSignets />
    </div>
  );
}