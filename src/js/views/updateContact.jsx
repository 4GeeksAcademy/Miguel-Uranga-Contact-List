import React, { useState, useContext, useEffect} from "react";
import "../../styles/home.css";

import { Link, useNavigate, useParams} from "react-router-dom";
import {Context} from '../store/appContext.js'


export const UpdateContact = props => {
    const params = useParams();
    const [contactInfo, setContactInfo] = useState({})
    const { store, actions } = useContext(Context);
    let contactToChange = {...store.contacts.find(x => x.id == params.id)}

    return (<>
        <div className='container-fluid w-75'>
                <h1 className="mb-5">Changing {contactToChange.name}'s information!</h1>
                <label for="full_Name" className="form-label fw-bold">Full Name</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder={contactToChange.name} aria-label="Username" id="full_Name" 
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
                    <input type="text" className="form-control" placeholder={contactToChange.email} aria-label="Username" id="email"
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
                    <input type="text" className="form-control" placeholder={contactToChange.email} aria-label="Username" id="phone"
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
                    <input type="text" className="form-control" placeholder={contactToChange.address} aria-label="Username" id="address"
                    
                    onChange={
                        e=> {
                        contactInfo.address = e.target.value
                        //console.log(contactInfo.name)
                        }
                    }/>
                </div>

                <button className='w-100 bg-primary' style={{border: "none", height: "40px","border-radius": "5px"}}
                    onClick={() => actions.UpdateContact(contactInfo, params.id)}
                ><div className='text-light fw-bold'>save</div></button>
                <Link to="/contacts">Or get back to contacts</Link>
        </div>
    </>)
}