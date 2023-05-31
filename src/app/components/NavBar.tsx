import Link from "next/link";
import Image from "next/image";
import React from "react";

export function NavBar ()  {
   return (
    <div>
        <div className="navbar">
            <div className="flex-1">
                 <Link href="/">
                     <Image 
                       src="/logo.svg"
                       alt="Dynamo Logo"
                       width={120}
                       height={20}
                     />
                 </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className="" href="/">
                            <h3 className="font-sora text-sm font-medium">Personal</h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <h3 className="font-sora text-sm font-medium">Business</h3>
                        </Link>
                    </li>
                    <li>
                        <button className="btn btn-outline font-sora text-sm font-medium normal-case">Join us</button>
                    </li>
                    <li tabIndex={0}>
                        <a className="font-sora text-sm font-medium">EN</a>
                        <ul className="p-2">
                            <li><a className="font-sora text-sm font-medium">EN</a></li>
                            <li><a className="font-sora text-sm font-medium">FR</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   )
}

