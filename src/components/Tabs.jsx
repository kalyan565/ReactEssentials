export default function Tabs({children, buttons, ButtonsContainer}){
    //let ButtonsContainer = buttonsContainer;
    return(
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>
    );
}