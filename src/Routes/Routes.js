import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import ProyectsPage from "../Components/ProyectsPage";

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