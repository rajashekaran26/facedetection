import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3">
                {"This will detect faces in your images"}
            </p>
            <div className="center">
                <div className="form center pa4 shadow-5 br3">
                    <input type="text" 
                            className="f4 w-70 pa2 center"/>
                    <button className="f4 w-30 grow link pv2 ph3 dib white bg-light-purple pointer">Detect</button>
                </div>                
            </div>
        </div>
    );
}

export default ImageLinkForm;