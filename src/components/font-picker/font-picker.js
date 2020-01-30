import React, { Component } from "react";
import FontPicker from "font-picker-react";
import {connect} from "react-redux";
import {fontPick} from '../../actions';
import './font-picker.css'

class FontFamilyPicker extends Component {

    onChangeFont = (nextFont) => {
       return  this.props.fontPick(nextFont.family)
    };
    render() {
        return (
            <div>
                <FontPicker
                    apiKey="AIzaSyDvla4PdQkfz9WkIfy_aKvXbkNWVcTyLz0"
                    activeFontFamily={this.props.activeFontFamily}
                    onChange={this.onChangeFont}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeFontFamily: state.activeFontFamily
    }
};

const mapDispatchToProps = {
    fontPick
};

export default connect(mapStateToProps, mapDispatchToProps)(FontFamilyPicker)
