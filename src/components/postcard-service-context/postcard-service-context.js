import React from "react";

const {
    Provider :  PostcardServiceProvider,
    Consumer: PostcardServiceConsumer
} = React.createContext();

export {
    PostcardServiceProvider,
    PostcardServiceConsumer
}