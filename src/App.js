import './App.css';

function App() {
let a = ['01','02','03','04','05']
let title = "Heading"

  return (
    <div className="App">
      <h1>{title}</h1>
      {
       a.map((i)=>{
         return <p>{i}</p>
        })
      }
    
    </div>
  );
}

export default App;
