import React, { Component } from "react";
import {connect} from "react-redux";
import html2canvas from "html2canvas";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {popover} from "../../popover/popover";
import withPostcardService from "../hoc/with-postcard-service";
import {withRouter} from "react-router-dom";
import {cardRequested,cardLoaded, cardError} from "../../actions";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class Editor extends Component {
    saveCard = () => {
        html2canvas(document.getElementById('preview'), {
            scrollX: -window.scrollX,
            scrollY: -window.scrollY,
            allowTaint: true,
            logging: true,
            useCORS: true
        }).then(function(canvas) {
            const data = canvas.toDataURL("image/jpg");
            document.getElementById('screenShot').src = encodeURI(data);
        });
    };

    componentDidMount() {
        const {
            postcardService,
            cardRequested,
            cardLoaded,
            cardError,
            match} = this.props;
        cardRequested();
        postcardService.getCard(match.params.id)
            .then(data => cardLoaded(data.src))
            .catch(error => cardError(error))
    }

    render() {
        const {loading, error, selectedImage, inscriptionStyles} = this.props;
        if (loading){
            return <Spinner/>
        }
        if(error){
            return <ErrorIndicator/>
        }
        return (
            <div className='row'>
                <div className="previewWrap column" id="preview">
                    <img src={selectedImage} width='300' alt='source-picture'/>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover(this.saveCard)}>
                        <p  style={inscriptionStyles}
                            contentEditable
                            suppressContentEditableWarning={true}
                            className="apply-font"
                        >The font will be applied to this text.</p>
                    </OverlayTrigger>
                </div>
                <div id="canvasImg" className="p-4 border column">
                    <img id="screenShot" alt='received-picture'/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inscriptionStyles: state.inscriptionStyles,
        selectedImage: state.selectedImage,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    cardRequested,
    cardLoaded,
    cardError
};

export default withRouter(withPostcardService()(connect(mapStateToProps, mapDispatchToProps)(Editor)))
