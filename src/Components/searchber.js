import React,{useState}from 'react'

const Searchber = (props)=>{
//Inisialize States
    const [term,setTerm] = useState('');

//CallBacks
    const onInputSubmit = (e)=>{
        setTerm(e.target.value);
    }

    const onFormSubmit = (e)=>{
        e.preventDefault();
        props.onsubmit(term)
    }

//Rendering Components
    return(
        <div className = "search-bar ui segment">
            <form onSubmit = {onFormSubmit} className = "ui form">
                <div className = "field">
                    <label>Video Search</label>
                    <input type = "text" value = {term} onChange = {onInputSubmit}/>
                </div>
            </form>
        </div>
    );
}


export default Searchber;