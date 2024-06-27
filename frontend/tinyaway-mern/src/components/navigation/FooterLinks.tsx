import styled from "styled-components"
import { Link } from "react-router-dom";

interface FooterLinkProps {
    linkName: string; 
    path: string; 
}

export default function FooterLink({ linkName, path }: FooterLinkProps) {
    return(
        <LinkConfig>
            <Link to={ path }>{ linkName }</Link>
        </LinkConfig>
    )
}

const LinkConfig = styled.div`
    font-size: 21px; 
    font-weight: 300; 
    margin-bottom: 20px; 
`