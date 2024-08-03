import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { SVGProps } from "react";
import Link from "next/link"

export default function Navbar() {
    return (
        //     <header className="flex items-center justify-between h-16 px-4 border-b bg-background md:px-6">
        //     <Link href="#" className="flex items-center gap-2" prefetch={false}>
        //       <MountainIcon className="h-6 w-6" />
        //       <span className="sr-only">Acme Inc</span>
        //     </Link>
        //     <nav className="hidden gap-6 text-sm font-medium md:flex">
        //       <DropdownMenu>
        //         <DropdownMenuTrigger asChild>
        //           <Button variant="ghost" className="flex items-center gap-1">
        //             Services
        //             <ChevronDownIcon className="h-4 w-4" />
        //           </Button>
        //         </DropdownMenuTrigger>
        //         <DropdownMenuContent align="end">
        //           <DropdownMenuItem>Feature 1</DropdownMenuItem>
        //           <DropdownMenuItem>Feature 2</DropdownMenuItem>
        //           <DropdownMenuItem>Feature 3</DropdownMenuItem>
        //         </DropdownMenuContent>
        //       </DropdownMenu>
        //       <Link href="#" className="text-muted-foreground py-2 px-3" prefetch={false}>
        //         FAQ
        //       </Link>
        //       <div className="flex items-center gap-2">
        //         <Button variant="outline">Sign In</Button>
        //       </div>
        //     </nav>
        //     <Sheet>
        //       <SheetTrigger asChild>
        //         <Button size="icon" variant="outline" className="md:hidden">
        //           <MenuIcon className="h-5 w-5" />
        //           <span className="sr-only">Toggle menu</span>
        //         </Button>
        //       </SheetTrigger>
        //       <SheetContent side="right" className="sm:max-w-xs">
        //         <nav className="grid gap-4 p-4 text-sm font-medium">
        //           <DropdownMenu>
        //             <DropdownMenuTrigger asChild>
        //               <Button variant="ghost" className="flex items-center justify-between">
        //                 Services
        //                 <ChevronRightIcon className="h-4 w-4" />
        //               </Button>
        //             </DropdownMenuTrigger>
        //             <DropdownMenuContent align="end">
        //               <DropdownMenuItem>Feature 1</DropdownMenuItem>
        //               <DropdownMenuItem>Feature 2</DropdownMenuItem>
        //               <DropdownMenuItem>Feature 3</DropdownMenuItem>
        //             </DropdownMenuContent>
        //           </DropdownMenu>
        //           <div className="flex items-center justify-between">
        //             <Link href="#" className="text-muted-foreground" prefetch={false}>
        //               FAQ
        //             </Link>
        //             <Button variant="outline">Sign In</Button>
        //           </div>
        //         </nav>
        //       </SheetContent>
        //     </Sheet>
        //   </header>
        <header className="bg-primary text-primary-foreground py-4 px-6 fixed top-0 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
                    <FlameIcon className="h-6 w-6" />
                    <span>FIRE Calculator</span>
                </Link>
                <nav className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="flex items-center gap-1">
                                Services
                                <ChevronDownIcon className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white border rounded-md p-1">
                            <DropdownMenuItem className="text-muted-foreground py-1 px-2 text-sm">Feature 1</DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground py-1 px-2 text-sm">Feature 2</DropdownMenuItem>
                            <DropdownMenuItem className="text-muted-foreground py-1 px-2 text-sm">Feature 3</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Resources
                    </Link>
                    <Link href="/login" >
                        <Button variant="outline" className="text-black">
                            Sign In
                        </Button>
                    </Link>

                </nav>
            </div>
        </header>
    )
}

function FlameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
    )
}


function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}