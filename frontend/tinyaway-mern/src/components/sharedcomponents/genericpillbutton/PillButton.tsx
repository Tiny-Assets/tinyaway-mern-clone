import { Link } from "react-router-dom";
import { Pill } from "./PillButtonStyles";

interface ButtonProps { 
    buttonName: string;
    className?: string; 
    path?: string; 
    toDo?: () => void; 
    }

export default function PillButton({ className, buttonName, path, toDo }: ButtonProps) {
    return (
        <>
            {path ? (
                <Link to={path}>
                    <Pill className={className} onClick={toDo}>
                        {buttonName}
                    </Pill>
                </Link>
            ) : (
                <Pill className={className} onClick={toDo}>
                    {buttonName}
                </Pill>
            )}
        </>
    );
}
    