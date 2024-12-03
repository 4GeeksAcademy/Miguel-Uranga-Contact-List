const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			usuario: [],
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				//Get the Contacts of the user
				
					//Solicitud GET del API
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel-U');
					if (response.ok) {
						const data = await response.json();
						//console.log(data)
						setStore({...getStore, usuario: data.slug, contacts: data.contacts});
						//console.log(getStore())
						return data.contacts
					} else {
						console.log('error: ', response.status, response.statusText);
						/* Handle the error returned by the HTTP request */
						getActions().CreateUser();
					};
		
				
			},
			AddContact: async (contactInfo) => {

				const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel-U/contacts', {
					method: "POST",
					body: JSON.stringify(contactInfo),
					headers: {
					"Content-Type": "application/json"
					}
				});
					if (response.ok) {
						const data = await response.json();
						getActions().loadSomeData()
			
					} else {
						console.log('error: ', response.status, response.statusText);
						/* Handle the error returned by the HTTP request */
					};
			},
			UpdateContact: async (contactInfo, id) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel-U/contacts/'+id, {
					method: "PUT",
					body: JSON.stringify(contactInfo),
					headers: {
					"Content-Type": "application/json"
					}
				});
					if (response.ok) {
						const data = await response.json();
						console.log(data)
						//setStore({...getStore, usuario: data.slug, contacts: data.contacts});
						console.log(getStore())
					} else {
						console.log('error: ', response.status, response.statusText);
						/* Handle the error returned by the HTTP request */
					};
			},
			DeleteContact: async (id) => {
				//Borrar el usuario
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel-U/contacts/'+id, {
					method: "DELETE"
					});
				if (response.ok) {
					getActions().loadSomeData();
					alert("User deleted!")
				} else {
					alert("This user does not exist")
					console.log('error: ', response.status, response.statusText);
					/* Handle the error returned by the HTTP request */
					return {error: {status: response.status, statusText: response.statusText}};
				};
			},
			//creation of the user
			CreateUser: async () => {
			//Creacion del usuario
			const response = await fetch('https://playground.4geeks.com/contact/agendas/Miguel-U', {
				method: "POST",
				headers: {
				  "Content-Type": "application/json"
				}
			  });
			if (response.ok) {
				const data = await response.json();
				setUserName(data.name)
			} else {
				console.log('error: ', response.status, response.statusText);
				/* Handle the error returned by the HTTP request */
				return {error: {status: response.status, statusText: response.statusText}};
			};
		}
		}
	};
};

export default getState;
