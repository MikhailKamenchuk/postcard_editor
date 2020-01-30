const initialState = {
    cards: [],
    loading: true,
    error: null,
    activeFontFamily: 'Open Sans',
    inscriptionStyles: {
        color: '',
        fontSize: ''
    },
    selectedImage:''
};
const reducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case 'FETCH_POSTCARDS_REQUEST':
            return{
                ...state,
                cards: [],
                loading: true,
                error: null,
            };
        case 'FETCH_POSTCARDS_SUCCESS':
            return{
                ...state,
                cards: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_POSTCARDS_FAILURE':
            return{
                ...state,
                cards: [],
                loading: false,
                error: action.payload,
            };
        case 'FETCH_CARD_REQUEST':
            return{
                ...state,
                selectedImage: '',
                loading: true,
                error: null,
            };
        case 'FETCH_CARD_SUCCESS':
            return{
                ...state,
                selectedImage: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_CARD_FAILURE':
            return{
                ...state,
                selectedImage: '',
                loading: false,
                error: action.payload,
            };
        case 'SELECT_FONT':
            return {
                ...state,
                activeFontFamily: action.payload,
            };
        case 'CHANGE_INSCRIPTION_COLOR':
            return {
                ...state,
                inscriptionStyles: {
                    ...state.inscriptionStyles,
                    color: action.payload
                }
            };
        case 'SELECT_CARD':
            const cardId = action.payload;
            const cardListItem = state.cards.find(card => card.id === cardId);
            return {
                ...state,
                selectedImage: cardListItem.src
            };

        case 'CHANGE_INSCRIPTION_FONT_SIZE':
             return {
                ...state,
                 inscriptionStyles: {
                    ...state.inscriptionStyles,
                     fontSize: `${action.payload}px`
                 }
            };
        default:
            return state
    }
};

export default reducer