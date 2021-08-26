// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Profile from './components/profile'
import user from './user.json';
import statisticalData from './statistical-data.json';
import Statistics from './statistics/statistics';


export default function App() {
  return (
    <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

      <Statistics
        
        title="Upload stats"
        stats={statisticalData} />
{/* <Statistics stats={statisticalData.stats} /> */}
      </>
  );
}

