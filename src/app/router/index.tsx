import { BrowserRouter, Route, Routes } from "react-router";
import { RootRoute } from "../../routes/root/index.tsx";
import { DetailRoute } from "../../routes/detail/index.tsx";


export const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootRoute />}></Route>
            <Route path="/frontend-rocks/dettaglio/:id" element={<DetailRoute />}></Route>
        </Routes>    
    </BrowserRouter>
}