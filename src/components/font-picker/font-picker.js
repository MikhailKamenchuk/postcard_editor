import React, { Component } from "react";
import FontPicker from "font-picker-react";
import {connect} from "react-redux";
import {fontPick} from '../../actions'

class EditorPage extends Component {
    render() {
        return (
            <div>
                <FontPicker
                    apiKey="AIzaSyDeVbzCe_sQYFQMMAYt043NjzHGYKYPUtI"
                    activeFontFamily={this.props.activeFontFamily}
                    onChange={nextFont => fontPick(nextFont.family)}
                />
                <p className="apply-font">The font will be applied to this text.</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeFontFamily: state.activeFontFamily
    }
};

const mapDispatchToProps = () => {
    return {
        fontPick
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage)
