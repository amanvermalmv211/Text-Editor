import React from 'react'
import myIcon from './favicon-96x96.png'

const Navbar = (props) => {
    return (
        <header class={`body-font ${props.mode === "light" ? "bg-green-400" : "bg-black"}`}>
            <div class="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
                <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={myIcon} alt="" className='w-10'/>
                    <span class={`ml-3 ${props.mode === "light" ? "text-black" : "text-white"} text-xl`}>Text-Editor</span>
                </div>

                <div className={`navtext font-bold md:text-4xl text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 text-center`}>Enter text to Analise</div>
                
                <button class={`inline-flex items-center ${props.mode === "light" ? "bg-slate-300 hover:bg-gray-200 text-black" : "bg-[#245074] hover:bg-[#042743] text-white"} border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0`} onClick={props.toggleMode}> {props.mode === "light" ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </header>
    )
}

export default Navbar