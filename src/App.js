import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import Index from "./pages";
import Register from "./pages/register";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={Index}/>
                    <Route path="jobs" element={<>here will be jobs</>} />
                    <Route path="/register" element={Register} />
                </Routes>
            </Router>
            
        </>
    )
}

export default App;
