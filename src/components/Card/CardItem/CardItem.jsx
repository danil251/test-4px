import React from 'react'
import s from './CardItem.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPropertyModal} from "../../../redux/card-reducer";

function CardItem(props) {
    let dispatch = useDispatch()
    let target = () => {
        dispatch(setPropertyModal(props.itemText, props.description, props.id, props.idCards))
    }
    return (
        <div id={props.idCards}>
            <NavLink to='/modalWindow' onClick={target} className={s.item}><div>{props.itemText}</div></NavLink>
        </div>
    )
}

export default CardItem