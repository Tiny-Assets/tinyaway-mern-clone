import { useState, useEffect } from "react";
import { usePagination } from "../../../hooks/usePagination"
import { PaginationButton } from "../../sharedcomponents/paginationBtns";

interface StoriesPaginationProps {
    dataQuantity: number; 
    btnClick: (e) => void; 
    pageSelected: number; 
}

export default function StoriesPagination({ dataQuantity, btnClick }: StoriesPaginationProps) {
    const { pageCount, pagesArray } = usePagination( dataQuantity ); 
    const [pageBtns, setPageBtns] = useState(false); 

    useEffect(() => {
        if (pageCount > 1) {
            setPageBtns(true); 
        }
    },[pageCount])

    return(
        <>
            { pageBtns &&
                <>
                    {
                        pagesArray.map((pageNumber, index) => (
                            <PaginationButton key={ index } onClick={ btnClick }>
                                { pageNumber }
                            </PaginationButton>
                        ))
                    }
                </>    
            }
        </>
    )
}