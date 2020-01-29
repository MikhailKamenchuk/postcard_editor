import React, { Component } from "react";
import {connect} from "react-redux";
import FontFamilyPicker from "../font-picker/font-picker";
import html2canvas from "html2canvas";
import { CirclePicker  } from 'react-color';
import {changeInscriptionColor} from '../../actions'


class EditorPage extends Component {
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

    handleChangeComplete = (color) => {
        this.props.changeInscriptionColor(color.hex);
        console.log(this.props.changeInscriptionColor(color.hex))
    };


    render() {
        return (
            <div className='row'>
                <div className="previewWrap column" id="preview">
                    <img src={this.props.selectedImage} width='300' alt='source-picture'/>
                    <p
                        style={this.props.inscriptionStyles}
                        contenteditable='true'
                        className="apply-font"
                    >The font will be applied to this text.</p>
                </div>
                <div className='column'>
                    <FontFamilyPicker />
                    <CirclePicker
                        color={ this.props.inscriptionColor }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                    <button className='btn btn-primary' onClick={this.saveCard}>Button</button>
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
        selectedImage: state.selectedImage
    }
};

const mapDispatchToProps = () => {
    return {
        changeInscriptionColor
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage)
