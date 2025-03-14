import Brother from "../Brother/Brother";
import Me from "../Me/Me";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div className="Dad">
            <h3>Dad</h3>

           
          <section className="flex">
            <Me></Me>
            <Brother></Brother>
            <Sister></Sister>
            </section>
        </div>
       
    );
};

export default Dad;