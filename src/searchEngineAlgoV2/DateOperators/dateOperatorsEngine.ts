var request = "";

const BEFORE_DATE_NAME_KEY_WORD = " before:";
const AFTER_DATE_NAME_KEY_WORD = " after:";

function clearRequest() {
  request = "";
}

export function dateOperatorsCombinationEngine(
  before_date: string,
  after_date: string
) {
  clearRequest();
  before_date_engine(before_date);
  after_date_engine(after_date);
  return request;
}

function before_date_engine(before_date: string) {
  if (before_date) {
    request += BEFORE_DATE_NAME_KEY_WORD + before_date;
  }
}

function after_date_engine(after_date: string) {
  if (after_date) {
    request += AFTER_DATE_NAME_KEY_WORD + after_date;
  }
}
