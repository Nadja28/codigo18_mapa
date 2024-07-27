import { BrowserRouter,Routes,Route } from "react-router-dom";
import MyMapComponent from "../components/mapa/MyMapComponent";

// import MyMapComponent from "./../components/mapa"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/home" element={<MyMapComponent/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}