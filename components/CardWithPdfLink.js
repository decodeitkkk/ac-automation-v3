let cwPDFl = (href, imagePath, name) => `
                    <a target="_blank" href="" class="block bg-white rounded shadow p-5 hover:bg-gray-200">
                        <img src=" /media/images/aireka/control-unit.png" alt="Control Unit"
                            class="w-full h-auto mb-3 rounded">
                        <h3 class="text-lg font-semibold">Control Unit</h3>
                    </a>
`;

function CardWithPdfLink(href, imagePath, name) {
    let card = document.createElement("a");
    card.setAttribute("target", "_blank");
    card.setAttribute("href", href);
    card.classList.add(
        "block",
        "bg-white",
        "rounded",
        "shadow",
        "p-5",
        "hover:bg-gray-200"
    );

    card.innerHTML = `
        <img src="${imagePath}" alt="${name}" class="w-full h-auto mb-3 rounded">
        <h3 class="text-lg font-semibold">${name}</h3>
    `;

    return card;
}
