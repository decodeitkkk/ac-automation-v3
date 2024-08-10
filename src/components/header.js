const productsData = [
    {
        brand: "AIREKA",
        categories: [
            "AIR COOLERS",
            "ELECTRONICALLY CONTROLLED AIR COOLERS",
            "AIR AMPLIFIERS",
            "AIR KNIVES",
            "SPECIAL NOZZLES",
        ],
        link: "/src/pages/aireka.html",
        img: "/src/images/aireka.jpg",
    },
    {
        brand: "FEZER VACUUM LIFTERS",
        categories: [
            "AUTOMOTIVE",
            "SHEET METAL",
            "COILS/SLIT STRIPS",
            "DRUMS/CONTAINERS",
            "GLASS",
            "WOOD",
            "LOGISTICS/CARDBOARDS",
            "AEROSPACE",
            "BAGS",
            "STONES",
            "PIPES/RODS",
            "CRANES",
        ],
    },
    {
        brand: "STABILUS/HAHN",
        link: "/src/pages/hahn.html",
        categories: [
            "GAS SPRINGS",
            "TENSION SPRINGS",
            "LOCKING GAS SPRINGS",
            "DAMPERS",
            "DOUBLE STROKE GAS SPRINGS",
            "SLIDING DOOR DAMPER",
            "GAS SPRINGS WITH BALL POINT PRINCIPLE",
            "ACCESSORIES",
        ],
    },
    {
        brand: "IZMAC SHOCK ABSORBERS",
        categories: [
            "SELF COMPENSATING MINI SERIES (M4 - M16)",
            "ADJUSTABLE MINI SERIES (M4 - M16)",
            "SELF COMPENSATING MID SERIES (M20 - M36)",
            "ADJUSTABLE MID SERIES (M20 - M36)",
            "SELF COMPENSATING MAX SERIES (M42 - M115)",
            "ADJUSTABLE MAX SERIES (M42 - M115)",
            "HEAVEY DUTY CRANE BUFFERS",
            "SPEED CONTROL SERIES",
            "CRASH DAMPERS",
            "RATE CONTROL",
            "SHORT STROKE SHOCK ABSORBER",
        ],
    },
    {
        brand: "DESCHNER",
        categories: [
            "SLIMLINE MINI-K SPEED REGULATORS",
            "SLIMLINE KINECHEK SPEED REGULATOR",
            "SUPER-K SPEED REGULATOR",
            "PECKCHEK CONTROLS",
            "ACCESSORIES",
            "IMPACTA SHOCK ABSORBERS (M14 - M27)",
        ],
    },
    {
        brand: "MEDAN",
        categories: ["PNEUMATIC RODLESS CYLINDER", "GUIDED RODLESS CYLINDER"],
    },
    {
        brand: "VUOTOTECNICA VACUUM",
        categories: [
            "SUCTION CUPS",
            "SUCTION CUPS HOLDERS",
            "VACUUM MEASUREMENTS/INTRUMENTS",
            "VACUUM VALVES/SOLENOID VALVES",
        ],
    },
];

