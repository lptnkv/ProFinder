import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import Index from "./pages";
import Register from "./pages/registerPage";
import Login from "./pages/loginPage";
import JobsPage from "./pages/jobsPage"
import SingleJobPage from "./pages/singleJobPage";
import UserPage from "./pages/userPage";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" Component={Index}/>
                    <Route path="/jobs" Component={JobsPage} />
                    <Route path="/login" Component={Login} />
                    <Route path="/register" Component={Register} />
                    <Route path="/jobs/:jobId" Component={SingleJobPage} />
                    <Route path="/users/:userId" Component={UserPage}/>
                </Routes>
            </Router>
            
        </>
    )
}

export default App;
