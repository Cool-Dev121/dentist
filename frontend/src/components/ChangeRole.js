import { useState } from "react"


export default function ChangeRole() {
    const [role, setRole] = useState();
    const Changerole = (e)=>{

        setRole(e.target.value);

    }


    return (
        <div className="w-1/3 lg:w-32 absolute left-1/3">
            <select id="underline_select" class="block py-2.5 px-4 mx-2 my-4 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={Changerole}>
                <option selected>Choose a Role</option>
                <option value='1'>Dentists</option>
                <option value='2'>Laboratory</option>
            </select>
        </div>

    )
}