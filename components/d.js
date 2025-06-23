// page serves as side navigation

let productsList = [
    {
        brand: "A. C. Automation Products ",
        categories: [
            {
                title: "Aireka ",
                page_link: " /pages/aireka.html",
                categories: [
                    {
                        title: "Pneumatic Cooling Tubes Series VR",
                        img: " /media/images/aireka-cooling-tubes.jpg",
                        page_link: "/media/pdf/aireka/pneumatic_coolers_VR.pdf",
                    },
                    {
                        title: "Pneumatic Cooling Tubes Series VRX ",
                        img: " /media/images/vrx100.jpg",
                        page_link: "/media/pdf/aireka/pneumatic_coolers_VRX.pdf",
                    },
                    {
                        title: "Electronically-controlled Pneumatic Coolers",
                        img: " /media/images/aireka-ec.png",
                        page_link: "/media/pdf/aireka/e-coolers.pdf",
                    },
                    {
                        title: "Air Knife",
                        img: " /media/images/aireka-air-knife.jpg",
                        page_link: "/media/pdf/aireka/air_knives.pdf",
                    },
                    {
                        title: "Air Amplifiers",
                        img: " /media/images/aireka-air-amplifiers.png",
                        page_link: "/media/pdf/aireka/air_amplifiers.pdf",
                    },
                    {
                        title: "Special Nozzles",
                        img: " /media/images/aireka-special-noz.png",
                        page_link: "/media/pdf/aireka/special_nozzle.pdf",
                    },
                    {
                        title: "Condensate Separators",
                        img: " /media/images/aireka-condensate-seprators.png",
                        page_link: "/media/pdf/aireka/condensate_seprators.pdf",
                    },
                ],
            },
            {
                title: "DESCHNER",
                page_link: " /pages/deschner.html",
                categories: [
                    {
                        title: "Cushioneer Shock Absorbers",
                        img: " /media/images/deschner/cushioneer.jpg",
                        page_link:
                            " /product/deschner/cushioneer-shock-absorbers.html",
                    },
                    {
                        title: "Impacta Series Shock Absorbers",
                        img: " /media/images/deschner/impacta-main-image3.jpg",
                        page_link:
                            " /product/deschner/impacta-series-shock-absorbers.html",
                    },
                    {
                        title: "Kinechek Speed Regulators",
                        img: " /media/images/deschner/kinechek.jpg",
                        page_link:
                            " /product/deschner/kinechek-speed-regulators.html",
                    },
                    {
                        title: "Cushion-Start Kinechek",
                        img: " /media/images/deschner/Cushion-Start-ali.jpg",
                        page_link:
                            " /product/deschner/cushion-start-kinechek.html",
                    },
                    {
                        title: "Slow Return Kinecheks",
                        img: " /media/images/deschner/Slow-Return-343x500.jpg",
                        page_link:
                            " /product/deschner/slow-return-kinecheks.html",
                    },
                    {
                        title: "Skipchek Kinecheks",
                        img: " /media/images/deschner/sk-SKIPCHEK-FUNCTION-DIAGRAM.jpg",
                        page_link: " /product/deschner/skipchek-kinecheks.html",
                    },
                    {
                        title: "Peckchek Kinecheks",
                        img: " /media/images/deschner/peck-control-blogger2-sm--500x355.jpg",
                        page_link: " /product/deschner/peckchek-kinecheks.html",
                    },
                    {
                        title: "Dual Speed Mini-K Kinechek",
                        img: " /media/images/deschner/ds-DUAL-SPEED-MINI-K_main_img-387x500.jpg",
                        page_link:
                            " /product/deschner/dual-speed-mini-K-kinechek.html",
                    },
                    {
                        title: "Super K and Mini K Kinecheks",
                        img: " /media/images/deschner/superKminiK.png",
                        page_link:
                            " /product/deschner/super-k-and-mini-k-kinecheks.html",
                    },
                ],
            },

            {
                title: "FEZER VACUUM LIFTERS",
                desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid reiciendis dolores cumque rem ex est, repellat exercitationem omnis asperiores. ",

                page_link: "/pages/fezer.html",
                categories: [
                    {
                        title: "VaccuQuicklift",
                        img: "/media/images/fezer/VacuQuicklift-70kg.png",
                        page_link: "/media/pdf/fezer/VacuQuicklift.pdf",
                    },
                    {
                        title: "VacuPowerlift",
                        img: " /media/images/fezer/VacuPowerlift-200kg.png",
                        page_link: "/media/pdf/fezer/vhcc_12-17.pdf",
                    },
                    {
                        title: "Board handling",
                        img: " /media/images/fezer/fezer-VacuBoyTube.png",
                        page_link: "/media/pdf/fezer/vhcc_22.pdf",
                    },
                    {
                        title: "VacuBoy",
                        img: " /media/images/fezer/fezer-VacuBoyTube.png",
                        page_link: "/media/pdf/fezer/vhcc_23-33.pdf",
                    },
                    {
                        title: "VacuGiant",
                        img: " /media/images/fezer/fezer-glass.jpg",
                        page_link: "/media/pdf/fezer/vhcc_34-37.pdf",
                    },
                    {
                        title: "VacuCoil",
                        img: " /media/images/fezer/fezer-coils-split-strips.jpg",
                        page_link: "/media/pdf/fezer/vhcc_38-41.pdf",
                    },
                    {
                        title: "VacuPoro",
                        img: " /media/images/fezer/fezer-pipes-tubes.jpg",
                        page_link: "/media/pdf/fezer/vhcc_42-43.pdf",
                    },
                    {
                        title: "VacuWood",
                        img: " /media/images/fezer/fezer-stone.jpg",
                        page_link: "/media/pdf/fezer/vhcc_44-45.pdf",
                    },

                    {
                        title: "Elevated rail systems",
                        img: " /media/images/fezer/fezer-head-image.jpg",
                        page_link: "/media/pdf/fezer/vhcc_46-54.pdf",
                    },
                    {
                        title: "Jib cranes",
                        img: " /media/images/fezer/fezer-cardboard-boxes.jpg",
                        page_link: "/media/pdf/fezer/vhcc_55-59.pdf",
                    },
                    {
                        title: "Electric chain hoists",
                        img: " /media/images/fezer/fezer-sacks.jpg",
                        page_link: "/media/pdf/fezer/vhcc_60.pdf",
                    },
                    {
                        title: "Installation",
                        img: " /media/images/fezer/fezer-wood.jpg",
                        page_link: "/media/pdf/fezer/vhcc_61.pdf",
                    },
                    {
                        title: "VacuStand",
                        img: " /media/images/fezer/fezer-glass.jpg",
                        page_link: "/media/pdf/fezer/vhcc_62.pdf",
                    },
                    {
                        title: "Stationary systems",
                        img: " /media/images/fezer/fezer-coils-split-strips.jpg",
                        page_link: "/media/pdf/fezer/vhcc_63-65.pdf",
                    },
                    {
                        title: "Mobilift",
                        img: " /media/images/fezer/fezer-coils-split-strips.jpg",
                        page_link: "/media/pdf/fezer/vhcc_66-67.pdf",
                    },
                ],
            },
            {
                title: "GAMM",
                page_link: "/pages/gamm.html",
                categories: [
                    {
                        title: "Antivibration Adjustable feet",
                        img: "/media/images/gamm/antivibration-feet.jpg",
                        page_link:
                            "/media/pdf/gamm/Antivibration_n_Adjustable_Feet.6214340.pdf",
                    },
                    {
                        title: "Articulated & Adjustable feet",
                        img: "/media/images/gamm/articulated-adjustable.jpg",
                        page_link:
                            "/media/pdf/gamm/Articulated_n_Adjustable_Feet.6214409.pdf",
                    },
                    {
                        title: "HandWheels",
                        img: "/media/images/gamm/handwheel.jpg",
                        page_link: "/media/pdf/gamm/Handwheels.6214451.pdf",
                    },
                    {
                        title: "Handles",
                        img: "/media/images/gamm/handles.jpg",
                        page_link: "/media/pdf/gamm/Handles.6214528.pdf",
                    },
                    {
                        title: "Adjustable clamping levers",
                        img: "/media/images/gamm/adjustable-clamping-levers.jpg",
                        page_link:
                            "/media/pdf/gamm/Adjustable_Handles.6214555.pdf",
                    },
                    {
                        title: "Locking Knobs",
                        img: "/media/images/gamm/locking-knobs.jpg",
                        page_link: "/media/pdf/gamm/Locking_Knobs.6214707.pdf",
                    },
                    {
                        title: "Measuring & Control Instruments",
                        img: "/media/images/gamm/measuring-control-instruments.jpg",
                        page_link:
                            "/media/pdf/gamm/Measuring_n_Control_instruments.6214733.pdf",
                    },
                    {
                        title: "Hinges",
                        img: "/media/images/gamm/hinges.jpg",
                        page_link: "/media/pdf/gamm/hinges_gamm.pdf",
                    },
                    {
                        title: "Indexing & Spring Plungers",
                        img: "/media/images/gamm/indexing-spring.jpg",
                        page_link:
                            "/media/pdf/gamm/Indexing_n_Spring_Plungers.6214841.pdf",
                    },
                    {
                        title: "Oil Plugs",
                        img: "/media/images/gamm/oil-plugs.jpg",
                        page_link: "/media/pdf/gamm/Oil_Plugs.6214900.pdf",
                    },
                    {
                        title: "Handles",
                        img: "/media/images/gamm/handles-1.jpg",
                        page_link: "/media/pdf/gamm/Handles.6214528.pdf", // same PDF, different image
                    },
                    {
                        title: "Thermoplastic Protections",
                        img: "/media/images/gamm/thermoplasti.jpg",
                        page_link:
                            "/media/pdf/gamm/Thermoplastic_Protections.6215016.pdf",
                    },
                    {
                        title: "Tools",
                        img: "/media/images/gamm/tools.jpg",
                        page_link: "/media/pdf/gamm/Millet_tools.6215038.pdf",
                    },
                    {
                        title: "Electrical Equipments",
                        img: "/media/images/gamm/electrical-equipments.jpg",
                        page_link:
                            "/media/pdf/gamm/Electrical_Accessories.6215058.pdf",
                    },
                    {
                        title: "PVC Handles",
                        img: "/media/images/gamm/pvc-handles.jpg",
                        page_link: "/media/pdf/gamm/PVC_Handles.6215121.pdf",
                    },
                ],
            },
            {
                title: "HAHN",
                page_link: " /pages/hahn.html",
                categories: [
                    {
                        title: "GAS SPRINGS",
                        img: " /media/images/hahn_gas_spring.png",
                        page_link: "/media/pdf/hahn/gas-spring.pdf",
                    },
                    {
                        title: "TENSION SPRINGS",
                        img: " /media/images/hahn_tension_spring.png",
                        page_link: "/media/pdf/hahn/tension-spring.pdf",
                    },
                    {
                        title: "LOCKING GAS SPRINGS",
                        img: " /media/images/lockable_gas_spring.png",
                        page_link: "/media/pdf/hahn/locking-gas-spring.pdf",
                    },
                    {
                        title: "DAMPERS",
                        img: " /media/images/dampers.png",
                        page_link: "/media/pdf/hahn/dampers.pdf",
                    },
                    {
                        title: "DOUBLE STROKE GAS SPRINGS",
                        img: " /media/images/double_stroke_gas_spring.png",
                        page_link: "/media/pdf/hahn/double-storke-spring.pdf",
                    },
                    {
                        title: "SLIDING DOOR DAMPER",
                        img: " /media/images/sliding_door.jpg",
                        page_link: "/media/pdf/hahn/sdd.pdf",
                    },
                    {
                        title: "GAS SPRINGS WITH BALL POINT PRINCIPLE",
                        img: " /media/images/ballpointpen.jpg",
                        page_link:
                            "/media/pdf/hahn/Gas-springs-with-ballpoint-pen-principle.pdf",
                    },
                    {
                        title: "CONNECTORS",
                        img: " /media/images/HAHN_ACC_CONNECTORS1.jpg",
                        page_link: "/media/pdf/hahn/fittings.pdf",
                    },
                    {
                        title: "MOUNTING BRACKETS",
                        img: " /media/images/hahn_acc_mounting_brackets_05.jpg",
                        page_link: "/media/pdf/hahn/brackets.pdf",
                    },
                    {
                        title: "RELEASE SYSTEM",
                        img: " /media/images/hahn_accessries.jpg",
                        page_link: "/media/pdf/hahn/release.pdf",
                    },
                    {
                        title: "EXTRAS",
                        img: " /media/images/hahn_acc_extras_10.jpg",
                        page_link: "/media/pdf/hahn/extras.pdf",
                    },
                ],
            },

            {
                title: "IZMAC SHOCK ABSORBERS",
                page_link: " /product/izmac/izmac.html",
                categories: [
                    {
                        title: "Hydraulic Buffer",
                        img: " /media/images/izmac/Hydraulic-Buffer.jpg",
                        page_link: "/media/pdf/izmac/hydrolic_buffer.pdf",
                    },
                    {
                        title: "Shock Absorber",
                        img: " /media/images/izmac/shock-absorber.jpg",
                        page_link: "/media/pdf/izmac/shock_absorber.pdf",
                    },
                    {
                        title: "Shock Damper Rate Control",
                        img: " /media/images/izmac/shock-Damper-Rate-Control.jpg",
                        page_link: "/media/pdf/izmac/damper.pdf",
                    },
                ],
            },

            {
                title: "MEDAN",
                page_link: " /pages/medan.html",
                categories: [
                    {
                        title: "Rodless cylinders",
                        img: " /media/images/medan/rodless-cylinder.jpg",
                        page_link: " /product/medan/rodless-cylinder.html",
                    },
                    /*{
                        title: "ISO cylinder",
                        img: " /media/images/medan/iso-cylinder.jpg",
                        page_link: " /product/medan/iso-cylinder.html",
                    },
                    {
                        title: "Clamping cylinder",
                        img: " /media/images/medan/clamping-cylinder.jpg",
                        page_link: " /product/medan/clamping-cylinder.html",
                    },
                    {
                        title: "Stopper cylinder",
                        img: " /media/images/medan/stopper-cylinder.jpg",
                        page_link: " /product/medan/stopper-cylinder.html",
                    },
                    {
                        title: "Rotary actuators",
                        img: " /media/images/medan/rotary-actuators.jpg",
                        page_link: " /product/medan/rotary-actuators.html",
                    },
                    {
                        title: "Gripper",
                        img: " /media/images/medan/gripper.jpg",
                        page_link: " /product/medan/gripper.html",
                    },
                    {
                        title: "Timing belt axes",
                        img: " /media/images/medan/timing_belt_axes_280x280.png",
                        page_link: " /product/medan/timing-belt-axes.html",
                    },
                    {
                        title: "Spindle axes",
                        img: " /media/images/medan/spindle-axes_280x280.png",
                        page_link: " /product/medan/spindle-axes.html",
                    },
                    {
                        title: "Heavy-duty axles",
                        img: " /media/images/medan/heavy-duty-axles_280x280.png",
                        page_link: " /product/medan/heavy-duty-axles.html",
                    },
                    {
                        title: "Boom axles",
                        img: " /media/images/medan/boom-axles_280x280.png",
                        page_link: " /product/medan/boom-axles.html",
                    },
                    {
                        title: "Pneumatic hoses",
                        img: " /media/images/medan/UM_Tube_280x280.png",
                        page_link: " /product/medan/pneumatic-hoses.html",
                    },
                    {
                        title: "Pneumatic fittings",
                        img: " /media/images/medan/pisco-standard-fittings.png",
                        page_link: " /product/medan/pneumatic-fittings.html",
                    },
                    {
                        title: "Functional screw connections",
                        img: " /media/images/medan/pisco-regulators_280x280.png",
                        page_link:
                            " /product/medan/functional-screw-connections.html",
                    },
                    {
                        title: "Foot valves",
                        img: " /media/images/medan/MVFA_280x280.png",
                        page_link: " /product/medan/foot-valves.html",
                    },
                    {
                        title: "Hand lever valves",
                        img: " /media/images/medan/MVHB-220_280x280.jpg",
                        page_link: " /product/medan/hand-lever-valves.html",
                    },
                    {
                        title: "Lever valves",
                        img: " /media/images/medan/MVMA-260_280x280.jpg",
                        page_link: " /product/medan/lever-valves.html",
                    },
                    {
                        title: "ISO valves",
                        img: " /media/images/medan/MVSI-260_280x280.jpg",
                        page_link: " /product/medan/iso-valves.html",
                    },
                    {
                        title: "Solenoid valves",
                        img: " /media/images/medan/MVSC1-150_280x280.jpg",
                        page_link: " /product/medan/solenoid-valves.html",
                    },
                    {
                        title: "Namur valves",
                        img: " /media/images/medan/MVSN-220_280x280.jpg",
                        page_link: " /product/medan/namur-valves.html",
                    },
                    {
                        title: "Pilot valves",
                        img: " /media/images/medan/MPC_280x280.jpg",
                        page_link: " /product/medan/pilot-valves.html",
                    },
                    {
                        title: "Start valves",
                        img: " /media/images/medan/MVHR-2_280x280.jpg",
                        page_link: " /product/medan/start-valves.html",
                    },
                    {
                        title: "Touch valves",
                        img: " /media/images/medan/MVHA-2-3_280x280.jpg",
                        page_link: " /product/medan/touch-valves.html",
                    },
                    {
                        title: "Pressure regulator",
                        img: " /media/images/medan/MAR100_280x280.jpg",
                        page_link: " /product/medan/pressure-regulator.html",
                    },
                    {
                        title: "Filter",
                        img: " /media/images/medan/MAF200_280x280.jpg",
                        page_link: " /product/medan/filter.html",
                    },
                    {
                        title: "Filter regulator",
                        img: " /media/images/medan/MAFR100_280x280.jpg",
                        page_link: " /product/medan/filter-regulator.html",
                    },
                    {
                        title: "Combi maintenance unit",
                        img: " /media/images/medan/MACP200_280x280.jpg",
                        page_link:
                            " /product/medan/combi-maintenance-unit.html",
                    },
                    {
                        title: "Proportional pressure regulator",
                        img: " /media/images/medan/MAER_side_application_280x280.jpg",
                        page_link:
                            " /product/medan/proportional-pressure-regulator.html",
                    },
                    {
                        title: "Precision pressure regulator",
                        img: " /media/images/medan/MAIR-MP43_280x280.jpg",
                        page_link:
                            " /product/medan/precision-pressure-regulator.html",
                    }, */
                ],
            },
            {
                title: "VUOTOTECNICA VACCUM",
                page_link: " /product/vuototecnica/vuototecnica.html",
                categories: [
                    {
                        title: "All Products",
                        img: "#",
                        page_link:
                            "/media/images/vuototecnica/production_programme.pdf",
                    },
                ],
            },
            {
                title: "YPC",
                page_link: " /pages/ypc.html",
                categories: [
                    {
                        title: "YSV Series",
                        img: " /media/images/ypc/YSV200.jpg",
                        page_link: " /product/ypc/ysv-series.html",
                    },
                    {
                        title: "SF Series",
                        img: " /media/images/ypc/SF1000.jpg",
                        page_link: " /product/ypc/sf-series.html",
                    },
                    {
                        title: "SC Series",
                        img: " /media/images/ypc/SC200.jpg",
                        page_link: " /product/ypc/sc-series.html",
                    },
                    {
                        title: "Converter & Booster ",
                        img: " /media/images/ypc/precompressed_booster.jpg",
                        page_link: " /product/ypc/converter-booster.html",
                    },
                    {
                        title: "SN Series ( Namur Valve )",
                        img: " /media/images/ypc/SN3000.jpg",
                        page_link: " /product/ypc/sn-series.html",
                    },
                    {
                        title: "SIV Series (ISO Valves) ",
                        img: " /media/images/ypc/SIV200.jpg",
                        page_link: " /product/ypc/siv-series.html",
                    },
                ],
            },
        ],
    },
];
console.log(window.location.pathname);

