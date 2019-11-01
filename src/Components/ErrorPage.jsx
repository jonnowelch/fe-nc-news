import React from 'react';

export default function ErrorPage({ err, errMsg, errStatus }) {
  return err ? (
    <div>
      <h1>Error</h1>
      <h2>{errMsg}</h2>
      <h3>{errStatus}</h3>
    </div>
  ) : (
    <div>
      <h1>Error</h1>
      <h2>You have selected a bad path</h2>
    </div>
  );
}
