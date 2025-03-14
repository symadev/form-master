import Brother from "../Brother/Brother";
import Me from "../Me/Me";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div className="Dad">
            <h3>Dad</h3>

           
          <section className="flex">
        <Me asset={asset}></Me>
            <Brother></Brother>
            <Sister></Sister>
            </section>
        </div>
       
    );
};

export default Dad;