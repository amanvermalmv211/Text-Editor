import React, { useState } from 'react';
import copy from "copy-to-clipboard";
// npm install --save react-copy-to-clipboard

const TextForm = (props) => {

    const [text, setText] = useState("");

    const [myStr, dispStr] = useState("");

    const handleClick = () => {
        let newTxt = text.toUpperCase();
        dispStr(newTxt);
        props.showAlert("Text converted to UPPER-CASE.", "Success", "bg-green-200");
    }

    const handleClicklower = () => {
        let newTxt = text.toLowerCase();
        dispStr(newTxt);
        props.showAlert("Text converted to lower-case.", "Success", "bg-green-200");
    }

    const handleClickClear = () => {
        setText("");
        dispStr("");
        props.showAlert("All text got cleared", "Success", "bg-red-300");
    }

    const handleClickCount = () => {
        let str = "No. of words is :  " + text.split(/\s+/).filter((element) => { return element.length !== 0 }).length + "\nAnd No. of character is :  " + text.length;
        dispStr(str);
        props.showAlert("Check the text preview section.", "Success", "bg-green-200");
    }

    const handleClickCopy = () => {
        copy(myStr);
        props.showAlert("Text copied to clip board.", "Success", "bg-green-200");
    }

    const handleClickRemoveExtraSpace = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.showAlert("Extra spaces removed.", "Success", "bg-green-200");
    }

    const hangleOnChange = (event) => {
        setText(event.target.value);
        dispStr(event.target.value);
    }

    return (
        <div className={`flex flex-col items-center justify-center ${props.mode === "light" ? "text-black" : "text-white"}`}>
            <div className={`container flex items-center justify-center flex-col`} >
                <div className="mb-3 flex items-center justify-center">
                    <textarea placeholder='Enter you text here' value={text} onChange={hangleOnChange} className={`mytext placeholder:text-black form-control bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-5 p-1 border lg:w-[50rem] md:w-[30rem] w-72 h-48 md:h-60 text-black`} id="myTxt"></textarea>
                </div>
                <div className="container flex flex-wrap items-center justify-center">
                    <button className="cursor-pointer my-1 border px-2 py-1 mx-1 md:mx-2 bg-green-400 hover:bg-green-500" disabled={text.length === 0} onClick={handleClick}>UPPER CASE</button>
                    <button className="cursor-pointer my-1 border px-2 py-1 mx-1 md:mx-2 bg-green-400 hover:bg-green-500" disabled={text.length === 0} onClick={handleClicklower}>lower case</button>
                    <button className="cursor-pointer my-1 border px-2 py-1 mx-1 md:mx-2 bg-green-400 hover:bg-green-500" disabled={text.length === 0} onClick={handleClickCount}>Text Count</button>
                    <button className="cursor-pointer my-1 border px-2 py-1 mx-1 md:mx-2 bg-green-400 hover:bg-green-500" disabled={text.length === 0} onClick={handleClickCopy}>Copy text</button>
                    <button className="cursor-pointer my-1 border px-2 py-1 mx-1 md:mx-2 bg-green-400 hover:bg-green-500" disabled={text.length === 0} onClick={handleClickClear}>Clear text</button>
                    <button className="cursor-pointer my-1 border px-2 py-1 mx-1 md:mx-2 bg-green-400 hover:bg-green-500" disabled={text.length === 0} onClick={handleClickRemoveExtraSpace}>Remove extra spaces</button>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center my-5 lg:w-[50rem] md:w-[30rem] w-64" >
                <h2 className='font-bold text-2xl'>Text Preview</h2>
                <p>{text.length > 0 ? myStr : "Nothing to Preview : Please enter something into the text area" }</p>
            </div>
        </div>
    )
}

export default TextForm