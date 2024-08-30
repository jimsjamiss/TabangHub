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
              <a href="/Dashboard" class="hover:underline block py-2 px-3 text-black bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 md:dark:text-black-500 dark:bg-green-600 md:dark:bg-transparent md:hover:text-green-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/Offers" class="hover:underline block py-2 px-3 text-black bg-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="/Volunteers" class="hover:underline block py-2 px-3 text-black bg-black-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Volunteers</a>
            </li>
            <li>
              <a href="/About-Us" class="hover:underline block py-2 px-3 text-black bg-black-700 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
            </li>
            <li>
            <a href="/Login" class="block py-2 px-3 text-black bg-black-700 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    

    <div class="mx-10 my-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-fit dark:border-white-700 dark:bg-white-100 ">           
      <img class="rounded-t-lg md:h-auto md:w-md md:rounded-none md:rounded-s-lg px-1 py-1 border-2" src="/image1.jpg" width={600}  alt=""></img>
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h1 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">Donations</h1>
          <p class="my-2 font-normal text-base text-gray-700 dark:text-gray-400">Donations in a volunteering project are essential for funding operations and supporting the project's mission. They can include monetary contributions, supplies, or services, directly enabling volunteers to make a greater impact.</p>
          <button type="button" class="my-7 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</button>
      </div>
    </div>

    <div class="mx-10 my-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-fit dark:border-white-700 dark:bg-white-100 ">           
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h1 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">Medical Assistance</h1>
          <p class="my-2 font-normal text-base text-gray-700 dark:text-gray-400">Medical assistance in a volunteering project ensures the health and safety of both volunteers and beneficiaries. This support can include providing first aid, medical supplies, and access to healthcare professionals, crucial for addressing any emergencies or health-related needs during the project.</p>
          <button type="button" class="my-7 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</button>
      
      </div>
      <img class="rounded-t-lg md:h-auto md:w-md md:rounded-none md:rounded-s-lg px-1 py-1 border-2" src="/image2.jpg" width={600}  alt=""></img>
    </div>

    <div class="mx-10 my-10 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-fit dark:border-white-700 dark:bg-white-100 ">           
      <img class="rounded-t-lg md:h-auto md:w-md md:rounded-none md:rounded-s-lg px-1 py-1 border-2" src="/image3.jpg" width={600}  alt=""></img>
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h1 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">First-Aid Seminars</h1>
          <p class="my-2 font-normal text-base text-gray-700 dark:text-gray-400">First-aid seminars in a volunteering project equip participants with essential skills to respond to emergencies effectively. These sessions ensure that volunteers are prepared to handle injuries or health issues, enhancing the overall safety and success of the project.</p>
          <button type="button" class="my-7 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</button>
      
      </div>
    </div>
  

    <footer class="bg-white rounded-lg shadow dark:bg-white m-4">
        <div class="w-full max-w-screen-xl mx-auto p-2 md:py-4">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/log.png" class="h-10" alt="Tabang-Hub Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Tabang-Hub</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Tabang-Hub™</a>. All Rights Reserved.</span>
        </div>
    </footer>


    </>
  );
}
