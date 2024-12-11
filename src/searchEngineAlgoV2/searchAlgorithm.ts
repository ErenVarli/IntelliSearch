import { combinedOperatorsCombinationEngine } from "./CombinedOperatorsEngine/combinedOperatorsEngine";
import { essentialOperatorsCombinationEngine } from "./EssentialOperatorsEngine copy/essentialOperatorsEngine";
import { dateOperatorsCombinationEngine } from "./DateOperators/dateOperatorsEngine";
import { fileOperatorsCombinationEngine } from "./FileOperators/FileOperators";
import { hidePopup } from "../actions/DisplayPopup";

let request: string = "";

function setUserRequest(userRequest: string): void {
  if (userRequest != "" && !request.includes(userRequest)) {
    request += userRequest;
    userRequest = "";
  }
}

function getUserRequest() {
  return request;
}

function clearRequest() {
  request = "";
}

function essentialOperatorsCombinationVariables() {
  let targeted_sentence =
    (<HTMLInputElement>document.getElementById("targeted-sentence")).value ||
    "";
  let terms_to_exclude =
    (<HTMLInputElement>document.getElementById("terms-to-exclude")).value || "";
  let targeted_domain_name =
    (<HTMLInputElement>document.getElementById("targeted-domain-name")).value ||
    "";
  let similar_sites =
    (<HTMLInputElement>document.getElementById("similar-sites")).value || "";
  let specific_term_in_the_url =
    (<HTMLInputElement>document.getElementById("specific-term-in-the-url"))
      .value || "";
  let specific_term_in_the_title =
    (<HTMLInputElement>document.getElementById("specific-term-in-the-title"))
      .value || "";
  let specific_term_in_the_page =
    (<HTMLInputElement>document.getElementById("specific-term-in-the-page"))
      .value || "";
  let least_one_specified_terms =
    (<HTMLInputElement>document.getElementById("least-one-specified-terms"))
      .value || "";
  let required_terms =
    (<HTMLInputElement>document.getElementById("required-terms")).value || "";

  if (
    targeted_sentence ||
    terms_to_exclude ||
    targeted_domain_name ||
    similar_sites ||
    specific_term_in_the_url ||
    specific_term_in_the_title ||
    specific_term_in_the_page ||
    least_one_specified_terms ||
    required_terms
  ) {
    setUserRequest(
      essentialOperatorsCombinationEngine(
        targeted_sentence,
        terms_to_exclude,
        targeted_domain_name,
        similar_sites,
        specific_term_in_the_url,
        specific_term_in_the_title,
        specific_term_in_the_page,
        least_one_specified_terms,
        required_terms
      )
    );
  }
}

function combinedOperatorsCombinationVariables() {
  let multiple_specific_terms_in_url =
    (<HTMLInputElement>(
      document.getElementById("multiple-specific-terms-in-url")
    )).value || "";
  let multiple_specific_terms_in_title =
    (<HTMLInputElement>(
      document.getElementById("multiple-specific-terms-in-title")
    )).value || "";
  let multiple_specific_terms_in_page =
    (<HTMLInputElement>(
      document.getElementById("multiple-specific-terms-in-page")
    )).value || "";

  if (
    multiple_specific_terms_in_url ||
    multiple_specific_terms_in_title ||
    multiple_specific_terms_in_page
  ) {
    setUserRequest(
      combinedOperatorsCombinationEngine(
        multiple_specific_terms_in_url,
        multiple_specific_terms_in_title,
        multiple_specific_terms_in_page
      )
    );
  }
}

function dateOperatorsCombinationVariables() {
  let before_date =
    (<HTMLInputElement>document.getElementById("before-date")).value || "";
  let after_date =
    (<HTMLInputElement>document.getElementById("after-date")).value || "";

  if (before_date || after_date) {
    setUserRequest(dateOperatorsCombinationEngine(before_date, after_date));
  }
}

function fileOperatorsCombinationVariables() {
  let selected_files = Array.from(
    document.querySelectorAll(".form-check-input:checked")
  ).map((checkbox) => (checkbox as HTMLInputElement).value);

  if (selected_files) {
    setUserRequest(fileOperatorsCombinationEngine(selected_files));
  }
}

function engine() {
  clearRequest();
  essentialOperatorsCombinationVariables();
  combinedOperatorsCombinationVariables();
  dateOperatorsCombinationVariables();
  fileOperatorsCombinationVariables();
}

export function searchEngine() {
  engine();
  setSearchEngineRequest();
}

export function setSearchEngineRequest() {
  if (getUserRequest() != "") {
    (<HTMLInputElement>document.getElementById("gsc-i-id1")).value =
      getUserRequest();
  } else {
    window.location.href = "/";
  }

  let search_button: HTMLElement = document.querySelector(
    ".gsc-search-button-v2"
  ) as HTMLElement;
  search_button.click();
  hidePopup();
}
