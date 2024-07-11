import { useState, useEffect } from "react";


export const usePagination = (resultsToPaginate: number) => {
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        const calculatedPages = Math.ceil(resultsToPaginate / 12);
        setPageCount(calculatedPages);
    }, [resultsToPaginate]);

    const pagesArray = Array.from({length: pageCount}, (_, i) => i + 1);

    return { pageCount, pagesArray };
};
