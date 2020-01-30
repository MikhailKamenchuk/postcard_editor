import React from "react";
import {PostcardServiceConsumer} from "../postcard-service-context/postcard-service-context";

const withPostcardService = () => (Wrapped) => {
    return (props) => {
        return (
            <PostcardServiceConsumer>
                {
                    (postcardService) => {
                        return (
                            <Wrapped
                                {...props}
                                postcardService={postcardService}
                            />
                        )
                    }
                }
            </PostcardServiceConsumer>
        )
    }
};

export default withPostcardService