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

    

    <div class="mx-10 my-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-fit dark:border-white-700 dark:bg-white-200 dark:hover:bg-gray-700">           
      <img class="object-none w-full rounded-t-lg h-50 md:h-auto md:w-md md:rounded-none md:rounded-s-lg" src="/image1.jpg" alt=""></img>
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>
    </>
  );
}
