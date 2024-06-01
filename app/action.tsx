'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=6`
  );

  const data = await response.json();

  console.log(data);

  return data.data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item._id} anime={item} index={index} />
  ));
};
/*
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
*/
