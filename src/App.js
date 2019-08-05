import React from 'react';

/* eslint-disable no-console */
fetch(config.url)
    .then(response => response.json())
    .then(json => console.log(json));
/* eslint-enable no-console */

const App = () => <div>{config.name}</div>;

export default App;
