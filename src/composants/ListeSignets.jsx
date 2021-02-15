import UnSignet from "./UnSignet";
import ListeSignetsData from "../data/ListeSignetsData.json";

export default function ListeSignets() {
  return (
    <main>
      {ListeSignetsData.map((signet) => (
        <UnSignet
          key={signet.id}
          id={signet.id}
          titre={signet.titre}
          couleur={signet.couleur}
          date={signet.date}
          image={signet.image}
        />
      ))}
    </main>
  );
}