import React from 'react';

const Blog = () => {
    return (
        <div>
        <h1 className='mt-12 font-bold text-4xl text-center text-orange-400'>Blogs</h1>
        <div className='w-3/4 mx-auto mt-12 mb-40'>
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
<div className="collapse-title text-xl font-medium">
1. what is the difference between Sql and NoSql?
</div>
<div className="collapse-content"> 
<p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
</div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
<div className="collapse-title text-xl font-medium">
2. what is jwt and how does it works?
</div>
<div className="collapse-content"> 
<p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
</p>
</div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
<div className="collapse-title text-xl font-medium">
3. what is the difference between Js and NodeJs?
</div>
<div className="collapse-content"> 
<p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
</div>
</div>
<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-1">
<div className="collapse-title text-xl font-medium">
4. How does node js handle multiple requests at a same time?
</div>
<div className="collapse-content"> 
<p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
</div>
</div>
</div>
    </div>
    );
};

export default Blog;