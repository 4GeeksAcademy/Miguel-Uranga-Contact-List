import React from "react";
import { Link } from "react-router-dom";

export const ContactNavbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
                <Link to = "/contacts" className="btn btn-success">
                    If you see this green button, bootstrap is working
                </Link>
			</div>
		</nav>
	);
};