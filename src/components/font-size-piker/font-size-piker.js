import React, { Component } from "react";
import {connect} from "react-redux";
import './font-size-piker.css';

import {changeInscriptionFontSize} from '../../actions/index'

class FontSizePicker extends Component {
    handleChangeFontSize = (e) => {
        this.props.changeInscriptionFontSize(e.target.value)
    };

    render() {
        return (
            <div>
                <input
                    className="form-control-range"
                    type='range'
                    min="10"
                    max="30"
                    step='1'
                    onChange={this.handleChangeFontSize}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inscriptionFontSize: state.inscriptionStyles.fontSize
    }
};

const mapDispatchToProps = {
    changeInscriptionFontSize
};



export default connect(mapStateToProps, mapDispatchToProps)(FontSizePicker)
