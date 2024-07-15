import styled from "styled-components";
import { useState, useEffect } from "react";
import { usePagination } from "../hooks/usePagination"

interface StoriesPaginationProps {
    dataQuantity: number; 
    btnClick: (e) => void; 
    // pageSelected: number; 
}

export default function RenderPagination({ dataQuantity, btnClick }: StoriesPaginationProps) {
    const { pageCount, pagesArray } = usePagination( dataQuantity ); 
    const [pageBtns, setPageBtns] = useState(false); 

    useEffect(() => {
        if (pageCount > 1) {
            setPageBtns(true); 
        }
    },[pageCount])

    return(
        <PaginationButtons>
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
        </PaginationButtons>
    )
}

const PaginationButtons = styled.div`
    width: 75%; 
    display: flex; 
    gap: 10px; 
    margin-bottom: 50px; 
    padding: 20px; 
    overflow: hidden;
`

const PaginationButton = styled.div`
    background-color: var(--corpYellow); 
    color: var(--corpDarkGrey1); 
    min-height: 60px;
    min-width: 60px; 
    display: inline-block; 
    font-size: 21px; 
    text-align: center; 
    align-content: center; 
    margin: 0px 10px; 
    border-radius: 2rem; 
`