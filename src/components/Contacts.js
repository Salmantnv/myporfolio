import React from 'react';

const Contacts = () => {
    return (
<div className = "contacts">
        <div className = "text-center">
            <h1>Contacts</h1>
            <p>Please insert you info and describe briefly your project. l will contact you as soon as possible</p>
        </div>
    <div className = "container">
        <div className = "row">
            <div className = "col-md-6 col-xs-12">
                {/** Name Input */}
                <input 
                id = "name"
                type = "text"
                className = "form-control"
                placeholder = "Name"
                name = "name"
                />

                {/** Number Input */}
                <input 
                id = "number"
                type = "text"
                className = "form-control"
                placeholder = "Number"
                number = "number"
                />

                {/** Email Input */}
                <input 
                id = "email"
                type = "email"
                className = "form-control"
                placeholder = "Email"
                email = "email"
                />

                {/** Subject Input */}
                <input 
                id = "subject"
                type = "text"
                className = "form-control"
                placeholder = "Subject"
                subject = "subject"
                />
            </div>

            <div className = "col-md-6 col-xs-12">
                <textarea 
                className = "form-control"
                placeholder="Please describe your project here"
                email = "email"
                type = "text"
                >
                </textarea>
                <button className= "contact-btn" type="submit">
                    Contact me
                </button>
            </div>
        </div>
    </div>
</div>
    )
}

export default Contacts;
