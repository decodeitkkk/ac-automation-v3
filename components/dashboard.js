let productsDashboard = (productData) =>
    `
<div class="flex bg-gray-700 z-20 h-screen ">
    <div
        id="toggleItem"
        class="flex h-full  w-full hidden sm:block sm:w-2/5  flex-col justify-between bg-gray-800   sm:ml-0 z-20 "
    >
        <div class="px-4 py-6 h-auto sm:h-full w-full overflow-y-scroll">
            <span
                class="grid h-10 w-16 sm:w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 text-center  mx-auto font-medium  "
            >
                Products
            </span>

            <div id="toggleBtn" class=" sm:hidden flex justify-end text-white  "> Close
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
            <ul class="mt-6 space-y-2">

            ${productData
                .map(
                    (item) =>
                        `
                <li class="border-b-2 border-cyan-900">
                    <details
                        class="group [&_summary::-webkit-details-marker]:hidden"
                    >
                        <summary
                            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span class="text-sm font-medium">
                                ${item.brand}
                            </span>

                            <span
                                class="shrink-0 transition duration-300 group-open:-rotate-180"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <ul class="mt-2 space-y-1 px-4">
                        ${item.categories
                            .map(
                                (scat) => `
                            <li>
                                <a
                                    href="#"
                                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                >
                                
                                    ${scat}
                                </a>
                            </li>
                            `
                            )
                            .join("")}
                        
                        
                        </ul>
                    </details>
                </li>
                `
                )
                .join("")}
                
            </ul>
        </div>
    </div>
    <div id="innerBody" class=" sm:block bg-gray-100 h-full overflow-auto w-full  p-4 z-0  relative ">

    <div id="toggleBtn2" class="flex justify-end">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </div>
    
        <div
            class="font-medium text-2xl PD800 my-2 mb-5 mx-auto text-center"
        >
            Products of
            <span id="title-card" class="capitalize">aireka</span>
        </div>

        <div class="flex flex-wrap gap-4 justify-center">
            <div
                class="w-40 sm:w-52 rounded-md bg-white shadow-lg border border-slate-300 p-1"
            >
            <a href=" /products/productDetail.html" >
            
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="Laptop"
                    class="h-36 w-full rounded-md object-cover"
                />
                <div class="p-4">
                    <h1 class="text-sm font-medium MMedium">
                        About Macbook
                    </h1>
                </div>
                </a>
            </div>
            <div
            class="w-40 sm:w-52 rounded-md bg-white shadow-lg border border-slate-300 p-1"
        >
        <a href=" /products/productDetail.html" >
        
            <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Laptop"
                class="h-36 w-full rounded-md object-cover"
            />
            <div class="p-4">
                <h1 class="text-sm font-medium MMedium">
                    About Macbook
                </h1>
            </div>
            </a>
        </div>
        <div
        class="w-40 sm:w-52 rounded-md bg-white shadow-lg border border-slate-300 p-1"
    >
    <a href=" /products/productDetail.html" >
    
        <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            class="h-36 w-full rounded-md object-cover"
        />
        <div class="p-4">
            <h1 class="text-sm font-medium MMedium">
                About Macbook
            </h1>
        </div>
        </a>
    </div>
    <div
    class="w-40 sm:w-52 rounded-md bg-white shadow-lg border border-slate-300 p-1"
>
<a href=" /products/productDetail.html" >

    <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        class="h-36 w-full rounded-md object-cover"
    />
    <div class="p-4">
        <h1 class="text-sm font-medium MMedium">
            About Macbook
        </h1>
    </div>
    </a>
</div>
<div
class="w-40 sm:w-52 rounded-md bg-white shadow-lg border border-slate-300 p-1"
>
<a href=" /products/productDetail.html" >

<img
    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="Laptop"
    class="h-36 w-full rounded-md object-cover"
/>
<div class="p-4">
    <h1 class="text-sm font-medium MMedium">
        About Macbook
    </h1>
</div>
</a>
</div>
            
            
        </div>
    </div>
</div>
`;
// document.querySelectorAll("a").forEach((item) => {
//     item.addEventListener(
//         "click",
//         () => {
//             console.log(item.innerText);
//             let innerBody = document.getElementById("title-card");
//             innerBody.innerText = item.innerText;
//         },
//         false
//     );
// });
