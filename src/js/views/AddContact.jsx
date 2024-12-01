import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import {Context} from '../store/appContext.js'


export const AddContact = () => {
    const contactInfo = {
        name: "",
        phone: "",
        email: "",
        address: ""
    }
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const contactAddition = (contactInfo) =>{
        actions.AddContact(contactInfo)
        alert("Successfully added "+ contactInfo.name + "!")
        navigate("/contacts")
    }

    return (
        <div className='container-fluid w-75'>
            <label for="full_Name" className="form-label fw-bold">Full Name</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" id="full_Name" 
                    onChange={
                     e=> {
                        contactInfo.name = e.target.value
                        //console.log(contactInfo.name)
                     }
                    }
                />
            </div>

            <label for="email" className="form-label fw-bold">Email</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter e-mail" aria-label="Username" id="email"
                    onChange={
                        e=> {
                           contactInfo.email = e.target.value
                           //console.log(contactInfo.name)
                        }
                       }
                />
            </div>

            <label for="phone" className="form-label fw-bold">Phone</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter phone (xxx) xxx-xxxx" aria-label="Username" id="phone"
                    onChange={
                        e=> {
                           contactInfo.phone = e.target.value
                           //console.log(contactInfo.name)
                        }
                       }
                />
            </div>

            <label for="address" className="form-label fw-bold">Address</label>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Full Name" aria-label="Username" id="address"
                
                onChange={
                    e=> {
                       contactInfo.address = e.target.value
                       //console.log(contactInfo.name)
                    }
                   }/>
            </div>

            <button className='w-100 bg-primary' style={{border: "none", height: "40px","border-radius": "5px"}}
                onClick={() => contactAddition(contactInfo)}
            ><div className='text-light fw-bold'>save</div></button>
            <Link to="/contacts">Or get back to contacts</Link>

        </div>
    )
}