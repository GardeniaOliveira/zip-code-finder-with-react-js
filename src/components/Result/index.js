
import * as C from "./styles";

const Result = ({ code, address }) => {
    if (!code || !address) return null;
    return (

        <C.Result>
            <C.TitleCode>{code}</C.TitleCode>
            <C.Address>{address}</C.Address>
        </C.Result>

    )
}
export default Result
