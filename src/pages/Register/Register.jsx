const Register = ()=>{
    return(
        <div className="h-screen py-[20px] flex items-center justify-center bg-gray-900">
      <div className="flex shadow-2xl rounded overflow-hidden">
        {/* Left Image */}
        <div className="w-[400px] h-[600px]">
          <img
            src="https://i.ibb.co/99DYZGr7/h5.jpg"
            className="w-full h-full object-cover"
            alt="hotel"
          />
        </div>

        {/* Right Register Form */}
        <div className="w-[600px] bg-white p-10">
          <h2 className="text-3xl uppercase font-bold text-center mb-6 text-gray-800">Register</h2>
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-[18px] mb-2 font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[18px] mb-2 font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[18px] mb-2 font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[18px] mb-2 font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-warning font-bold text-white py-2 rounded transition duration-300"
            >
              Register
            </button>
          </form>

          {/* Already have account? */}
          <p className="text-center text-[18px] font-medium text-gray-600 mt-4">
            Already have an account? <span className="text-blue-600 hover:underline cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
    )
}

export default Register;