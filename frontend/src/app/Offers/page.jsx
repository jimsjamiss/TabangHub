export default function services(){
  return(
    <>
    <nav class="bg-white border-gray-200 dark:bg-white-900 dark:border-blue-700 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/log.png" class="h-18" alt="TabangHub logo" width={120} />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">TABANG-HUB</span>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
         <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
            <li>
              <a href="/Dashboard" class="block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-black-500 dark:bg-green-600 md:dark:bg-transparent md:hover:text-green-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/Offers" class="block py-2 px-3 text-black bg-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="/Volunteers" class="block py-2 px-3 text-black bg-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Volunteers</a>
            </li>
            <li>
              <a href="/About-Us" class="block py-2 px-3 text-black bg-black-700 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
            </li>
            <li>
            <a href="/Login" class="block py-2 px-3 text-black bg-black-700 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   
  <div class="">
    <ul class="flex flex-row justify-evenly">
      <li>
        <div class="max-w-xs mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/image1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">Feeding Program</h5>
            </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A feeding program provides meals to individuals in need, typically targeting vulnerable groups like children and the elderly, to combat hunger and malnutrition.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
             </a>
          </div>
       </div>
      </li>
  
      <li>
        <div class="max-w-xs mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
             <img class="rounded-t-lg" src="image2.jpg" alt="" />
            </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">Medical Checkup</h5>
            </a>
              <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">A medical checkup is a routine examination conducted by a healthcare professional to assess an individual's overall health.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Read more
               <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
           </a>
         </div>
        </div>
      </li>

      <li>
          <div class="max-w-xs mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="image3.jpg" alt="" />
            </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">First-Aid Seminar</h5>
                </a>
                <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">These seminars aim to equip individuals with the knowledge and confidence to provide immediate assistance in critical situations.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
              </div>
          </div>
       </li>
    </ul>
  </div>
</>
  );
}
