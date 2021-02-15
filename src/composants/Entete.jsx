export default function Entete({utilisateur}) {
  const img = 'https://avatarfiles.alphacoders.com/470/thumb-47010.jpg'
  return (
    <header>
      <nav>Signets</nav>
      <nav>
        <span>{utilisateur}</span>
        <img src={img} />
      </nav>
    </header>
  );
}