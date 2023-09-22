import './App.css'
import Employee from './Employee'



function App() {

  const emp = [
    {name:'Akshay', age:22},
    {name:'Harry', age:22} ,
    {name:'Stella', age:22} ,
    {name:'Josh', age:22} ,
    {name:'Sidarth', age:22} 
  ]
    
     

  return (
    <div>
     
      {
        emp.map(
          (obj,index)=> {
            return(<Employee key={index} {...obj} />)
          }
        )
      }

    </div>
  );
}

export default App;


