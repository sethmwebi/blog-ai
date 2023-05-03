import React from "react";

const Footer = () => {
	return (
		<footer className="bg-wh-900 text-wh-50 p-10">
			<div className="justify-between mx-auto gap-16 sm:flex">
				{/*First Column*/}
				<div className="mt-16 basis-1/2 sm:mt-0">
					<h4 className="font-bold">BLOG OF THE FUTURE</h4>
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						adipisci explicabo, velit dolorum quas atque blanditiis unde quod
						dolorem? Nihil ipsa magnam nesciunt laborum mollitia nemo,
						recusandae ex quisquam quas.
					</p>
					<p>&copy; Blog of the Future. All rights reserved.</p>
				</div>
				{/*Second Column*/}
				<div className="mt-16 basis-1/4 sm:mt-0">
					<h4 className="font-bold">Links</h4>
					<p className="my-5">Marca orc senectus</p>
					<p className="my-5">Some random link again</p>
					<p>Ullamcorper vivamus</p>
				</div>
				{/*Third Column*/}
				<div className="mt-16 basis-1/4 sm:mt-0">
					<h4 className="font-bold">Contact Us</h4>
					<p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
					<p>(333) 425-6825</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
