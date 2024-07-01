import styled from "styled-components"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface SectionProps {
    title?: string; 
    paragraph?: string; 
    leftSideInfo?: string; 
    rightSideInfo?: string; 
}
export default function DropdownSection({ title, paragraph, leftSideInfo, rightSideInfo }: SectionProps) {
    const [openContent, setOpenContent] = useState(false); 
    const [centered, setCentered] = useState(false); 
    const [splitContent, setSplitContent] = useState(false);     
    
    const toggleContent = () => {
        setOpenContent(!openContent); 
    }

    useEffect(() => {
        if (paragraph) {
            setCentered(true);
        } else {
            setCentered(false);
        }

        if (leftSideInfo && rightSideInfo) {
            setSplitContent(true);
        } else {
            setSplitContent(false);
        }
    }, [paragraph, leftSideInfo, rightSideInfo]);

    return(
        <MainBox>
            <HeaderToClick onClick={ toggleContent }>
                <h2>{ title }</h2>
                <FontAwesomeIcon icon={ faCaretDown } />
            </HeaderToClick>
            { openContent && (
            <>
                { centered && (
                    <CenterContent>
                        <p>{ paragraph }</p>
                    </CenterContent>
                )}
                { splitContent && (
                    <SplitContent>
                        <LeftSide>
                            <p>{ leftSideInfo }</p>
                        </LeftSide>
                        <RightSide>
                            <p>{ rightSideInfo }</p>
                        </RightSide>
                    </SplitContent>
                )}
            </>
            )}
        </MainBox>
    )
}

const MainBox = styled.div`
    padding: 15px 0px; 
    border-bottom: 1px solid var(--corpLightGrey1); 
    width: 785px; 

    h2 {
        font-size: 24px; 
        font-weight: 500; 
    }
`

const HeaderToClick = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
const CenterContent = styled.div`
    font-size: 18px; 
    padding: 20px 0px; 
`

const SplitContent = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-content: center; 
    padding-top: 20px; 
`

const LeftSide = styled.div`
    font-size: 18px; 
`

const RightSide = styled.div`
    font-size: 18px; 
`