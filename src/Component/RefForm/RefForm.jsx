import { useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);



    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current .value);
        console.log(emailRef.current .value);
        console.log(phoneRef.current .value);
    };


    return (
        <div>
             <form onSubmit ={handleSubmit}>
                <input ref={nameRef} type="name"  name="name"/>
                <br />
                <input ref={emailRef} type="Email" name="email" />
                <br />
                <input ref={phoneRef} type="number" name="phone" />
                <br />
              <input type="submit"  value="Submit"/>
            </form>
           
        </div>
    );
};

export default RefForm;