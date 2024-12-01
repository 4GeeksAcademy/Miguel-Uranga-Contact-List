import React, { useContext, useEffect, useState} from "react";
import "../../styles/home.css";

import { useNavigate } from "react-router-dom";
import {Context} from '../store/appContext.js'

export const Contacts = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	const [state, setState] = useState(null)
	let contactID = 0;
	let contactName = "";

	useEffect(()=> {actions.loadSomeData()}, [store]);

	
	const deletionOfContact = (id) => {
		actions.DeleteContact(id);
		actions.loadSomeData();
		setState("a");
	}

	const deletionCheck = (id, contact) => {
		contactID = id;
		contactName = contact
	}
	return(
		<>
			
			<div className="container-fluid">
				<div id = "deletionModal"className="modal" tabindex="-1">
					<div className="modal-dialog">
						<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Are you sure you want to delete {contactName}</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => deletionOfContact(contactID)} >Save changes</button>
						</div>
						</div>
					</div>
				</div>
			<div className="d-flex justify-content-center">
				<h1> Hola, {store.usuario}!</h1>
			</div>

			<div className="d-flex justify-content-end">
				<button className='bg-success mb-4' style={{border: "none", height: "40px","border-radius": "5px", "margin-right": "12.5%"}}
					onClick={() => navigate("/addContact")}
				><div className='text-light fw-bold'>Add New Contact</div></button>
			</div>
			
			<div className="d-flex justify-content-center">
			
				<ul className="list-group w-75">
					{ store.contacts ? store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: "white", width:"100%"}}>
							<img className="me-5 ms-5 mt-4 mb-4" src="https://picsum.photos/536/354" style= {{"border-radius": "50%", width: "180px", height: "190px"}}/>

							<div className="container ms-5">
							
								<div className="fs-2">{item.name}</div>
								<div className="fs-3 mt-3"><i className="fa-solid fa-location-dot"></i> {item.address}</div>
								<div className="fs-4"><i className="fa-solid fa-phone"></i> {item.phone}</div>
								<div className="fs-5"><i className="fa-solid fa-envelope"></i> {item.email}</div>
							</div>

							<div className="d-flex mt-3">
								<div className="fs-5 me-5" onClick={() => navigate("/updateContact/" + (item.id))}><i className="fa-solid fa-user-pen"></i></div>
								<div className="fs-5 me-5" onClick = {deletionCheck(item.id, item.name)} data-bs-target="#deletionModal" data-bs-toggle= "modal"><i className="fa-solid fa-trash-can"></i></div>
							</div>
						</li>
					);
				}) : <p>No contacts right now!</p>
			}
				</ul>
			</div>
			
		</div>
		</>
		
	)
}