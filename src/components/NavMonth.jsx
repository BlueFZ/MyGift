import React from 'react'
import { Link } from 'react-router-dom';


function NavMonth() {
	return (
		<div className="navMonth">
				<ul>
					<Link className='a' to='/jan'>Januari</Link>
					<Link className='a' to='/feb'>Februari</Link>
					<Link className='a'>Maret</Link>
					<Link className='a'>April</Link>
				</ul>

				<ul>
					<Link className='a'>Mei</Link>
					<Link className='a'>Juni</Link>
					<Link className='a'>Juli</Link>
					<Link className='a'>Agustus</Link>
				</ul>

				<ul>
					<Link className='a'>September</Link>
					<Link className='a'>Oktober</Link>
					<Link className='a'>November</Link>
					<Link className='a'>Desember</Link>
				</ul>
			</div>
	)
}

export default NavMonth