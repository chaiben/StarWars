import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../page/Home';
import Nav from './Nav';
import Starships from './Starships';

const Router = () => (
        <BrowserRouter>
        <Nav />
            <Routes>   
                <Route index element={<Home />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="*" element={<div>404</div> } />
            </Routes>
        </BrowserRouter>
);
export default Router;