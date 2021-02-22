import uuid from "react-uuid";

let initialState = {
    cards: [
        {
            title: 'В работе',
            idCards: '0',
            cardItem: [
                {
                    id: uuid(),
                    text: 'Пример текста карточки',
                    description: 'Пример длинного текста карточки,да такого чтобы он вообще не ...'
                }
            ]
        },
        {
            title: 'На проверке',
            idCards: '1',
            cardItem: [
                {
                    id: uuid(),
                    text: 'Пример текста карточки',
                    description: 'Пример длинного текста карточки,да такого чтобы он вообще не ...'
                }
            ]
        },
        {
            title: 'Выполнено',
            idCards: '2',
            cardItem: [
                {
                    id: uuid(),
                    text: 'Пример текста карточки',
                    description: 'Пример длинного текста карточки,да такого чтобы он вообще не ...'
                }
            ]
        }
    ],
    modalProperty: {
        title: '',
        description: '',
        id: '',
        idCard: ''
    }
}
export let cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-CARD-ITEM' : {
            let item = {
                id: uuid(),
                text: action.text,
                description: ''
            }
            state.cards[action.idCards].cardItem.push(item);
            return {...state};
        }
        case 'SET-PROPERTY-MODAL' : {
            let property = {
                title: action.title,
                description: action.description,
                id: action.id,
                idCard: action.idCard
            }
            return {...state, modalProperty: property}
        }
        case 'CHANGE-CARD-ITEM' : {
            return {
                ...state,
                cards: state.cards.map(car => car.idCards === action.idCard ? {
                    ...car,
                    cardItem: car.cardItem.map(c => c.id === action.id ? {
                        ...c,
                        text: action.title,
                        description: action.description
                    } : c)
                } : car)
            }
        }
        default:
            return {...state}
    }
}

export const addCardItem = (idCards, text) => ({type: 'ADD-CARD-ITEM', idCards, text})
export const setPropertyModal = (title, description, id, idCard) => ({
    type: 'SET-PROPERTY-MODAL',
    title,
    description,
    id,
    idCard
})
export const changeCarItem = (title, description, id, idCard) => ({
    type: 'CHANGE-CARD-ITEM',
    title,
    description,
    id,
    idCard
})

