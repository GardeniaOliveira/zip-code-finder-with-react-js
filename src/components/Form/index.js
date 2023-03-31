
import { FiSearch } from 'react-icons/fi'
import * as C from "./styles";

const Form = ({ title, inputTitle, inputValue }) => {


    return (

        <C.FormArea>
            <C.Title >{title}</C.Title>
            <C.InputLabel>
                <C.InputTitle>{inputTitle}</C.InputTitle>
                <C.Form>
                    <input type="text" value={inputValue} />
                    <C.Button type="submit">
                        <FiSearch size={25} color='#FFF' />
                    </C.Button>
                </C.Form>
            </C.InputLabel>
        </C.FormArea>

    )
}
export default Form
