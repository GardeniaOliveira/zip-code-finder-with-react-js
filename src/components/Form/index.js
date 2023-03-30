
import { FiSearch } from 'react-icons/fi'
import * as C from "./styles";

const Form = ({ title, inputTitle, code, address }) => {
    return (
        <C.Container>
            <C.FormArea>
                <C.Title >{title}</C.Title>
                <C.InputLabel>
                    <C.InputTitle>{inputTitle}</C.InputTitle>
                    <C.Form>
                        <input type="text" />
                        <C.Button type="submit">
                            <FiSearch size={25} color='#FFF' />
                        </C.Button>
                    </C.Form>
                </C.InputLabel>
            </C.FormArea>

            <C.Result>
                <C.TitleCode>{code}</C.TitleCode>
                <C.Address>{address}</C.Address>
            </C.Result>
        </C.Container>
    )
}
export default Form
