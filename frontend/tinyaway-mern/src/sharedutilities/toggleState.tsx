export const toggleState = (setStateFunction) => {
    return () => {
        setStateFunction(prevState => !prevState);
    };
};