import React, {useState} from 'react'
import s from './AddWindow.module.css'
import {useDispatch} from "react-redux";
import {addCardItem} from "../../../redux/card-reducer";

function AddWindow(props) {
    let dispatch = useDispatch()
    let [inputText, setInputText] = useState('')
    let saveText = () => {
        if (inputText) {
            dispatch(addCardItem(props.idCards, inputText))
            setInputText('')
            props.setWindowIsOpen(false)
        } else {
            props.setWindowIsOpen(false)
        }

    }
    let changeText = (e) => {
        setInputText(e.currentTarget.value)
    }

    return (
        <div className={s.window}>
            <textarea className={s.area} type="text" onChange={changeText} value={inputText} placeholder='Введите текст карточки'/>
            <div className={s.buttonWrap}>
                <button onClick={saveText} className={s.btnSave}>Добавить карточку</button>
                <button onClick={props.close} className={s.btnClose}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                            fill="#626262"/>
                    </svg>
                    Отменить
                </button>
            </div>

        </div>
    )
}

export default AddWindow