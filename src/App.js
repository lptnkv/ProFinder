import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import Index from "./pages";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={Index}/>
                    <Route path="jobs" element={<>here will be jobs</>} />
                </Routes>
            </Router>
            
        </>
    )
}

export default App;
