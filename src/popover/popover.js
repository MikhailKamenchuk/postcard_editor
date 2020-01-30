import React from "react";
import Popover from "react-bootstrap/Popover";
import FontFamilyPicker from "../components/font-picker/font-picker";
import ColorPicker from "../components/color-picker/color-picker";
import FontSizePicker from "../components/font-size-piker/font-size-piker";

export const popover = (onClickHandler) => {
    return (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                <div className=''>
                    <FontFamilyPicker />
                    <ColorPicker />
                    <FontSizePicker />
                    <button className='btn btn-primary' onClick={onClickHandler}>Button</button>
                </div>
            </Popover.Content>
        </Popover>
    )
};