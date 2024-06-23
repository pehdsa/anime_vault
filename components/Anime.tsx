"use client";

import React, { useState, useEffect } from 'react';
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";

import { fetchAnime } from '@/app/action';
// import { data } from "./_data";

const Anime = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<AnimeProp[]>([]);

    useEffect(() => {
        getAnime();
    },[page]);

    const handleLoadMore = () => {
        if (data.length === 0) return;
        setPage(prev => prev + 1);
    }

    const getAnime = async () => {
        const fetchedData = await fetchAnime(page);
        setData([ ...data, ...fetchedData ]);
    }

    return (
        <>
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {data.map((item: AnimeProp, index) => (
                    <AnimeCard key={item.id} anime={item} index={index} />
                ))}
            </section>
            <LoadMore onReach={ handleLoadMore } />
        </>
    )
}

export default Anime