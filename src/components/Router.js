import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../page/Home';
import Styles from '../page/Style';
import Header from './Header';
import Nav from './Nav';
import Starships from './Starships';

const Router = () => (
<BrowserRouter>
    <Header />
    <Nav />
    <Routes>   
        <Route index element={<Home />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="*" element={<div>404</div> } />
    </Routes>
</BrowserRouter>
);
export default Router;