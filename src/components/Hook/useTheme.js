import React from "react";

import { Context } from "../Context/Theme";

const useTheme = (setterOnly = false)=>{
    const ctx = React.useContext(Context)

    return setterOnly ? [ctx.setTheme] :  [ctx.theme, ctx.setTheme];

}

export default useTheme;