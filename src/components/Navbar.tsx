
import Link from "next/link";
import { UserButton, auth, useAuth } from "@clerk/nextjs";

const Navbar = async () => {
    const { userId } = await auth();
    const isAuth = !!userId;

    return (
        <div className="bg-[#985efe] text-stone-900 h-16 flex flex-col justify-center text-sm p-3">
            <ul className="flex justify-between items-center ">
                <div className="flex-grow flex justify-center gap-x-10">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/course">
                        <li>Course</li>
                    </Link>
                    <Link href="/">
                        <li>About</li>
                    </Link>
                    {isAuth && (
                        <>
                            {" "}
                            <Link href="/profile">
                                <li>Profile</li>
                            </Link>
                        </>
                    )}
                </div>
                {!isAuth && (
                    <div className="text-end">
                        <div className="pr-1">
                            <Link href="/signin">
                                <li>Log In</li>
                            </Link>
                        </div>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
