import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const selectCurrentUser = state => state.auth;

export default function Header(props) {
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/jobs">Услуги</Link>
            {currentUser && <>
                <Link to="/create">Предложить услугу</Link>
                <Link to="/logout">Выход</Link>
            </>
            }
            {!currentUser && <>
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
            </>
            }

        </nav>
    )
}