import React from "react";

const InstitutionsContext = React.createContext({ items: [], loaded: false, selectedId: null });

const InstitutionsProvider = InstitutionsContext.Provider;

export { InstitutionsContext, InstitutionsProvider };
