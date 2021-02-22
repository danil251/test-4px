import React, {useState} from 'react'
import s from './ModalWindow.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCarItem} from "../../redux/card-reducer";

function ModalWindow(props) {
    let propertyModal = useSelector(state => state.card.modalProperty)
    let [changeTitle, setChangeTitle] = useState(false)
    let [titleText, setTitleText] = useState(propertyModal.title)
    let [descriptionText, setDescriptionText] = useState(propertyModal.description)

    let dispatch = useDispatch()

    let openChangeTitle = () => {
        setChangeTitle(true)
    }
    let changeTitleText = (e) => {
        setTitleText(e.currentTarget.value)
    }
    let changeDescriptionText = (e) => {
        setDescriptionText(e.currentTarget.value)
    }
    let changeSave = () => {
        dispatch(changeCarItem(titleText, descriptionText, propertyModal.id, propertyModal.idCard))
    }
    return (
        <div className={s.modal}>
            <div className={s.modalWrap}>
                <div className={s.flex}>
                    {changeTitle ?
                        <textarea type="text" onChange={changeTitleText} value={titleText} className={s.title}/> :
                        <div className={s.title} onDoubleClick={openChangeTitle}>{titleText}</div>}
                    <NavLink to='/' className={s.closeModal}>
                        <svg className={s.svg} width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                fill="#626262"/>
                        </svg>
                    </NavLink>
                </div>
                <textarea type="text" className={s.changeDescription} value={descriptionText}
                          onChange={changeDescriptionText} placeholder='Описание'/>
                <NavLink to='/'>
                    <button className={s.saveDescription} onClick={changeSave}>Сохранить</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ModalWindow