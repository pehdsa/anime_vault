"use server";

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number): Promise<AnimeProp[]> => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${ page }&limit=10`);
    const data = await response.json();

    return data;
};