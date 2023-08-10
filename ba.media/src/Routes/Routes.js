import Navbar from "../components/Navbar"
import Home from "../components/Home";
import Proyects from "../components/Proyects";

export const routes = [
    {
        id: 1,
        path: "/",
        Component: Home
    },
    {
        id: 2,
        path: "/projects",
        Component: Proyects 
    }
];

export {Navbar};