let productsDashboard = (productData, productList = productsList) => `
<div class="flex bg-gray-700 z-20 h-screen">
    <div id="toggleItem"
        class="flex h-full w-full hidden sm:block sm:w-2/5 flex-col justify-between bg-gray-800 sm:ml-0 z-20">
        <div class="px-4 py-6 h-auto sm:h-full w-full overflow-y-scroll">
            <span
                class="grid h-10 w-16 sm:w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 text-center mx-auto font-medium">
                Products
            </span>

            <div id="toggleBtn" class="sm:hidden flex justify-end text-white">
                Close
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-x">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </div>
            <ul class="mt-6 space-y-2">
                ${productsList
                    .map(
                        (item) => `
                <li class="border-b-2 border-cyan-900">
                    <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                            <span class="text-sm font-medium">
                                ${item.brand}--
                            </span>
                            
                            <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </summary>

                       <ul class="mt-2 space-y-1 px-4">
    ${item.categories
        .map((scat) => {
            const currentPageName = scat.page_link.split("/").pop();
            const regex = new RegExp(`${currentPageName}$`, "i");
            const isActive = regex.test(window.location.pathname);
            console.log(currentPageName, regex, isActive);

            /* Check if the category has sub-categories
            const subCategories = scat.categories
                ? `<ul class="mt-2 space-y-1 px-4">
                    ${scat.categories
                        .map((subCat) => {
                            const subPageName = subCat.page_link
                                .split("/")
                                .pop();
                            const subRegex = new RegExp(`${subPageName}$`, "i");
                            const isSubActive = subRegex.test(
                                window.location.pathname
                            );

                            return `
                            <li>
                                <a href="${subCat.page_link}"
                                    class="block rounded-lg px-4 py-2 text-sm font-medium ${
                                        isSubActive
                                            ? "text-gray-700 bg-gray-100"
                                            : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                                    }">
                                    ${subCat.title}
                                </a>
                            </li>`;
                        })
                        .join("")}
                  </ul>`
                : ""; */

            return `
            <li>
                <details class="group  " close >
                    <summary
                        class="flex items-center justify-between block rounded-lg px-4 py-2 text-sm font-medium transform duration-300  ${
                            isActive
                                ? "text-gray-700 bg-gray-100"
                                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700 "
                        } cursor-pointer">
                        ${scat.title}
                        <span class="shrink-0 transition duration-300 group-open:-rotate-90">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                    </summary>
                    <div class="bg-gray-700 rounded-lg ml-5" >
                    ${scat.categories
                        .map(
                            (i) =>
                                `<div class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-100 transform duration-300 hover:bg-gray-900 my-2 hover:cursor-pointer  " >
                            <a href="${i.page_link}" >
                            ${i.title}
                            </a>
                            </div>    `
                        )
                        .join("")}
                        </div>
                        </details>
            </li>
            `;
        })
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
    <div id="innerBody" class="sm:block bg-gray-100 h-full overflow-auto w-full p-4 z-0 relative">
        <div id="toggleBtn2" class="flex justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
        </div>

        ${productData.map(
            (item) => `
        <div class="font-medium text-3xl PD800 my-2 mb-5 mx-auto text-center">
            
            <span id="title-card" class="capitalize  ">${item.brand}  </span>
        </div>
        <div class="my-2 flex flex-col justify-center mx-10 " >
        <div>
        ${item.desc}
        
        </div>
${
    item.pdf_link
        ? `
<div>
    Product Catalogue : <span> 
        <a href="${item.pdf_link}" class="text-blue-900 hover:text-blue-500">
            Product catalogue  
        </a>
    </span>
</div>
`
        : ""
}

                            </div>

        <div class="flex flex-wrap gap-4 justify-center">
            ${item.categories
                .map(
                    (scat) => `
            <div class="w-40 sm:w-52 rounded-md bg-white shadow-lg border border-slate-300 p-1">
                <a href=${scat.page_link} target="_blank">
                    <img src=${scat.img} alt="Laptop" class="h-36 w-full rounded-md object-contain" />
                    <div class="p-4">
                        <h1 class="text-sm font-medium MMedium">
                            ${scat.title}
                        </h1>
                    </div>
                </a>
            </div>
            `
                )
                .join("")}

        </div>
        `
        )}


    </div>
</div>
`;

// document.querySelectorAll("a").forEach((item) => { //
// item.addEventListener( // "click", // () => { // console.log(item.innerText); //
// let innerBody = document.getElementById("title-card"); // innerBody.innerText =
// item.innerText; // }, // false // ); // });
