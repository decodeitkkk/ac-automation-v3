let card = (img, title, btn = true, w = "w-80", link) => `

<div class=" ${w ? w : " w-44"} p-2 mx-auto my-3 bg-white shadow-lg rounded-xl">
        <a href=${link} class="text-center font-normal text-lg hover:text-blue-600">
                <img src=${img} alt=${img} class="w-full p-4 m-auto h-36 object-contain" />
                <div class="text-center font-sans text-sm my-2">
                ${title}                        
                </div>
        </a>
</div>
`;
