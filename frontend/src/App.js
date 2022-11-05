import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm){
        fetch("http://localhost:5000/query_github/"+searchTerm)
        .then(
            (response) => response.json(),
            (error) => {
                console.log("Error in query", error);
            }
        )
        .then(
            (data) => {
                if (data){
                    setSuggestions(data);
                }
                else {
                    console.log("Unable to query API");
                };
            }
        );
      } else {
        setSuggestions([])
      }
    }, 800);

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Search for GitHub Repositories:</h3>
        <input className="input-bar" placeholder="Input Text Here..." onChange={(e) => { setSearchTerm(e.target.value) }}/>
        <table>
          <tbody>
            {suggestions.map((suggestion, i)=>{
              return (
                <tr key={i}>
                  <td><a href={suggestion.url} target="_blank">{suggestion.name}</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
