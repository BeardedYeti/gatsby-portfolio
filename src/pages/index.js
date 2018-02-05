import React from "react"
import Link from "gatsby-link";

export default () => 

	<div style={{ color: `blue` }}>
		<h1>Hello Yeti!</h1>
		<p>Woah!</p>
		<img src="https://source.unsplash.com/random/400x200" alt="" />
		<br />
		<div>
			<Link to="/page-2/">Link</Link>
		</div>
		<div>
			<Link to="/counter/">Counter</Link>
		</div>
	</div>
