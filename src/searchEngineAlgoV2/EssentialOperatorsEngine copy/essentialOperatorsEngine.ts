var request = "";

const TARGETED_DOMAIN_NAME_KEY_WORD = " site:";
const SIMILAR_SITE_NAME_KEY_WORD = " related:";
const SPECIFIC_URL_NAME_KEY_WORD = " inurl:";
const SPECIFIC_TITLE_NAME_KEY_WORD = " intitle:";
const SPECIFIC_TEXT_NAME_KEY_WORD = " intext:";

function clearRequest() {
  request = "";
}

export function essentialOperatorsCombinationEngine(
  targeted_sentence: string,
  terms_to_exclude: string,
  targeted_domain_name: string,
  similar_sites: string,
  specific_term_in_the_url: string,
  specific_term_in_the_title: string,
  specific_term_in_the_page: string,
  least_one_specified_terms: string,
  required_terms: string
) {
  clearRequest();
  targeted_sentence_engine(targeted_sentence);
  terms_to_exclude_engine(terms_to_exclude);
  targeted_domain_name_engine(targeted_domain_name);
  similar_sites_engine(similar_sites);
  specific_term_in_the_url_engine(specific_term_in_the_url);
  specific_term_in_the_title_engine(specific_term_in_the_title);
  specific_term_in_the_page_engine(specific_term_in_the_page);
  least_one_specified_terms_engine(least_one_specified_terms);
  required_terms_engine(required_terms);

  return request;
}

function targeted_sentence_engine(targeted_sentence: string) {
  if (targeted_sentence) {
    request = ' "' + targeted_sentence.trim() + '"';
  }
}

function terms_to_exclude_engine(terms_to_exclude: string) {
  if (terms_to_exclude) {
    let terms_to_exclude_array = terms_to_exclude.split(" ");
    if (terms_to_exclude_array.length) {
      for (let i = 0; i < terms_to_exclude_array.length; i++) {
        request += " -" + terms_to_exclude_array[i].trim();
      }
    }
  }
}

function targeted_domain_name_engine(targeted_domain_name: string) {
  if (targeted_domain_name) {
    request += TARGETED_DOMAIN_NAME_KEY_WORD + targeted_domain_name.trim();
  }
}

function similar_sites_engine(similar_sites: string) {
  if (similar_sites) {
    request += SIMILAR_SITE_NAME_KEY_WORD + similar_sites.trim();
  }
}

function specific_term_in_the_url_engine(specific_term_in_the_url: string) {
  if (specific_term_in_the_url) {
    request += SPECIFIC_URL_NAME_KEY_WORD + specific_term_in_the_url.trim();
  }
}

function specific_term_in_the_title_engine(specific_term_in_the_title: string) {
  if (specific_term_in_the_title) {
    request += SPECIFIC_TITLE_NAME_KEY_WORD + specific_term_in_the_title.trim();
  }
}

function specific_term_in_the_page_engine(specific_term_in_the_page: string) {
  if (specific_term_in_the_page) {
    request += SPECIFIC_TEXT_NAME_KEY_WORD + specific_term_in_the_page.trim();
  }
}

function least_one_specified_terms_engine(least_one_specified_terms: string) {
  if (least_one_specified_terms) {
    let least_one_specified_terms_array = least_one_specified_terms.split(" ");
    if (least_one_specified_terms_array.length > 1) {
      for (let i = 0; i < least_one_specified_terms_array.length; i++) {
        request += " " + least_one_specified_terms_array[i];
        if (i < least_one_specified_terms_array.length - 1) {
          request += " OR";
        }
      }
    }
  }
}

function required_terms_engine(required_terms: string) {
  if (required_terms) {
    let required_terms_array = required_terms.split(" ");
    if (required_terms_array.length > 1) {
      for (let i = 0; i < required_terms.length; i++) {
        request += " " + required_terms[i];
        if (i < required_terms_array.length - 1) {
          request += " AND";
        }
      }
    }
  }
}
