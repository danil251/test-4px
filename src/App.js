import './App.css';
import Card from "./components/Card/Card";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import ModalWindow from "./components/ModalWindow/ModalWindow";


function App() {
    const cards = useSelector(state => state.card)
    let card = cards.cards.map(c => <Card title={c.title} cardItem={c.cardItem} key={c.idCards} idCards={c.idCards}
                                          id={c.idCards}/>)

    return (
        <div className='app'>
            {card}
            <Route path="/modalWindow" render={() => <ModalWindow/>}/>
        </div>
    );
}

export default App;
