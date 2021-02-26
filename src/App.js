import './App.css';
import Card from "./components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {Route} from "react-router-dom";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {useState, useEffect} from "react";
import {currentBoardAC} from "./redux/card-reducer";


function App() {
    const cards = useSelector(state => state.card)
    let [currentBoard, setCurrentBoard] = useState(null)
    let [currentItem, setCurrentItem] = useState(null)
    let [boards, setBoards] = useState(cards.cards)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(currentBoardAC(boards))
    }, [setBoards])


    let card = cards.cards.map(c => <Card title={c.title}
                                          currentBoard={currentBoard}
                                          setCurrentBoard={setCurrentBoard}
                                          currentItem={currentItem}
                                          setCurrentItem={setCurrentItem}
                                          boards={boards}
                                          setBoards={setBoards}
                                          cardItem={c.cardItem}
                                          key={c.idCards}
                                          idCards={c.idCards}
                                          id={c.idCards}/>)

    return (
        <div className='app'>
            {card}
            <Route path="/modalWindow" render={() => <ModalWindow/>}/>
        </div>
    );
}

export default App;
