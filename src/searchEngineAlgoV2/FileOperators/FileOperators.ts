var request = "";

const FILE_NAME_KEY_WORD = " filetype:";

function clearRequest() {
  request = "";
}

export function fileOperatorsCombinationEngine(selectedFiles: string[]) {
  clearRequest();
  file_selector_engine(selectedFiles);
  return request;
}

function file_selector_engine(selectedFiles: string[]) {
  if (selectedFiles.length > 0) {
    const combined_files = selectedFiles.join(" OR" + FILE_NAME_KEY_WORD);
    request += FILE_NAME_KEY_WORD + combined_files;
  }
}
