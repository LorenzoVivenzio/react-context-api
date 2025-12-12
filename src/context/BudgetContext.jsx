import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {

    const [isBudget, SetIsBudget] = useState(false)

    const contextValue = {isBudget, changeBudget};


    function changeBudget() {
        SetIsBudget((current) => !current);

    }


    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    )


}


function useBudget() {
    const contextValue = useContext(BudgetContext)
    return contextValue
}
export { BudgetProvider, useBudget }