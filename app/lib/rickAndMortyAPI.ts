// lib/getCharacters.ts
import { Character } from "./types"; // o movelo arriba en el mismo archivo

export async function getCharacters(): Promise<Character[]> {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  if (!res.ok) throw new Error("Error al cargar los personajes");
  const data = await res.json();
  console.log(data)
  return data.results as Character[];
  
}