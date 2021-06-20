import React, {useState} from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import{ init } from 'emailjs-com';
init("user_A2RuXQ7HCNovc1Ob5ksvh");


const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceId = "service_ID";
  const templateId = "template_ID";
  const userId = "user_A2RuXQ7HCNovc1Ob5ksvh";
  

  const onSubmit = (data, r) => {
    sendEmail(
      serviceId,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userId
    )
    r.target.reset();
  }

  
  const sendEmail = (serviceId, templateId, variables, userId) => {
    emailjs.send(serviceId, templateId, variables, userId)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="contacts" id = "contacts">
      <div className="text-center">
        <h1>contact me</h1>
       <p>Please fill out the form and describe you project needs and I'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
                <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name='name'
                  {...register('name',{required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
               
              </span>
              
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name = "number"
                  {...register('number',{
                      required: "Please add your phone number",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                
              </span>
                
              
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register('email',{required: "Please provide you email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"}
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                
              </span>
              
              
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name = "subject"
                  {...register('subject',{required: "OOPS, you forget to add the subject."})
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
               
              </span>
             
              
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name = "description"
                  {...register('description',{required: "Please describe shortly your project needs..."})
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
              </span>
             <button className="btn-main-offer contact-btn" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
