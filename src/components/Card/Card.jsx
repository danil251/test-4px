import React, {useState} from 'react'
import s from './Card.module.css'
import CardItem from "./CardItem/CardItem";
import AddWindow from "./AddWindow/AddWindow";


function Card(props) {
    let card = props.cardItem.map(c => <CardItem description={c.description}
                                                 itemText={c.text}
                                                 currentBoard={props.currentBoard}
                                                 setCurrentBoard={props.setCurrentBoard}
                                                 currentItem={props.currentItem}
                                                 boards={props.boards}
                                                 setBoards={props.setBoards}
                                                 setCurrentItem={props.setCurrentItem}
                                                 key={c.id} id={c.id}
                                                 idCards={props.idCards}/>)
    let [windowIsOpen, setWindowIsOpen] = useState(false)
    let open = () => {
        setWindowIsOpen(true)
    }
    let close = () => {
        setWindowIsOpen(false)
    }



    return (
        <div className={s.card}
        >
            <div className={s.title}>{props.title}</div>
            {card}

            {windowIsOpen ? <AddWindow close={close} idCards={props.idCards} setWindowIsOpen={setWindowIsOpen}/> :
                <div className={s.addItem} onClick={open}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#626262"/>
                    </svg>
                    Добавить еще одну карточку
                </div>}
        </div>
    )
}

export default Card
