import './url-parser.css'


const UrlParser = (props) => {
    return (
        <div className='input-div'>
            <h2>Input</h2>
            <textarea 
                id='input-text'
                className='input-text'
                onChange={props.onChange}
                type='text'
                value={props.input}
            />
            <button 
                id='input-button'
                className='input-button'
                onClick={props.onClick}
            >PREVIEW</button>
        </div>
    )
};

export default UrlParser;

