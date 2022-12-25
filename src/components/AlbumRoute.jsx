import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Januari from './photos/Januari'
import Februari from './photos/Februari'
import Maret from './photos/Maret'
import April from './photos/April'
import Mei from './photos/Mei'
import Juni from './photos/Juni'
import Juli from './photos/Juli'
import Agustus from './photos/Agustus'
import September from './photos/September'
import Oktober from './photos/Oktober'
import November from './photos/November'
import Desember from './photos/Desember'

function AlbumRoute() {
	return (
		<Routes>
				<Route path='/jan' element={<Januari />} />
				<Route path='/feb' element={<Februari />} />
				<Route path='/mar' element={<Maret />} />
				<Route path='/apr' element={<April />} />
				<Route path='/mei' element={<Mei />} />
				<Route path='/jun' element={<Juni />} />
				<Route path='/jul' element={<Juli />} />
				<Route path='/agu' element={<Agustus />} />
				<Route path='/sep' element={<September />} />
				<Route path='/okt' element={<Oktober />} />
				<Route path='/nov' element={<November />} />
				<Route path='/des' element={<Desember />} />
			</Routes>

	)
}

export default AlbumRoute