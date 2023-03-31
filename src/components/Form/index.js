
import { FiSearch } from 'react-icons/fi'
import * as C from "./styles";

const Form = ({ title, inputTitle, inputValue, onChange, onClick }) => {


    return (

        <C.FormArea>
            <C.Title >{title}</C.Title>
            <C.InputLabel>
                <C.InputTitle>{inputTitle}</C.InputTitle>
                <C.Form>
                    <input type="text" value={inputValue} onChange={onChange} />
                    <C.Button type="submit" onClick={onClick}>
                        <FiSearch size={25} color='#FFF' />
                    </C.Button>
                </C.Form>
            </C.InputLabel>
        </C.FormArea>

    )
}
export default Form
