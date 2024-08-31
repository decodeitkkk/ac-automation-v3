let card = (img, title, img1, img2, img3, btn = true, w = "w-80", link) => `

<div class=" ${w ? w : " w-80"} p-2 mx-auto my-3 bg-white shadow-lg rounded-xl">
    <img src=${img} alt=${img} class="w-full p-4 m-auto h-36 object-contain" />
    <div class="p-4 m-3 bg-sky-200 rounded-lg">
        <p class="text-xl font-bold text-slate-900 uppercase "> ${title} </p>

        ${
          img1 || img2 || img3
            ? `<p class="text-xs text-gray-900 flex justify-center gap-x-4">
                ${img1 ? `<img src="${img1}" class="w-16 h-16 object-contain" alt="">` : ""}
                ${img2 ? `<img src="${img2}" class="w-16 h-16 object-contain" alt="">` : ""}
                ${img3 ? `<img src="${img3}" class="w-16 h-16 object-contain" alt="">` : ""}
            </p>`
            : ""
        }


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