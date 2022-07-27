import React from 'react';

const Form = (props) =>{

    const handleChange = event =>{
        const {name, value} = event.target;
        props.change(name, value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.submit();
    }
    return(
        <form onsubmit={handleSubmit}>
            <label>Name
                <input placeholder="Enter your name here!" value="props.values.name" name="name" onChange={handleChange}/>
            </label>
            
            <label>Email
                <input placehholder="Enter your email here!" value="props.values.email" name="email" onChange={handleChange}/>
            </label>

            <label>Role
                <input placehholder="Enter your role here!" value="props.values.role" name="role" onChange={handleChange}/>
            </label>

            <input type="submit" value="Create your team!"/>
        </form>
    )
}