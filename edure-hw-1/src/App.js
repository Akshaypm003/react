import './App.css';
import Child from './Child';

function App() {


  return (
    <>
      <h2>Hii.. i'm parent</h2>
      <form action="/path">
        <label htmlFor="name">Enter Name</label> <br />
        <input type='text' name='name'/><br />
        <button type="submit">Submit</button>
      </form>
      <Child/>
    </>
  );
}

export default App;

