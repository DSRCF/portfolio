"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'
import ThemeToggle from "./ThemeToggle";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'CV',
        path: '/CV',
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]


const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-foreground" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text2xl">
                <Link href="/">
                    <h1 className="text-4xl font-bold">
                        Safian<span className="text-primary">.</span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                pathname === link.path
                                    ? "text-primary underline underline-offset-4"
                                    : "text-foreground"
                            } text-xl capitalize hover:text-primary transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
            {/* theme toggle */}
            <div className="flex justify-center mt-8">
                <ThemeToggle />
            </div>
        </SheetContent>
    </Sheet>
    )
};

export default MobileNav;