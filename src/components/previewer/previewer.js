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
        </div>
    )
};

export default Previewer;