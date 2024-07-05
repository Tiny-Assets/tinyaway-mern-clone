import { CenteredContent, SplitContent } from "./SingleListingStyles";

interface SubMenuContentProps {
    paragraph?: string; 
    splitLeft?: string[]; 
    splitRight?: string[]; 
}

export default function SubMenuContent({ paragraph, splitLeft, splitRight }: SubMenuContentProps) {
    return(
        <>
            { paragraph ? (
                <CenteredContent>
                    <p>{ paragraph }</p>
                </CenteredContent>
            ) : (
                <></>
            )}

            { splitLeft && splitRight ? (
                <SplitContent>
                    <div>
                        { splitLeft.map((item, index) => (
                            <p key={ index }>{ item }</p>
                        ))}
                    </div>
                    <div>
                        { splitRight.map((item, index) => (
                            <p key={ index }>{ item }</p>
                        ))}
                    </div>
                </SplitContent>
            ) : (
                <></>
            )}
        </>
    )
}