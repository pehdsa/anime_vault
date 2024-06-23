import { useState, useEffect } from 'react';
import Anime from '@/components/Anime';


export default async function Home() {
    // const [page, setPage] = useState(1);
    // const [data, setData] = useState<Array<AnimeProp>>([]);    

    // useEffect(() => {
    //     handleFetchData();
    // }, []);

    // const handleFetchData = async () => {
    //     "use server";
    //     const fetchedData = await fetchAnime(page);
    //     setData(prev => [ ...prev, ...fetchedData ]);
    // }
    

    return (
        <div className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
            <Anime />
        </div>
    );
}
