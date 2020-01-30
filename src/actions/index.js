const postcardsRequested = () => {
    return {
        type: 'FETCH_POSTCARDS_REQUEST'
    }
};

const postcardsLoaded = (newPostcards) => {
    return {
        type: 'FETCH_POSTCARDS_SUCCESS',
        payload: newPostcards
    }
};

const postcardsError = (error) => {
    return {
        type: 'FETCH_POSTCARDS_FAILURE',
        payload: error
    }
};

const cardRequested = () => {
    return {
        type: 'FETCH_CARD_REQUEST'
    }
};

const cardLoaded = (src) => {

    return {
        type: 'FETCH_CARD_SUCCESS',
        payload: src
    }
};

const cardError = (error) => {
    return {
        type: 'FETCH_CARD_FAILURE',
        payload: error
    }
};

const fontPick = (font) => {
    return {
        type: 'SELECT_FONT',
        payload: font
    }
};

const changeInscriptionColor = (color) => {
    return {
        type: 'CHANGE_INSCRIPTION_COLOR',
        payload: color
    }
};

const changeInscriptionFontSize = (size) => {
    return {
        type: 'CHANGE_INSCRIPTION_FONT_SIZE',
        payload: size
    }
};

const cardSelected = (cardId) => {
    return {
        type: 'SELECT_CARD',
        payload: cardId
    }
};


export {
    postcardsLoaded,
    postcardsRequested,
    postcardsError,
    fontPick,
    changeInscriptionColor,
    cardSelected,
    changeInscriptionFontSize,
    cardRequested,
    cardLoaded,
    cardError
}