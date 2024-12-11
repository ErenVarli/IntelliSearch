var request = "";

const MULTIPLE_URL_NAME_KEY_WORD = " allinurl:";
const MULTIPLE_TITLE_NAME_KEY_WORD = " allintitle:";
const MULTIPLE_TEXT_NAME_KEY_WORD = " allintext:";

function clearRequest() {
  request = "";
}

export function combinedOperatorsCombinationEngine(
  multiple_specific_terms_in_url: string,
  multiple_specific_terms_in_title: string,
  multiple_specific_terms_in_page: string
) {
  clearRequest();
  multiple_specific_terms_in_url_engine(multiple_specific_terms_in_url);
  multiple_specific_terms_in_title_engine(multiple_specific_terms_in_title);
  multiple_specific_terms_in_page_engine(multiple_specific_terms_in_page);

  return request;
}

function multiple_specific_terms_in_url_engine(
  multiple_specific_terms_in_url: string
) {
  if (multiple_specific_terms_in_url) {
    request += MULTIPLE_URL_NAME_KEY_WORD + multiple_specific_terms_in_url;
  }
}

function multiple_specific_terms_in_title_engine(
  multiple_specific_terms_in_title: string
) {
  if (multiple_specific_terms_in_title) {
    request += MULTIPLE_TITLE_NAME_KEY_WORD + multiple_specific_terms_in_title;
  }
}

function multiple_specific_terms_in_page_engine(
  multiple_specific_terms_in_page: string
) {
  if (multiple_specific_terms_in_page) {
    request += MULTIPLE_TEXT_NAME_KEY_WORD + multiple_specific_terms_in_page;
  }
}
