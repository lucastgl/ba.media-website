import Navbar from "../components/Navbar"
import Home from "../components/Home";
import ProyectsPage from "../components/ProyectsPage";

export const routes = [
    {
        id: 1,
        path: "/",
        Component: Home
    },
    {
        id: 2,
        path: "/projects",
        Component: ProyectsPage 
    }
];

export {Navbar};