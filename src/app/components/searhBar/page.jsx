export default function searchBar() {
    return (
        <div className="h-auto bg-gray-400 px-2 w-3/5">
            <div className="max-w-min rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-3">
                        <div className="relative">
                            <i className="absolute fa-solid fa-magnifying text-black top-5 left-4"></i>
                            <input type="text" className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none " name="search" placeholder="search bar"/>
                            <span className="absolute top-4 right-5 border-l pl-4">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}