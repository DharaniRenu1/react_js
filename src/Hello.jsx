


import React from 'react';

class Hello extends React.Component
{
	render()
	{
		return(
				<div>Hai Tamilarasi
				<Hai/>
				<Get/>
				</div>
		);
	}
}

class Hai extends React.Component
{
	render()
	{
		return(
		<div>
				<h1>Dharani</h1>
				</div>
		);
	}
}

class Get extends React.Component
{
	render()
	{
		return(
		<div>
		<h1>How are you</h1>
		</div>
		);
	}
}
export default Hello;