import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState("")
    const [output, setOutput] = useState("")
    const [uppercase, setUppercase] = useState(false)
    const [punc, setPunc] = useState(false)
    const [outputBox, setOutputBox] = useState(false)

    
    let PerformOperations = (e)=>{
        e.preventDefault();
        let NewText = text;
        if (uppercase) {
            NewText = NewText.toUpperCase();
        }
        if(punc){
            NewText = NewText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        }
        setOutput(NewText);
        setOutputBox(true);
        props.showAlert("Text Converted Successfully", "success");
    }

    let ClearText = (e) => {
        e.preventDefault();
        setText("");
        setOutput("");
        setOutputBox(false);
        props.showAlert("Text Cleared Successfully", "success");
    }

    return (
        <>
            <form id="1">
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Enter Text</label>
                    <textarea 
                        className="form-control" 
                        value={text} 
                        style={
                            {
                                backgroundColor: props.mode==="dark"?"#333333":"#ffffff", 
                                color: props.mode==="light"?"#333333":"#ffffff"
                            }
                        } 
                        onChange={(e)=>setText(e.target.value)} 
                        id="text" 
                        rows="5"
                    >

                    </textarea>
                </div>
                <div className="d-flex">
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" value={uppercase} onChange={(e)=>setUppercase(!uppercase)} id="uppercase" />
                        <label className="form-check-label" htmlFor="uppercase">
                            Convert To UPPERCASE
                        </label>
                    </div>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" value={punc} onChange={(e)=>setPunc(!punc)} id="removepunc" />
                        <label className="form-check-label" htmlFor="removepunc">
                            Remove Punctuations
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <button className="btn btn-success my-3 mx-1" onClick={PerformOperations}>Convert</button>
                        <button className="btn btn-danger my-3 mx-1" onClick={ClearText}>Clear Text</button>
                    </div>

                    <div className="d-flex">
                        {text.split(" ").length} Word and {text.length} Characters
                    </div>
                </div>
            </form>
            
            {
                outputBox ? (
                    <>
                        <h3 className="float-left">Your Output</h3>
                        <p>
                            {output}
                        </p>
                    </>
                ) : (
                    ""
                )
            }
        </>
    )
}

export default TextForm
