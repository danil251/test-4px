import React from 'react'
import s from './CardItem.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setPropertyModal} from "../../../redux/card-reducer";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


function CardItem(props) {
    let dispatch = useDispatch()
    let cards = useSelector(state => state.card.cards)


    let target = () => {
        dispatch(setPropertyModal(props.itemText, props.description, props.id, props.idCards))
    }


    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e) {
        let board = cards.find(b => b.idCards === props.idCards)
        let item = board.cardItem.find(i => i.id === e.target.id)
        props.setCurrentBoard(board)
        props.setCurrentItem(item)

    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragOverHandler(e) {
        e.preventDefault()
        if (e.target.className === `${s.item}`) {
            e.target.style.boxShadow = '0px 4px 3px gray'
        }
    }

    function dropHandler(e) {
        e.preventDefault()
        e.target.style.boxShadow = 'none'
        let board = cards.find(b => b.idCards === props.idCards)
        let item = board.cardItem.find(i => i.id === e.target.id)

        const currentIndex = props.currentBoard.cardItem.indexOf(props.currentItem)
        props.currentBoard.cardItem.splice(currentIndex, 1)

        const dropIndex = board.cardItem.indexOf(item)

        board.cardItem.splice(currentIndex <= dropIndex ? dropIndex + 1 : dropIndex, 0, props.currentItem)

        props.setBoards(cards.map(b => {
            if (b.idCards === board.idCards) {
                return board
            }
            if (b.id === props.currentBoard.id) {
                return props.currentBoard
            }
            return b
        }))

    }

    return (
        <div id={props.idCards}>
            <Tippy content={props.description ? props.description : 'No description' } animation="scale"
                   delay={[1000, 0]}
            >
                <NavLink to='/modalWindow' onClick={target} className={s.link}>
                    <div id={props.id}
                         className={s.item}
                         draggable={true}
                         onDragOver={(e) => dragOverHandler(e)}
                         onDragLeave={(e) => dragLeaveHandler(e)}
                         onDragStart={(e) => dragStartHandler(e)}
                         onDragEnd={(e) => dragEndHandler(e)}
                         onDrop={(e) => dropHandler(e)}
                    >{props.itemText}</div>
                </NavLink>
            </Tippy>
        </div>
    )
}

export default CardItem