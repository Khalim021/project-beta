import React from "react";

const Context = React.createContext(null);


function Provider({children}) {

    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light' )

    React.useEffect(()=>{
        if(theme){
            localStorage.setItem('theme', theme)
        }else{
            localStorage.removeItem('theme')
        }
    })
    return <Context.Provider value={{theme, setTheme}}>{children}</Context.Provider>
    
}

export {Context, Provider };