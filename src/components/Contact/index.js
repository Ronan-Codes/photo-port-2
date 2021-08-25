import React, { useState } from "react";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        // setFormState({...formState, name: e.target.value})
        setFormState({...formState, [e.target.name]: e.target.value})
        // [e.target.name] 
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    // Can't be inside handleChange
    // console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>h
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;
// function name didn't have to be Contact