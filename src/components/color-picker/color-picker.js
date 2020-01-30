import React, { Component } from "react";
import {connect} from "react-redux";
import './color-picker.css'
import {CirclePicker} from "react-color";
import {changeInscriptionColor} from "../../actions";

class ColorPicker extends Component {

    handleChangeColor = (color) => {
        return this.props.changeInscriptionColor(color.hex);
    };

    render() {
        return (
                <CirclePicker
                    width='210px'
                    circleSize={20}
                    onChange={this.handleChangeColor}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeFontFamily: state.activeFontFamily
    }
};

const mapDispatchToProps = {
    changeInscriptionColor
};



export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)
