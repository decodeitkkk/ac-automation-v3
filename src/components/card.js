let card = (img, title, desc, btn = true, w = "w-80", link) => `

<div class=" ${w ? w : " w-80"} p-2 mx-auto my-3 bg-white shadow-lg rounded-xl">
    <img src=${img} alt=${img} class="w-full p-4 m-auto h-36 object-contain" />
    <div class="p-4 m-3 bg-sky-200 rounded-lg">
        <p class="text-xl font-bold text-slate-900 uppercase "> ${title} </p>
        <p class="text-xs text-gray-900">
            ${desc}
        </p>


        ${
        btn
        ? `
        <div class="flex items-center justify-end">
            <a href="${link}"> 
                <button type="button"
                    class="w-10 h-10 text-base font-medium text-white bg-sky-500 rounded-full hover:bg-sky-700">
                    →
                </button>
            </a>
        </div>
        `
        : ""
        }

    </div>
</div>
`;

let card2 = (Img) => `
${Img.map(
(img) =>
`<div class="   mx-2  ">
    <img src="${img}" alt="Slide 1" class="  object-contain     " />
</div>`
).join("")} `;