import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SignUp() {

    const [data, setData] = useState({});
    const [errors,setErrors] = useState();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/signUp',data)
        .then((res)=>{
            if(res.status == 201){
                navigate('/login')
            }
        })
        .catch((error)=>{
            setErrors(error?.response?.data?.message || "Invalid Login credentials")
        })
    }

  return (
    <div className="max-w-md mx-auto m-10 bg-white rounded-md shadow-md  ">
      <h1 class="text-lg font-semibold mb-4 text-center bg-blue-600 rounded-t-md p-4 text-white  ">
        Sign In
      </h1>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="m-4">
          <label
            for="username"
            className="block text-sm font-medium text-gray-700 "
          >
            Username:
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            className="mt-1 p-2  w-full border border-gray-400 rounded-md bg-gray-100  shadow-md "
          />
        </div>
        <div className="m-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700  "
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-400 rounded-md bg-gray-100 shadow-md "
          />
        </div> 
        <div>
          <div>{errors && <span className="text-red-600">{errors}</span>}</div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md m-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 border border-gray-800"
            >
              Submit
            </button>
          </div>
          <div className="flex justify-center">
            <button onClick={()=>navigate('/login')}> already have account: login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
