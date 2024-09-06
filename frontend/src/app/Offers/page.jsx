import Navbar from '../dashboard/Navbar/page';

export default function services(){
  return(
    <>
    <Navbar></Navbar>

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
