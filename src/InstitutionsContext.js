import React from "react";

const InstitutionsContext = React.createContext({ items: [], loaded: false});

const InstitutionsProvider = InstitutionsContext.Provider;

export { InstitutionsContext, InstitutionsProvider };
