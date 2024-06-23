import Link from "next/link"; 

interface BookStayPillProps {
    className?: string;
    id?: string;  
    onClick?: () => void; 
}

export default function BookStayPill({ className, id, onClick }: BookStayPillProps) {
    return(
        <Link href='/cart' className={ className } id={ id }>
            <div onClick={ onClick }>BOOK YOUR STAY</div>
        </Link>
    )
}