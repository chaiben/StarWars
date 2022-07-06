import { BrowserRouter, Route, Routes} from 'react-router-dom';
import useLocalStorage from '../hook/useLocalStorage';
import Home from '../page/Home';
import Starship from '../page/Starship';
import Styles from '../page/Style';
import GuardedRoute from './GuardedRoute';
import Header from './Header';
import Nav from './Nav';
import Starships from './Starships';

const App = () => {
const [currentUser, setCurrentUser] = useLocalStorage("App-currentUser", false);
const isAutheticated = (currentUser) ? true : false
return (
<BrowserRouter>
    <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <Nav />
    <Routes>   
        <Route index element={<Home />} />
        <Route path='/starships' element={<GuardedRoute component={Starships} auth={isAutheticated} />}></Route>
        <Route path="/starships/:id" element={<GuardedRoute component={Starship} auth={isAutheticated} />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="*" element={<div>404</div> } />
    </Routes>
</BrowserRouter>
)};
export default App;