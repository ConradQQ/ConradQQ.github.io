
const getQuotes = () => {
fetch('https://type.fit/api/quotes')
	.then(response => response.json())
	.then((data) => {
    let randomIndex = Math.floor((Math.random() * data.length));

    document.getElementById('text').innerHTML = `"${data[randomIndex].text}"`
    document.getElementById('author').innerHTML = `- ${data[randomIndex].author}`
    
  })
	.catch(err => console.error(err));
 
}




getQuotes()
function App() {

  return (    
    <div id="quote-box" className="d-grid gap-3">
      <div className="row">
        <div className="col-sm-12">
        <h1 id="title"></h1>
        </div>
        
      </div>
      <div className="row">
        <div className="col-sm-12 mx-xl-2">
          <h4 id="text"></h4>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
        <p className="me-xl-5" id="author"></p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
        <button className="btn btn-dark" onClick={getQuotes} id="new-quote">New Quote</button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/intent/tweet" className="me-2x"  id="tweet-quote"><i className="bi bi-twitter fa-2x"></i></a>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-12">
        </div>
      </div>
    </div>

  );
}


export default App;
