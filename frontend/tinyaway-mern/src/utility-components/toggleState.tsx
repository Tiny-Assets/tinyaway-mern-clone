export const toggleState = (setStateFunction) => {
    return (e) => {
        setStateFunction(prevState => !prevState);
    };
};