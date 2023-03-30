import * as C from "./styles";
const Form = ({ title, inputTitle }) => {
    return (
        <C.Container>
            <C.Title >{title}</C.Title>
            <C.InputLabel>
                <C.InputTitle>{inputTitle}</C.InputTitle>
                <C.Form>
                    <input type="text" />
                    <input type="submit" value="SEARCH" />
                </C.Form>
            </C.InputLabel>
        </C.Container>
    )
}
export default Form
