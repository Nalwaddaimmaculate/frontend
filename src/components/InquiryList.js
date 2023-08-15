
import { useEffect, useState } from "react";
import axios from "axios";
const InquiryList = () => {


    const [enquiries,setEnquiries] = useState([]);


    useEffect(() => {
        async function getEnquiries(){
            try{
                const response = await axios.get(process.env.REACT_APP_LINKTOBACKEND+'enquires');
             //console.log('called and waiting');
            //console.log(response);
            let data = await response.data;
            console.log("*********************");
            setEnquiries(data);
            console.log(data);
            
        }  catch (error) {
            console.error(error);
         
         }
            
        }
        getInquiries()
      },[])

    return (
        <div className="bg-warning">
            <h4 className="mt-2"> Inquiry List Submitted so far.</h4>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        enquiries.map((elem) => {
                          return <tr key={elem._id}>
                            <td>{elem.ename}</td>
                            <td>{elem.email}</td>
                            <td>{elem.remarks}</td>
                          </tr>
                        })
                        }                        
                       
                    </tbody>
                </table>
            </div>
           


        </div>




     );
}
 
export default InquiryList;
