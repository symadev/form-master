import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'


//  another perocess


// Use the context 
  export const AssetContext = createContext('gold');
//AssetContext--> context api

// *
// 1.create a context and export it 
// 2.add provider for the context  with the value 
// 3. use context to access the value in the context api
// 
// 
// *



const Grandpa = () => {
    const asset = 'Diamond'
    //this process is called props drilling
    return (
        <div className="Grandpa">
            <h2>Grandpa</h2>
         <AssetContext.Provider value="gold">

         <section className="flex">
        <Dad asset ={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
            </section>
         </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;