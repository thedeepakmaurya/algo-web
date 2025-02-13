import Image from "next/image"

const EditProfile = () => {
    return (
        <div className="lg:w-2/3 w-full mt-10">
            <form className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-sm">
                <div className="flex justify-center lg:justify-end">
                    <Image className="rounded-xl w-40 h-40 object-cover" src="/img/user.jpg" alt="user" width={100} height={100} />
                </div>
                {/* form inputs*/}
                <div className="flex flex-col col-span-2 gap-4">
                    <div className="input">
                        <i className="ri-user-6-fill ri-lg text-primary"></i><input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="input">
                        <i className="ri-phone-fill ri-lg text-primary"></i> <input type="number" name="number" placeholder="Number" />
                    </div>
                    <div className="input">
                        <i className="ri-mail-fill ri-lg text-primary"></i><input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="input">
                        <i className="ri-map-pin-2-fill ri-lg text-primary"></i>  <input type="text" name="address" placeholder="Address" />
                    </div>
                    <textarea className="input h-20" name="description" placeholder="Description" />
                </div>
            </form>
            <div className="flex justify-end mt-5">
                <button className="w-fit bg-gradient-to-tr from-primary to-secondary text-white text-sm font-medium py-2 px-4 rounded-md">Update Profile</button>
            </div>
        </div>
    )
}

export default EditProfile