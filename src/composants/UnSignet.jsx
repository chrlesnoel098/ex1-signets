export default function UnSignet({ id, titre, couleur, date, image }) {
  return (
    <article style={{ backgroundColor: couleur }}>
      <span>
      </span>
      <img src={image} />
      <div >
        <h2>{titre}</h2>
        <span>
          Modifié : <time>{date}</time>
        </span>
      </div>
    </article>
  );
}