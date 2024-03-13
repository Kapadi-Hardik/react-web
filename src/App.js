import './App.css';

function App() {
  let headings = ['h1', 'h2', 'h3', 'h4', 'h5'];
  let title = "Heading Tag";

  return (
    <div className="App">
      <h1>{title}</h1>
      {headings.map((heading, index) => {
        const HeadingTag = heading;
        return <HeadingTag key={index}>{heading}</HeadingTag>;
      })}
    </div>
  );
}

export default App;
