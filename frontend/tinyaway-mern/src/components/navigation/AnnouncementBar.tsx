import styled from "styled-components"

export default function AnnouncementBar() {
    const logClick = () => {
        console.log('click detected'); 
    }

    return(
        <AnnouncementStyle onClick={ logClick }>
            Discover Nature. Stay In Comfort. 
        </AnnouncementStyle>
    )
}

const AnnouncementStyle = styled.div`
    background-color: var(--corpYellow); 
    width: 100%; 
    height: 48px; 
    text-align: center; 
    align-content: center; 

    &:hover {
    background-color: var(--corpYellowHover); 
    }
`