let header = `
<nav x-data="{ open: false }" @keydown.window.escape="open = false" class="bg-gray-800">
    <div class="container px-6 mx-auto lg:px-8">
        <div class="flex items-center justify-between h-16">
            <div class="flex items-center justify-between flex-grow">
                <div class="flex-shrink-0">
                    <h1 class="text-lg font-semibold tracking-widest text-white uppercase">
                        <a href="/src/index.html">A.C. Automation</a>
                    </h1>
                </div>

                <!-- DESKTOP NAVIGATION BAR -->
                <div class="hidden lg:block">
                    <div class="flex items-center">
                        <a id="home" href="/src/index.html"
                            class="flex flex-row items-center px-3 py-2 text-sm font-medium  text-gray-300  rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span class="ml-2">Home</span>
                        </a>
                        <a id="about" href="/src/pages/about.html"
                            class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300  rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-building-2">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                <path d="M10 6h4" />
                                <path d="M10 10h4" />
                                <path d="M10 14h4" />
                                <path d="M10 18h4" />
                            </svg>
                            <span class="ml-2">About Us</span>
                        </a>
                        <div class="relative" x-data="{ open: false}">
                            <button @click="open = !open" id="products"
                                class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-drill">
                                    <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
                                    <path d="M18 6h4" />
                                    <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
                                    <path d="m5 10-2 8" />
                                    <path d="M12 10v3c0 .6-.4 1-1 1H8" />
                                    <path d="m7 18 2-8" />
                                    <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" />
                                </svg>
                                <span class="mx-2">Products</span>
                                <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': open, 'rotate-0': !open}"
                                    class="w-4 h-4 mt-1 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="feather feather-chevron-down">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div @click.away="open = false" x-show="open"
                                x-transition:enter="transition ease-out duration-100"
                                x-transition:enter-start="transform opaity-0 scale-95"
                                x-transition:enter-end="transform opacity-100 scale-100"
                                x-transition:leave="transition ease-in duration-75"
                                x-transition:leave-start="transform opacity-100 scale-100"
                                x-transition:leave-end="transform opacity-0 scale-95"
                                class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg z-50 ">
                                <div class="py-1 bg-white rounded-md shadow-sm border z-50 ">
                                    ${productsData
                                        .map(
                                            (item) => `
                                    <a href=${
                                        item?.link
                                            ? item?.link
                                            : "/src/pages/d.html"
                                    }
                                        class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                                        ${item.brand}
                                    </a>
                                    `
                                        )
                                        .join("")}


                                </div>
                            </div>
                        </div>
                        <a href="/src/pages/brands.html" id="brands"
                            class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-message-circle">
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                </path>
                            </svg>
                            <span class="ml-2">Our Customers</span>
                        </a>
                        <a href="#" id="application"
                            class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-settings">
                                <path
                                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span class="ml-2">Application</span>
                        </a>

                        <a id="contact" href="/src/pages/contact.html"
                            class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-mail-open">
                                <path
                                    d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                            </svg>
                            <span class="ml-2">Contact</span>
                        </a>
                    </div>
                </div>
            </div>


            <!-- MOBILE NAVIGATION BAR -->
            <div class="flex -mr-2 lg:hidden">
                <button @click="open = !open"
                    class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                    x-bind:aria-label="open ? 'Close main menu' : 'Main menu'" x-bind:aria-expanded="open">
                    <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': !open }" class="inline-flex"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': !open, 'inline-flex': open }" class="hidden" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div :class="{'block': open, 'hidden': !open}" class="hidden lg:hidden">
        <div class="container px-6 mx-auto">
            <div class="pt-2 pb-3">
                <a href="/src/index.html" id="home"
                    class="flex flex-row items-center px-3 py-2 text-base font-medium text-white  rounded-md focus:outline-none focus:text-white focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="ml-2">Home</span>
                </a>
                <a id="about" href="/src/pages/about.html"
                    class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-building-2">
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                        <path d="M10 6h4" />
                        <path d="M10 10h4" />
                        <path d="M10 14h4" />
                        <path d="M10 18h4" />
                    </svg>
                    <span class="ml-2">About Us</span>
                </a>
                <div class="relative" x-data="{ open: false }">
                    <button @click="open = true" id="products"
                        class="flex flex-row items-center w-full px-3 py-2 mt-1 text-base font-medium text-left text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-drill">
                            <path d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" />
                            <path d="M18 6h4" />
                            <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
                            <path d="m5 10-2 8" />
                            <path d="M12 10v3c0 .6-.4 1-1 1H8" />
                            <path d="m7 18 2-8" />
                            <path d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" />
                        </svg>
                        <span class="mx-2">Products</span>
                        <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': open, 'rotate-0': !open}"
                            class="w-4 h-4 mt-1 transform" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div x-show="open" @click.away="open = false" class="px-2 py-2 mt-2 bg-white rounded-md shadow-xs"
                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu" role="menuitem">
                        ${productsData
                            .map(
                                (item) => `
                        <a  href=${
                            item?.link ? item?.link : "#"
                        }
                            class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                            ${item.brand}
                        </a>
                        `
                            )
                            .join("")}

                    </div>
                </div>
                <a id="brands" href="/src/pages/brands.html"
                    class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-message-circle">
                        <path
                            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                        </path>
                    </svg>
                    <span class="ml-2">Our Customers</span>
                </a>
                <a id="application" href="#"
                    class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-settings">
                        <path
                            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span class="ml-2">Application</span>
                </a>

                <a id="contact" href="/src/pages/contact.html"
                    class="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail-open">
                        <path
                            d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                    </svg>
                    <span class="ml-2">Contact Us</span>
                </a>
            </div>
        </div>

    </div>
</nav>
`;

window.onload = () => {
    let currentPage = document.location.pathname.split(".")[0].split("/")[1];

    console.log(currentPage);
    console.log(!currentPage);

    document.getElementById(currentPage).classList.add("bg-gray-900");
    if (!currentPage === true) {
        document.getElementById("home").classList.add("bg-gray-900");
    }
};

/*



<div class="relative" x-data="{ open: false}">
    <button @click="open = !open"
        class="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-settings">
            <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
        <span class="mx-2">Application</span>
        <svg xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': open, 'rotate-0': !open}"
            class="w-4 h-4 mt-1 transform" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    </button>
    <div @click.away="open = false" x-show="open" x-transition:enter="transition ease-out duration-100"
        x-transition:enter-start="transform opaity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100"
        x-transition:leave-end="transform opacity-0 scale-95"
        class="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
        <div class="py-1 bg-white rounded-md shadow-xs">
            <a href="#"
                class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                Users-1
            </a>
            <a href="#"
                class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                Users-2
            </a>
            <a href="#"
                class="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100">
                Users-3
            </a>
        </div>
    </div>
</div>
*/
