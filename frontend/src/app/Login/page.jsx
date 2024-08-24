import Image from 'next/image'
import Link from 'next/link';
import Register from '../Register/page';



export default function Home() {
  return (
    <div className= "body" >   
      <form class="max-w-sm mx-auto" >
        <div className="logo">
         {/* <Image src="src/styles/download.png"></Image> */}
          <label>Welcome</label>
       </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
        </div>

        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-black-900 dark:text-black">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
            <label for="remember" class="ms-2 text-sm font-medium text-black-900 dark:text-black-300">Remember me</label>
            <Link href="/Register" class="block mb-2 text-sm font-medium text-black-900 dark:text-black px-20 underline text-blue-800 ml-20">Create Account</Link>
        </div>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
              rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
             dark:focus:ring-green-800">
             Login
            </button> 
        </form>
    </div>
  );
}
