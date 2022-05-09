import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-primary text-center m-5'>Blogs</h1>

            <h5>Q: Difference between javascript and nodejs</h5>
            <p>A: JavaScript is a scripting language that runs in browsers. Node.js, on the other hand, is a interpreter or operating environment for Javascript that includes all of the necessary libraries.</p>

            <h5>Q: When should you use nodejs and when should you use mongodb?</h5>
            <p>A: NodeJS and MongoDB are two distinct technologies. MonogDB is a database system that allows you to efficiently store documents in a database and execute operations such as data updates and document searches based on certain criteria.
                The responsibility of NodeJS is to run your application.</p>

            <h5>Q: What is the purpose of jwt and how does it work?</h5>
            <p>A: JSON Web Token (JWT) is an open standard (RFC 7519) that specifies a compact and self-contained method for securely communicating information as a JSON object between parties. Because it is digitally signed, this information can be checked and trusted.</p>
        </div>
    );
};

export default Blogs;