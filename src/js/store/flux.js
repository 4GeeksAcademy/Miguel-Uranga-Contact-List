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
						console.log(data)
						setStore({...getStore, usuario: data.slug, contacts: data.contacts});
						console.log(getStore())
					} else {
						console.log('error: ', response.status, response.statusText);
						/* Handle the error returned by the HTTP request */
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
						console.log(data)
						//setStore({...getStore, usuario: data.slug, contacts: data.contacts});
						console.log(getStore())
					} else {
						console.log('error: ', response.status, response.statusText);
						/* Handle the error returned by the HTTP request */
					};
			}
		}
	};
};

export default getState;
