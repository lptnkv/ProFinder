import {Link} from "react-router-dom"

export default function Header(props){
    return (<>
        <nav>
            <Link to="/index">Главная</Link>
        </nav>
        </>)
}