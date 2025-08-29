let card = (img, title, img1, img2, img3, btn = true, w = "w-80", link) => `

<div class=" ${w ? w : " w-48 "} p-2 mx-auto my-3 bg-white shadow-lg rounded-xl">
    <img src=${img} alt=${img} class="w-full p-2 m-auto h-36 object-contain" />

</div>
`;

let card2 = (Img) => `
${Img.map(
(img) =>
`<div class="   mx-2  ">
    <img src="${img}" alt="Slide 1" class="  object-contain     " />
</div>`
).join("")} `;