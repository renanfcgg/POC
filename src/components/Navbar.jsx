export default function Navbar() {
    return (
        <>
            <nav className="bg-purple-700 p-6">
                <div className="w-7/12 m-auto flex items-center justify-between flex-wrap">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                Docs
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                                Examples
                            </a>
                            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                Blog
                            </a>
                        </div>
                        <div>
                            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}