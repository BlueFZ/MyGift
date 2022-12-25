import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';
// import { data } from './data';

export default function Tes() {
  const params = useParams();
  const bulan = params.bulan;

  const foto = data[bulan];
  console.log(foto);

  // console.log(params.bulan);
  return (
    <div>
      {foto.map((e) => (
        <img style={{ maxWidth: '90%' }} src={e} />
      ))}
    </div>
  );
}
