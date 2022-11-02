import './previewer.css'


const Previewer = (props) => {
    return (
        <div className='preview-div'>
            <h2>Preview</h2>
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
            >OPEN</button>
        </div>
    )
};

export default Previewer;