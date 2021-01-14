import React, { useState } from 'react';

const Home = () => {
  const [statusCode, setStatusCode] = useState('');
  const [explaination, setExplaination] = useState('');

  return (
    <section>
      <form>
        <lable htmlFor="status-code-input">Please Enter Status Code</lable>
        <input  
          id="status-code-input"
          name="status-code"
          type="number"
          value={statusCode}
          placeholder="i.e 201"
          onChange={(e) => setStatusCode(e.target.value)}
        >
        </input>
        <lable htmlFor="explaination-input">What does {statusCode || 'it'} represents?</lable>
        <input  
          id="explaination-input"
          name="status-explaination"
          type="text"
          value={explaination}
          placeholder="i.e Created"
          onChange={(e) => setExplaination(e.target.value)}
        >
        </input>
      </form>
    </section>
  )
}

export default Home