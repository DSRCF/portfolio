"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/Nav";
import MobileNav from "@/components/ui/MobileNav";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-foreground">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-bold">
                        Safian<span className="text-blue-500">.</span>
                    </h1>
                </Link>

                {/* desktop nav and CV button */}
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <ThemeToggle />
                <Link href="/contact">
                    <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 dark:border-white/20 dark:hover:bg-white/10 border-gray-300 hover:bg-gray-100"> Hire Me</Button>
                </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />

                    </div>
            </div>
        </header>
    )
}

export default Header;