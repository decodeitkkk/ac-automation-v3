const fs = require('fs');
const path = require('path');
const PDFMerger = require('pdf-merger-js');

// Folder containing the PDFs
const PDF_FOLDER = path.resolve(__dirname, 'reypc2');

// Define groups of PDFs to merge
const mergeGroups = [
 
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
