
import { useSelector } from "react-redux"
import {TextInput, Button} from "flowbite-react"


function DashProfile() {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className="max-w-lg mx-auto p-3 w-full">
            <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
            <form className="flex flex-col gap-4">
                <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                    <img src={currentUser.profilePicture} alt="" width="80" height="80" className="rounded-full object-cover w-full h-full border-8 border-[lightgray]" />
                </div>
                <TextInput type="text" id="username" placeholder="username" defaultValue={currentUser.username}/>
                <TextInput type="text" id="email" placeholder="email" defaultValue={currentUser.useremail}/>
                <TextInput type="password" id="password" placeholder="**********" defaultValue={currentUser.userpassword}/>
                <Button type="submit" className="bg-blue-600 outline hover:bg-blue-700">
                    Update
                </Button>
            </form>
            <div className="mt-10 text-red-600 text-center cursor-pointer  flex justify-between gap-3">
                <a href="#" className="hover:underline">Delete Account</a>
            <a href="#" className="hover:underline">Sign Out</a>
            </div>
        </div>
    )
}

export default DashProfile