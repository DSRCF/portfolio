"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",

    },
    {
        name: "about",
        path: "/about",

    },
    {
        name: "projects",
        path: "/projects",

    },
    {
        name: "contact",
        path: "/contact",

    }
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex items-center gap-8">
        {links.map((links, index)=>{
            return (
            <Link href={links.path} key={index} className={`${
                links.path === pathname ? "capitalize text-primary underline underline-offset-4 transition-all duration-300" : "text-muted-foreground hover:text-foreground transition-all duration-300 capitalize font-medium hover:text-primary transition all"
            }`}
            >
                {links.name}
            </Link>
        );
    })}
    </nav>
);
};

export default Nav;