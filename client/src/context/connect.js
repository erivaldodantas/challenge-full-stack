import React from "react";

export const connectContext = ContextType => Comp => props => (
    <ContextType.Consumer>
        {context => <Comp context={context} {...props} />}
    </ContextType.Consumer>
);