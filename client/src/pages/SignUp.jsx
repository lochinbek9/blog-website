import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto text-black flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
        <Link to="/" className="font-bold text-4xl">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">LODE-X'</span>
                BLOG
            </Link>
            <p className="mt-5 text-sm">
              Join our community and start sharing your thoughts today. Sign up to create, explore, and connect with others!
            </p>
        </div>
         {/* right */}
         <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm/6 font-medium">Your username</label>
                <TextInput placeholder="Username"/>
              </div>
              <div>
                <label className="block text-sm/6 font-medium">Your Email</label>
                <TextInput placeholder="Email"/>
              </div>
              <div>
                <label className="block text-sm/6 font-medium">Your password</label>
                <TextInput placeholder="Password"/>
              </div>
              <Button type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 my-2">
                <span>Have an accaount?</span>
                <Link to="/sign-in" className="text-blue-600 ml-2">
                  Sign In
                </Link>
            </div> 
         </div>
      </div>
    </div>
  )
}

export default SignUp