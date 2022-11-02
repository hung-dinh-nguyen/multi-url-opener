import './App.css';
import React from 'react';
import UrlParser from './components/url-parser/url-parser.js';
import Previewer from './components/previewer/previewer.js';

/*
input_ex = `https://www.google.com/
https://www.bing.com/
https://www.yahoo.com/
https://www.linkedin.com/
https://www.amazon.com/
http://web.archive.org/web/20101224003257/http://webmasters.stackexchange.com/
http://example/cat/http://example/dog`
*/


/*
const re_url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig

function inputParser(input) { 
    return input.match(re_url)
}

var arrUrls = inputParser(input_ex)
console.log(arrUrls)

function openLinks(urls) {
    for (let link in urls) {
        window.open(link, "_blank"); 
    }
}
*/

class App extends React.Component{
  constructor(props) {
      super(props); 
      this.state = {
          input: "Enter URLs Here",
          preview: "test",
      }; 
      this.handleChange = this.handleChange.bind(this);
      this.parser = this.parser.bind(this);
      this.opener = this.opener.bind(this);
  }

  handleChange(e) {
      this.setState({
          input: e.target.value
      }); 
      console.log(this.state.input)
  }


  parser() {
    const re_url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig

    let input = this.state.input;
    var urls = input.match(re_url)
    var urlString = '';
    var i = 1

    console.log(urls);
    
    urls.forEach(url => {
      urlString =  urlString + (i++) + " - " + url + '\n'; 
    });
    
    console.log(urlString);

    this.setState({
      preview: urlString
    })
  };
 
  opener() {
    const re_url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig

    let input = this.state.input;
    var urls = input.match(re_url)

    console.log(urls);

    urls.forEach(url => {
      window.open(url)
    })
  }
 
  render() {
    return (
    <div className="App">
        <div className="intro">
          <h1>Multi-URL Opener</h1>
            <h4>Tool to Open Multiple URLs at Once!</h4>
          <div className="instructions">
            <h2>Instructions</h2>
              <ol>
                <li>Enter one full URL address per line</li>
                <li>Make sure to allow pop-ups and redirects for this site</li>
                <li>Click on "Preview" to create a numbered list of links</li>
                <li>Press on "Open" to open all links into new tabs</li>
              </ol>
          </div>
         
        </div>
        <UrlParser input={this.state.input} onChange={this.handleChange} onClick={this.parser}/>
        <Previewer preview={this.state.preview} onClick={this.opener}/> 
    </div>
    );
  }
}


export default App;
