import React from 'react';

export default function ErrorPage({ err, errMsg, errStatus }) {
  return (
    <div>
      <h1>Error {console.log('errorpage')}</h1>
      <h2>{errMsg}</h2>
      <h3>{errStatus}</h3>
    </div>
  );
}
