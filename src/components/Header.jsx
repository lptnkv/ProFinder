import {Link} from "react-router-dom"

export default function Header(props){
    return (<>
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/jobs">Услуги</Link>
        </nav>
        </>)
}