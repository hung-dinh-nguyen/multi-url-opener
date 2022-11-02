import './previewer.css'


const Previewer = (props) => {
    return (
        <div className='preview-div'>
            <h1>Preview</h1>
            <textarea 
                id='preview-text'
                class='preview-text'
                onChange={props.onChange}
                type='text'
                value={props.preview}
                readOnly
            />
            <button 
                id='preview-button'
                className='preview-button'
                onClick={props.onClick}
            >Open</button>
        </div>
    )
};

export default Previewer;