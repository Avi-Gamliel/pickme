import { useState } from "react"

export default function InputPassword(props) {
    const { name, value, setValue } = props
    const [showPassword, setShowPassword] = useState(false)
    return <div className="w-full relative flex items-center ">
        <input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
            type={showPassword ? "text" : "password"}
            name={name}
            id={name}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
        />
        <span onClick={()=>setShowPassword(prev=>!prev)} className=" absolute right-2 cursor-pointer">
            {showPassword ? "👁️" : "👁️‍🗨️"}
        </span>
    </div>

}