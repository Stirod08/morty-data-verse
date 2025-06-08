// components/CharacterCard.tsx
type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
};

export function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="bg-dark p-4 rounded-xl text-center">
      <img src={character.image} alt={character.name} className="w-full rounded-lg" />
      <h2 className="text-cyber text-lg mt-2">{character.name}</h2>
      <p className="text-sm text-portal">{character.status}</p>
    </div>
  );
}
