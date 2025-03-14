import { createContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Me = ({asset}) => {
    const gift = createContext(AssetContext);
    return (
        <div>
             <h3>Me</h3>
             <h4>Thats my {asset}</h4>
             <h4>Also it is {gift}</h4>
        </div>
    );
};

export default Me;