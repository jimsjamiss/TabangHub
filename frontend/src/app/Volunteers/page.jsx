import Image from 'next/image';
import Navbar from '../dashboard/Navbar/page'
import Card1 from './components/card1';
import Card2 from './components/card2';

export default function Dashboard(){
  return(
    <><></>

   <Navbar></Navbar>

    <div className="flex justify-center flex-wrap">
      <div className='my-3 mx-4'><Card1></Card1></div>
      <div className='my-3 mx-4'><Card2></Card2></div>
      <div className='my-3 mx-4'><Card1></Card1></div>
      <div className='my-3 mx-4'><Card2></Card2></div>
      <div className='my-3 mx-4'><Card1></Card1></div>
      <div className='my-3 mx-4'><Card2></Card2></div>
      
    </div>
    </>
  );
  
}