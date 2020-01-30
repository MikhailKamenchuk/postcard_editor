import React from "react";
import './card-list.css'
import CardListItem from "../card-list-item/card-list-item";
import {connect} from "react-redux";
import withPostcardService from "../hoc/with-postcard-service";
import {postcardsError, postcardsLoaded, postcardsRequested, cardSelected} from '../../actions'
import {distructureArrForResponsiveDesign} from "../../utils";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import {withRouter} from "react-router-dom";

class CardList extends React.Component{
    componentDidMount() {
        const {
            postcardService,
            postcardsRequested,
            postcardsLoaded,
            postcardsError} = this.props;
        postcardsRequested();
        postcardService.getPostcards()
            .then((data) => {
                postcardsLoaded(data)
            })
            .catch((err) => postcardsError(err))
    }

    render(){
        const { cards, loading, error, cardSelected, history} = this.props;
        if (loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
        return (
            <div className='row'>
                {distructureArrForResponsiveDesign(cards,3).map(
                    (item, idx) => {
                        return (
                            <div key={idx} className='column'>
                                {item.map(
                                    (card, idx) => {
                                        return <CardListItem
                                            key={idx}
                                            onCardSelected={() => {
                                                history.push(`editor/${card.id}`);
                                                return cardSelected(card.id)
                                            }}
                                            card={card}
                                        />

                                    }
                                )}
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    postcardsLoaded,
    postcardsRequested,
    postcardsError,
    cardSelected,
};

export default withRouter(withPostcardService()(connect(mapStateToProps, mapDispatchToProps)(CardList)))