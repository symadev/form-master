import { useState } from "react"


//first we declare a function
const useInputState = (defaultvalue = null) => {

    const [ value, setvalue] = useState(defaultvalue);

// const handleChange = e => {
//     setvalue(e.target.value);
// }


const onChange = e => {
    setvalue(e.target.value);
}




return [value,onChange]
// return [value,handleChange]
};

export default useInputState;


// this is our own custom hook

// এই useInputState হলো একটি কাস্টম React হুক,
//  যা ইনপুট ফিল্ড বা অন্য যেকোনো স্টেট পরিচালনার জন্য ব্যবহার করা হয়
