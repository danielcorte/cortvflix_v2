import { Routes, Route} from 'react-router-dom';
import Inicial from '../../pages/Inicial';
import Serie from '../../pages/serie';

export function Rotas() {

    return (
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route path='serie' element={<Serie/>}/>
            </Route>
        </Routes>
    )
}