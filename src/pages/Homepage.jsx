import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Album from './Album'
import Wish from './Wish'

function Homepage() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/album'>Album</Link>
					</li>
					<li>
						<Link to='/wish'>Wish</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/album' element={<Alb um />} />
				<Route path='/wish' element={<Wish />} />
			</Routes>
		</>
	)
}

export default Homepage