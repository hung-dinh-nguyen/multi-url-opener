import './App.css';
import React from 'react';
import UrlParser from './components/url-parser/url-parser.js';
import Previewer from './components/previewer/previewer.js';


/*
URL Verification & Separation Regexes

1. /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
2. /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
3. /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
4. /\b(https?|ftp|file):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/
5. /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
6. ^(http(s)?:\/\/)?(www.)?([a-zA-Z0-9])+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/[^\s]*)?$
*/

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
          preview: ""
      }; 
      this.handleChange = this.handleChange.bind(this);
      this.parser = this.parser.bind(this);
  }

  handleChange(e) {
      this.setState({
          input: e.target.value
      }); 
  }


  parser() {
    const re_url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/ig

    let input = this.state.input;
    let urls = input.match(re_url)
    var urlString = '';
    
    for (let i=0; i<urls.length; i++) {
      urlString =  (i+1) + " " + urls[i] + '\n'; 
    };
    console.log(urlString)

    this.setState({
      preview: urlString,
    })
  };

  render() {
    return (
    <div className="App">
        <div className="intro">
          <h1>Multi-URL Opener</h1>
            <h4>Tool to Open Multiple URLs at Once!</h4>

          <h2>Instructions</h2>
            <ol>
              <li>Put URLs into input text area</li>
              <li>Click on "Preview" to create a numbered list of links</li>
              <li>Press on "Open All" to open all links into new tabs</li>
            </ol>
        </div>
        <UrlParser input={this.state.input} onChange={this.handleChange} onClick={this.parser}/>
        <Previewer/> 
    </div>
    );
  }
}


export default App;
