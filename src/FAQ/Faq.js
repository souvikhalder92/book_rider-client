import React from 'react';

const Faq = () => {
    return (
        <div>
               <div>
            <h1 className='mt-16 font-bold text-4xl text-center text-yellow-600'>Frequently Asked Questions</h1>
            <div className='w-3/4 lg:mx-auto mt-12 mb-20 mx-16'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  1. May I purchase a magazine subscription by check or money order?
  </div>
  <div className="collapse-content"> 
    <p>You can purchase 12-month print/online combo subscription with a check or money order in U.S. currency drawn on a U.S. bank. We are unable to accept check or money order payments for monthly subscriptions. We will activate your subscription when we receive your check or money order, and notify you by email when this occurs. </p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
  <div className="collapse-title text-xl font-medium">
  2. What is your cancellation policy?
  </div>
  <div className="collapse-content"> 
    <p>If you have a problem with service, please let us know by sending an email to us and we will do our best to resolve the problem for you. Please call 1-800-316-9361 from 9:00 am to 5:00 pm CST Monday through Friday, or email us with your full name, address and daytime phone number. To help us improve the service for all of our subscribers, we would also ask you to let us know why you want to cancel.

    </p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
  <div className="collapse-title text-xl font-medium">
 3. How long does it take for my membership to be activated from the time payment is made?
  </div>
  <div className="collapse-content"> 
    <p>As soon as your payment is authorized and you choose a username and password, you have immediate access to  book review database.</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
  <div className="collapse-title text-xl font-medium">
 4. What is the billing schedule?
  </div>
  <div className="collapse-content"> 
    <p>Annual subscribers are billed the day they sign up.</p>
  </div>
</div>
</div>
        </div>
        </div>
    );
};

export default Faq;