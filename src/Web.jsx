import React from 'react'
import Homepage from './pages/Homepage'
import Album from './pages/Album'
import Wish from './pages/Wish'
import { Link, Route, Routes } from 'react-router-dom'

function Web() {
	return (
		<>
			<nav>
					<ul>
						<li>
						<a><Link to='/'>Milestone</Link></a>
						</li>
						<li>
							<a><Link to='/album'>Album</Link></a>
						</li>
						<li>
							<a><Link to='/wish'>Wish</Link></a>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/album' element={<Album />} />
					<Route path='/wish' element={<Wish />} />
				</Routes>
		</>
	)
}

export default Web