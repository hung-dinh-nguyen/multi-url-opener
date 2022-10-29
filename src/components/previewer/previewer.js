import './previewer.css'


const Previewer = (props) => {
    return (
        <div className='preview-area'>
            <h1>Preview</h1>
            <textarea 
                id='preview-text'
                onChange={props.onChange}
                type='text'
                value={props.preview}
                readOnly
            />
            <button 
                id='preview-button'
                className='preview-button'
                onClick={props.onClick}
            />
        </div>
    )
};

export default Previewer;