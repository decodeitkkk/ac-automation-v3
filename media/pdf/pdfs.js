const fs = require('fs');
const path = require('path');
const PDFMerger = require('pdf-merger-js');

// Folder containing the PDFs
const PDF_FOLDER = path.resolve(__dirname, 'reypc2');

// Define groups of PDFs to merge
const mergeGroups = [
  {
    outputFile: 'YSV10.pdf',
    files: ['YPC_1 10.pdf', 'YPC_1 11.pdf'],
  },
  {
    outputFile: 'YSV20.pdf',
    files: ['YPC_1 12.pdf', 'YPC_1 13.pdf'],
  },
  {
    outputFile: 'YSV200.pdf',
    files: ['YPC_1 14.pdf', 'YPC_1 15.pdf'],
  },
  {
    outputFile: 'YSV300.pdf',
    files: ['YPC_1 16.pdf', 'YPC_1 17.pdf'],
  },
  {
    outputFile: 'mcs100.pdf',
    files: ['YPC_1 20.pdf', 'YPC_1 21.pdf'],
  },
  {
    outputFile: 'mcs200.pdf',
    files: ['YPC_1 22.pdf', 'YPC_1 23.pdf'],
  },
  {
    outputFile: 'mcs400.pdf',
    files: ['YPC_1 24.pdf', 'YPC_1 25.pdf'],
  },
  {
    outputFile: 'sf1000.pdf',
    files: ['YPC_1 28.pdf', 'YPC_1 29.pdf'],
  },
  {
    outputFile: 'sf2000.pdf',
    files: ['YPC_1 30.pdf', 'YPC_1 31.pdf'],
  },
  {
    outputFile: 'sf3000.pdf',
    files: ['YPC_1 32.pdf', 'YPC_1 33.pdf'],
  },
  {
    outputFile: 'sf4000.pdf',
    files: ['YPC_1 34.pdf', 'YPC_1 35.pdf'],
  },
  {
    outputFile: 'sf5000.pdf',
    files: ['YPC_1 36.pdf', 'YPC_1 37.pdf'],
  },
  {
    outputFile: 'sf6000.pdf',
    files: ['YPC_1 38.pdf', 'YPC_1 39.pdf'],
  },
  {
    outputFile: 'siv200.pdf',
    files: ['YPC_1 42.pdf', 'YPC_1 43.pdf'],
  },
  {
    outputFile: 'siv300.pdf',
    files: ['YPC_1 44.pdf', 'YPC_1 45.pdf'],
  },{
    outputFile: 'siv400.pdf',
    files: ['YPC_1 46.pdf', 'YPC_1 47.pdf'],
  },
  {
    outputFile: 'siv500.pdf',
    files: ['YPC_2 1.pdf', 'YPC_2 2.pdf'],
  },
  {
    outputFile: 'sie200.pdf',
    files: ['YPC_2 3.pdf', 'YPC_2 4.pdf'],
  },
  {
    outputFile: 'sie300.pdf',
    files: ['YPC_2 5.pdf', 'YPC_2 6.pdf'],
  },
  {
    outputFile: 'mcs100.pdf',
    files: ['YPC_2 9.pdf', 'YPC_2 10.pdf'],
  },
  {
    outputFile: 'sc200.pdf',
    files: ['YPC_2 15.pdf', 'YPC_2 16.pdf'],
  },
  {
    outputFile: 'sc300.pdf',
    files: ['YPC_2 17.pdf', 'YPC_2 18.pdf'],
  },
  {
    outputFile: 'sc400.pdf',
    files: ['YPC_2 19.pdf', 'YPC_2 20.pdf'],
  },
  {
    outputFile: 'sce300.pdf',
    files: ['YPC_2 21.pdf', 'YPC_2 22.pdf'],
  },
  {
    outputFile: 'sce400.pdf',
    files: ['YPC_2 23.pdf', 'YPC_2 24.pdf'],
  },
  {
    outputFile: 'sce500.pdf',
    files: ['YPC_2 25.pdf', 'YPC_2 26.pdf'],
  },
  {
    outputFile: 'sn3000.pdf',
    files: ['YPC_2 29.pdf', 'YPC_2 30.pdf'],
  },  
  {
    outputFile: 'sn4000.pdf',
    files: ['YPC_2 31.pdf', 'YPC_2 32.pdf'],
  },
  {
    outputFile: 'solenoid_coil_series.pdf',
    files: ['YPC_2 33.pdf', 'YPC_2 34.pdf'],
  },
  {
    outputFile: 'din_connector_series.pdf',
    files: ['YPC_2 35.pdf', 'YPC_2 36.pdf'],
  },
  {
    outputFile: 'ymv.pdf',
    files: ['YPC_2 39.pdf', 'YPC_2 40.pdf'],
  },
  {
    outputFile: 'pmev.pdf',
    files: ['YPC_2 41.pdf', 'YPC_2 42.pdf'],
  },
  {
    outputFile: 'rlv.pdf',
    files: ['YPC_2 43.pdf', 'YPC_2 44.pdf'],
  },
  {
    outputFile: 'mlv.pdf',
    files: ['YPC_2 45.pdf', 'YPC_2 46.pdf'],
  },
  {
    outputFile: 'kmv.pdf',
    files: ['YPC_2 47.pdf', 'YPC_2 48.pdf'],
  },
  {
    outputFile: 'tmv.pdf',
    files: ['YPC_2 49.pdf', 'YPC_2 50.pdf'],
  },
  {
    outputFile: 'ft.pdf',
    files: ['YPC_2 51.pdf', 'YPC_2 52.pdf'],
  },
  {
    outputFile: 'ycdq2.pdf',
    files: ['YPC_2 55.pdf', 'YPC_2 56.pdf'],
  },
  {
    outputFile: 'ysc.pdf',
    files: ['YPC_2 57.pdf', 'YPC_2 58.pdf'],
  },
  {
    outputFile: 'air_silencer.pdf',
    files: ['YPC_2 59.pdf', 'YPC_2 60.pdf'],
  },
  {
    outputFile: 'yct.pdf',
    files: ['YPC_2 61.pdf', 'YPC_2 62.pdf'],
  },
  {
    outputFile: 'booster.pdf',
    files: ['YPC_2 63.pdf', 'YPC_2 64.pdf'],
  },
  // Add more groups as needed
];

async function mergePDFs(filesToMerge, outputFileName) {
  const merger = new PDFMerger();

  for (const file of filesToMerge) {
    const filePath = path.join(PDF_FOLDER, file);
    if (fs.existsSync(filePath)) {
      console.log(`Adding: ${filePath}`);
      await merger.add(filePath);
    } else {
      console.log(`❌ File not found: ${filePath}`);
    }
  }

  const outputFilePath = path.resolve(__dirname, outputFileName);
  await merger.save(outputFilePath);
  console.log(`✅ Merged PDF saved as: ${outputFilePath}`);
}

async function processMergeGroups() {
  for (const group of mergeGroups) {
    await mergePDFs(group.files, group.outputFile);
  }
}

processMergeGroups().catch(err => {
  console.error('❌ Error merging PDFs:', err);
});
