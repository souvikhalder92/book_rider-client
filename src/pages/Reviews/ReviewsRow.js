import React, { useEffect } from 'react';

const ReviewsRow = ({review,handleDelete,handleStatusUpdate}) => {
    const {_id,customer,bookName,message,service,status} = review;


   

    return (
        <tr>
        <th>
            <label>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </label>
        </th>
        <td>
            <div>
              
                <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50"></div>
                </div>
            </div>
        </td>
        <td>
            {bookName}
           
        </td>
        <td>{message}</td>
       
            <th>
                <label  htmlFor="my-modal" 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'Update'}</label>
                <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box">
                 
                    <h3 className="font-bold text-lg">Successfully Review Updated!<br/>
                    Please refresh the page.</h3>
                  
                  </div>
                </div>
                </div>
             
            </th>
          
    </tr>
        
             
               
    
    );
};

export default ReviewsRow;