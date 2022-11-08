import React from 'react';

const ReviewsRow = ({review}) => {
    const {customer,bookName,message} = review;
    return (
        <tr>
        <th>
            <label>
                <button className='btn btn-ghost'>X</button>
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
          
        </th>
    </tr>
    );
};

export default ReviewsRow;