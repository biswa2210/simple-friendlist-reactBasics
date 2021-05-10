import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return <main>
    <section className="container">
      <h3 style={{ fontWeight:'bold' }}>IMPOSSIBLE PROJECT ASSOCIATION</h3>
      <h3>Total {people.length} Members</h3>
      <List people={people}>
      </List>
      <button onClick={() => setPeople([])}>Clear All</button>
      <button onClick={()=>setPeople(data)}>Reset</button>
    </section>
  </main>;
}

export default App;
