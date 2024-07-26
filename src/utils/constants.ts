import { APP_NAME } from "constants/commonConstants";

export const DEV_BASE_URL = "https://dev.yatra.com";
export const PROD_BASE_URL = "https://www.yatra.com";
export const PROD_SECURE_BASE_URL = "https://secure.yatra.com";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? DEV_BASE_URL : PROD_BASE_URL;

export const HEADER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/service?name=B2B_HEADER&firstPageLoad=true&ssoToken={0}&userType={1}`;
export const FOOTER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/dom/service?name=FOOTER&dataType=hook&ssoToken={0}&userType={1}`;

export const LOGIN_URL = "/social/custom/crp/login.htm?";
export const GET_TRAVELLER_DATA = `/${APP_NAME}/getTravellerData`;
export const GET_TRAVELLER_DATA_FROM_MO = 'http://mo.internals.yatra.com/mo/v1/corporate/trip'
export const GET_USER_DETAILS = 'http://service1.yatra.com/single-signon-service/services/corporate-login-service/corporate/session/loginInfo/complete';
export const SESSION_TIMEOUT_TIMER = 1800000;
export const TIMEOUT = 1800000;

export const REGEX = {
  SPECIAL_CHAR: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?,0-9]+/,
  ALPHA: /^[A-Za-z\s]+$/,
  EMAIL: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  MOBILE_10: /^\d{10}$/,
  GENERIC_MOBILE: /^\d{3,17}$/,
  REPORTING_PARAM: /^[a-zA-Z\d\s-_@%,.:;()|&#\\\/$+]+$/,
};

export const VALIDATION_MSG = {
  REQURIED: "required",
  PATTERN: "invalid",
};
export const LABELS: { [x: string]: string } = {
  firstName: "First Name",
  middleName: "Middle Name",
  lastName: "Last Name",
  mobile: "Mobile",
  email: "Email",
  title: "Title",
};

export const ISD_CODES = [
  {
    slNo: 1,
    countryName: "Afghanistan",
    countryCode: "93",
  },
  {
    slNo: 2,
    countryName: "Albania",
    countryCode: "355",
  },
  {
    slNo: 3,
    countryName: "Algeria",
    countryCode: "213",
  },
  {
    slNo: 4,
    countryName: "American Samoa",
    countryCode: "1 684",
  },
  {
    slNo: 5,
    countryName: "Andorra",
    countryCode: "376",
  },
  {
    slNo: 6,
    countryName: "Angola",
    countryCode: "244",
  },
  {
    slNo: 7,
    countryName: "Anguilla",
    countryCode: "1 264",
  },
  {
    slNo: 8,
    countryName: "Antarctica",
    countryCode: "672",
  },
  {
    slNo: 9,
    countryName: "Antigua and Barbuda",
    countryCode: "1 268",
  },
  {
    slNo: 10,
    countryName: "Argentina",
    countryCode: "54",
  },
  {
    slNo: 11,
    countryName: "Armenia",
    countryCode: "374",
  },
  {
    slNo: 12,
    countryName: "Aruba",
    countryCode: "297",
  },
  {
    slNo: 13,
    countryName: "Australia",
    countryCode: "61",
  },
  {
    slNo: 14,
    countryName: "Austria",
    countryCode: "43",
  },
  {
    slNo: 15,
    countryName: "Azerbaijan",
    countryCode: "994",
  },
  {
    slNo: 16,
    countryName: "Bahamas",
    countryCode: "1 242",
  },
  {
    slNo: 17,
    countryName: "Bahrain",
    countryCode: "973",
  },
  {
    slNo: 18,
    countryName: "Bangladesh",
    countryCode: "880",
  },
  {
    slNo: 19,
    countryName: "Barbados",
    countryCode: "1 246",
  },
  {
    slNo: 20,
    countryName: "Belarus",
    countryCode: "375",
  },
  {
    slNo: 21,
    countryName: "Belgium",
    countryCode: "32",
  },
  {
    slNo: 22,
    countryName: "Belize",
    countryCode: "501",
  },
  {
    slNo: 23,
    countryName: "Benin",
    countryCode: "229",
  },
  {
    slNo: 24,
    countryName: "Bermuda",
    countryCode: "1 441",
  },
  {
    slNo: 25,
    countryName: "Bhutan",
    countryCode: "975",
  },
  {
    slNo: 26,
    countryName: "Bolivia",
    countryCode: "591",
  },
  {
    slNo: 27,
    countryName: "Bosnia and Herzegovina",
    countryCode: "387",
  },
  {
    slNo: 28,
    countryName: "Botswana",
    countryCode: "267",
  },
  {
    slNo: 29,
    countryName: "Brazil",
    countryCode: "55",
  },
  {
    slNo: 30,
    countryName: "British Virgin Islands",
    countryCode: "1 284",
  },
  {
    slNo: 31,
    countryName: "Brunei",
    countryCode: "673",
  },
  {
    slNo: 32,
    countryName: "Bulgaria",
    countryCode: "359",
  },
  {
    slNo: 33,
    countryName: "Burkina Faso",
    countryCode: "226",
  },
  {
    slNo: 34,
    countryName: "Burma (Myanmar)",
    countryCode: "95",
  },
  {
    slNo: 35,
    countryName: "Burundi",
    countryCode: "257",
  },
  {
    slNo: 36,
    countryName: "Cambodia",
    countryCode: "855",
  },
  {
    slNo: 37,
    countryName: "Cameroon",
    countryCode: "237",
  },
  {
    slNo: 38,
    countryName: "Canada",
    countryCode: "1",
  },
  {
    slNo: 39,
    countryName: "Cape Verde",
    countryCode: "238",
  },
  {
    slNo: 40,
    countryName: "Cayman Islands",
    countryCode: "1 345",
  },
  {
    slNo: 41,
    countryName: "Central African Republic",
    countryCode: "236",
  },
  {
    slNo: 42,
    countryName: "Chad",
    countryCode: "235",
  },
  {
    slNo: 43,
    countryName: "Chile",
    countryCode: "56",
  },
  {
    slNo: 44,
    countryName: "China",
    countryCode: "86",
  },
  {
    slNo: 45,
    countryName: "Christmas Island",
    countryCode: "61",
  },
  {
    slNo: 46,
    countryName: "Cocos (Keeling) Islands",
    countryCode: "61",
  },
  {
    slNo: 47,
    countryName: "Colombia",
    countryCode: "57",
  },
  {
    slNo: 48,
    countryName: "Comoros",
    countryCode: "269",
  },
  {
    slNo: 49,
    countryName: "Cook Islands",
    countryCode: "682",
  },
  {
    slNo: 50,
    countryName: "Costa Rica",
    countryCode: "506",
  },
  {
    slNo: 51,
    countryName: "Croatia",
    countryCode: "385",
  },
  {
    slNo: 52,
    countryName: "Cuba",
    countryCode: "53",
  },
  {
    slNo: 53,
    countryName: "Cyprus",
    countryCode: "357",
  },
  {
    slNo: 54,
    countryName: "Czech Republic",
    countryCode: "420",
  },
  {
    slNo: 55,
    countryName: "Democratic Republic of the Congo",
    countryCode: "243",
  },
  {
    slNo: 56,
    countryName: "Denmark",
    countryCode: "45",
  },
  {
    slNo: 57,
    countryName: "Djibouti",
    countryCode: "253",
  },
  {
    slNo: 58,
    countryName: "Dominica",
    countryCode: "1 767",
  },
  {
    slNo: 59,
    countryName: "Dominican Republic",
    countryCode: "1 809",
  },
  {
    slNo: 60,
    countryName: "Ecuador",
    countryCode: "593",
  },
  {
    slNo: 61,
    countryName: "Egypt",
    countryCode: "20",
  },
  {
    slNo: 62,
    countryName: "El Salvador",
    countryCode: "503",
  },
  {
    slNo: 63,
    countryName: "Equatorial Guinea",
    countryCode: "240",
  },
  {
    slNo: 64,
    countryName: "Eritrea",
    countryCode: "291",
  },
  {
    slNo: 65,
    countryName: "Estonia",
    countryCode: "372",
  },
  {
    slNo: 66,
    countryName: "Ethiopia",
    countryCode: "251",
  },
  {
    slNo: 67,
    countryName: "Falkland Islands",
    countryCode: "500",
  },
  {
    slNo: 68,
    countryName: "Faroe Islands",
    countryCode: "298",
  },
  {
    slNo: 69,
    countryName: "Fiji",
    countryCode: "679",
  },
  {
    slNo: 70,
    countryName: "Finland",
    countryCode: "358",
  },
  {
    slNo: 71,
    countryName: "France",
    countryCode: "33",
  },
  {
    slNo: 72,
    countryName: "French Polynesia",
    countryCode: "689",
  },
  {
    slNo: 73,
    countryName: "Gabon",
    countryCode: "241",
  },
  {
    slNo: 74,
    countryName: "Gambia",
    countryCode: "220",
  },
  {
    slNo: 75,
    countryName: "Gaza Strip",
    countryCode: "970",
  },
  {
    slNo: 76,
    countryName: "Georgia",
    countryCode: "995",
  },
  {
    slNo: 77,
    countryName: "Germany",
    countryCode: "49",
  },
  {
    slNo: 78,
    countryName: "Ghana",
    countryCode: "233",
  },
  {
    slNo: 79,
    countryName: "Gibraltar",
    countryCode: "350",
  },
  {
    slNo: 80,
    countryName: "Greece",
    countryCode: "30",
  },
  {
    slNo: 81,
    countryName: "Greenland",
    countryCode: "299",
  },
  {
    slNo: 82,
    countryName: "Grenada",
    countryCode: "1 473",
  },
  {
    slNo: 83,
    countryName: "Guam",
    countryCode: "1 671",
  },
  {
    slNo: 84,
    countryName: "Guatemala",
    countryCode: "502",
  },
  {
    slNo: 85,
    countryName: "Guinea",
    countryCode: "224",
  },
  {
    slNo: 86,
    countryName: "Guinea-Bissau",
    countryCode: "245",
  },
  {
    slNo: 87,
    countryName: "Guyana",
    countryCode: "592",
  },
  {
    slNo: 88,
    countryName: "Haiti",
    countryCode: "509",
  },
  {
    slNo: 89,
    countryName: "Holy See (Vatican City)",
    countryCode: "39",
  },
  {
    slNo: 90,
    countryName: "Honduras",
    countryCode: "504",
  },
  {
    slNo: 91,
    countryName: "Hong Kong",
    countryCode: "852",
  },
  {
    slNo: 92,
    countryName: "Hungary",
    countryCode: "36",
  },
  {
    slNo: 93,
    countryName: "Iceland",
    countryCode: "354",
  },
  {
    slNo: 94,
    countryName: "India",
    countryCode: "91",
  },
  {
    slNo: 95,
    countryName: "Indonesia",
    countryCode: "62",
  },
  {
    slNo: 96,
    countryName: "Iran",
    countryCode: "98",
  },
  {
    slNo: 97,
    countryName: "Iraq",
    countryCode: "964",
  },
  {
    slNo: 98,
    countryName: "Ireland",
    countryCode: "353",
  },
  {
    slNo: 99,
    countryName: "Isle of Man",
    countryCode: "44",
  },
  {
    slNo: 100,
    countryName: "Israel",
    countryCode: "972",
  },
  {
    slNo: 101,
    countryName: "Italy",
    countryCode: "39",
  },
  {
    slNo: 102,
    countryName: "Ivory Coast",
    countryCode: "225",
  },
  {
    slNo: 103,
    countryName: "Jamaica",
    countryCode: "1 876",
  },
  {
    slNo: 104,
    countryName: "Japan",
    countryCode: "81",
  },
  {
    slNo: 105,
    countryName: "Jordan",
    countryCode: "962",
  },
  {
    slNo: 106,
    countryName: "Kazakhstan",
    countryCode: "7",
  },
  {
    slNo: 107,
    countryName: "Kenya",
    countryCode: "254",
  },
  {
    slNo: 108,
    countryName: "Kiribati",
    countryCode: "686",
  },
  {
    slNo: 109,
    countryName: "Kosovo",
    countryCode: "381",
  },
  {
    slNo: 110,
    countryName: "Kuwait",
    countryCode: "965",
  },
  {
    slNo: 111,
    countryName: "Kyrgyzstan",
    countryCode: "996",
  },
  {
    slNo: 112,
    countryName: "Laos",
    countryCode: "856",
  },
  {
    slNo: 113,
    countryName: "Latvia",
    countryCode: "371",
  },
  {
    slNo: 114,
    countryName: "Lebanon",
    countryCode: "961",
  },
  {
    slNo: 115,
    countryName: "Lesotho",
    countryCode: "266",
  },
  {
    slNo: 116,
    countryName: "Liberia",
    countryCode: "231",
  },
  {
    slNo: 117,
    countryName: "Libya",
    countryCode: "218",
  },
  {
    slNo: 118,
    countryName: "Liechtenstein",
    countryCode: "423",
  },
  {
    slNo: 119,
    countryName: "Lithuania",
    countryCode: "370",
  },
  {
    slNo: 120,
    countryName: "Luxembourg",
    countryCode: "352",
  },
  {
    slNo: 121,
    countryName: "Macau",
    countryCode: "853",
  },
  {
    slNo: 122,
    countryName: "Macedonia",
    countryCode: "389",
  },
  {
    slNo: 123,
    countryName: "Madagascar",
    countryCode: "261",
  },
  {
    slNo: 124,
    countryName: "Malawi",
    countryCode: "265",
  },
  {
    slNo: 125,
    countryName: "Malaysia",
    countryCode: "60",
  },
  {
    slNo: 126,
    countryName: "Maldives",
    countryCode: "960",
  },
  {
    slNo: 127,
    countryName: "Mali",
    countryCode: "223",
  },
  {
    slNo: 128,
    countryName: "Malta",
    countryCode: "356",
  },
  {
    slNo: 129,
    countryName: "Marshall Islands",
    countryCode: "692",
  },
  {
    slNo: 130,
    countryName: "Mauritania",
    countryCode: "222",
  },
  {
    slNo: 131,
    countryName: "Mauritius",
    countryCode: "230",
  },
  {
    slNo: 132,
    countryName: "Mayotte",
    countryCode: "262",
  },
  {
    slNo: 133,
    countryName: "Mexico",
    countryCode: "52",
  },
  {
    slNo: 134,
    countryName: "Micronesia",
    countryCode: "691",
  },
  {
    slNo: 135,
    countryName: "Moldova",
    countryCode: "373",
  },
  {
    slNo: 136,
    countryName: "Monaco",
    countryCode: "377",
  },
  {
    slNo: 137,
    countryName: "Mongolia",
    countryCode: "976",
  },
  {
    slNo: 138,
    countryName: "Montenegro",
    countryCode: "382",
  },
  {
    slNo: 139,
    countryName: "Montserrat",
    countryCode: "1 664",
  },
  {
    slNo: 140,
    countryName: "Morocco",
    countryCode: "212",
  },
  {
    slNo: 141,
    countryName: "Mozambique",
    countryCode: "258",
  },
  {
    slNo: 142,
    countryName: "Namibia",
    countryCode: "264",
  },
  {
    slNo: 143,
    countryName: "Nauru",
    countryCode: "674",
  },
  {
    slNo: 144,
    countryName: "Nepal",
    countryCode: "977",
  },
  {
    slNo: 145,
    countryName: "Netherlands",
    countryCode: "31",
  },
  {
    slNo: 146,
    countryName: "Netherlands Antilles",
    countryCode: "599",
  },
  {
    slNo: 147,
    countryName: "New Caledonia",
    countryCode: "687",
  },
  {
    slNo: 148,
    countryName: "New Zealand",
    countryCode: "64",
  },
  {
    slNo: 149,
    countryName: "Nicaragua",
    countryCode: "505",
  },
  {
    slNo: 150,
    countryName: "Niger",
    countryCode: "227",
  },
  {
    slNo: 151,
    countryName: "Nigeria",
    countryCode: "234",
  },
  {
    slNo: 152,
    countryName: "Niue",
    countryCode: "683",
  },
  {
    slNo: 153,
    countryName: "Norfolk Island",
    countryCode: "672",
  },
  {
    slNo: 154,
    countryName: "North Korea",
    countryCode: "850",
  },
  {
    slNo: 155,
    countryName: "Northern Mariana Islands",
    countryCode: "1 670",
  },
  {
    slNo: 156,
    countryName: "Norway",
    countryCode: "47",
  },
  {
    slNo: 157,
    countryName: "Oman",
    countryCode: "968",
  },
  {
    slNo: 158,
    countryName: "Pakistan",
    countryCode: "92",
  },
  {
    slNo: 159,
    countryName: "Palau",
    countryCode: "680",
  },
  {
    slNo: 160,
    countryName: "Panama",
    countryCode: "507",
  },
  {
    slNo: 161,
    countryName: "Papua New Guinea",
    countryCode: "675",
  },
  {
    slNo: 162,
    countryName: "Paraguay",
    countryCode: "595",
  },
  {
    slNo: 163,
    countryName: "Peru",
    countryCode: "51",
  },
  {
    slNo: 164,
    countryName: "Philippines",
    countryCode: "63",
  },
  {
    slNo: 165,
    countryName: "Pitcairn Islands",
    countryCode: "870",
  },
  {
    slNo: 166,
    countryName: "Poland",
    countryCode: "48",
  },
  {
    slNo: 167,
    countryName: "Portugal",
    countryCode: "351",
  },
  {
    slNo: 168,
    countryName: "Puerto Rico",
    countryCode: "1",
  },
  {
    slNo: 169,
    countryName: "Qatar",
    countryCode: "974",
  },
  {
    slNo: 170,
    countryName: "Republic of the Congo",
    countryCode: "242",
  },
  {
    slNo: 171,
    countryName: "Romania",
    countryCode: "40",
  },
  {
    slNo: 172,
    countryName: "Russia",
    countryCode: "7",
  },
  {
    slNo: 173,
    countryName: "Rwanda",
    countryCode: "250",
  },
  {
    slNo: 174,
    countryName: "Saint Barthelemy",
    countryCode: "590",
  },
  {
    slNo: 175,
    countryName: "Saint Helena",
    countryCode: "290",
  },
  {
    slNo: 176,
    countryName: "Saint Kitts and Nevis",
    countryCode: "1 869",
  },
  {
    slNo: 177,
    countryName: "Saint Lucia",
    countryCode: "1 758",
  },
  {
    slNo: 178,
    countryName: "Saint Martin",
    countryCode: "1 599",
  },
  {
    slNo: 179,
    countryName: "Saint Pierre and Miquelon",
    countryCode: "508",
  },
  {
    slNo: 180,
    countryName: "Saint Vincent and the Grenadines",
    countryCode: "1 784",
  },
  {
    slNo: 181,
    countryName: "Samoa",
    countryCode: "685",
  },
  {
    slNo: 182,
    countryName: "San Marino",
    countryCode: "378",
  },
  {
    slNo: 183,
    countryName: "Sao Tome and Principe",
    countryCode: "239",
  },
  {
    slNo: 184,
    countryName: "Saudi Arabia",
    countryCode: "966",
  },
  {
    slNo: 185,
    countryName: "Senegal",
    countryCode: "221",
  },
  {
    slNo: 186,
    countryName: "Serbia",
    countryCode: "381",
  },
  {
    slNo: 187,
    countryName: "Seychelles",
    countryCode: "248",
  },
  {
    slNo: 188,
    countryName: "Sierra Leone",
    countryCode: "232",
  },
  {
    slNo: 189,
    countryName: "Singapore",
    countryCode: "65",
  },
  {
    slNo: 190,
    countryName: "Slovakia",
    countryCode: "421",
  },
  {
    slNo: 191,
    countryName: "Slovenia",
    countryCode: "386",
  },
  {
    slNo: 192,
    countryName: "Solomon Islands",
    countryCode: "677",
  },
  {
    slNo: 193,
    countryName: "Somalia",
    countryCode: "252",
  },
  {
    slNo: 194,
    countryName: "South Africa",
    countryCode: "27",
  },
  {
    slNo: 195,
    countryName: "South Korea",
    countryCode: "82",
  },
  {
    slNo: 196,
    countryName: "Spain",
    countryCode: "34",
  },
  {
    slNo: 197,
    countryName: "Sri Lanka",
    countryCode: "94",
  },
  {
    slNo: 198,
    countryName: "Sudan",
    countryCode: "249",
  },
  {
    slNo: 199,
    countryName: "Suriname",
    countryCode: "597",
  },
  {
    slNo: 200,
    countryName: "Swaziland",
    countryCode: "268",
  },
  {
    slNo: 201,
    countryName: "Sweden",
    countryCode: "46",
  },
  {
    slNo: 202,
    countryName: "Switzerland",
    countryCode: "41",
  },
  {
    slNo: 203,
    countryName: "Syria",
    countryCode: "963",
  },
  {
    slNo: 204,
    countryName: "Taiwan",
    countryCode: "886",
  },
  {
    slNo: 205,
    countryName: "Tajikistan",
    countryCode: "992",
  },
  {
    slNo: 206,
    countryName: "Tanzania",
    countryCode: "255",
  },
  {
    slNo: 207,
    countryName: "Thailand",
    countryCode: "66",
  },
  {
    slNo: 208,
    countryName: "Timor-Leste",
    countryCode: "670",
  },
  {
    slNo: 209,
    countryName: "Togo",
    countryCode: "228",
  },
  {
    slNo: 210,
    countryName: "Tokelau",
    countryCode: "690",
  },
  {
    slNo: 211,
    countryName: "Tonga",
    countryCode: "676",
  },
  {
    slNo: 212,
    countryName: "Trinidad and Tobago",
    countryCode: "1 868",
  },
  {
    slNo: 213,
    countryName: "Tunisia",
    countryCode: "216",
  },
  {
    slNo: 214,
    countryName: "Turkey",
    countryCode: "90",
  },
  {
    slNo: 215,
    countryName: "Turkmenistan",
    countryCode: "993",
  },
  {
    slNo: 216,
    countryName: "Turks and Caicos Islands",
    countryCode: "1 649",
  },
  {
    slNo: 217,
    countryName: "Tuvalu",
    countryCode: "688",
  },
  {
    slNo: 218,
    countryName: "Uganda",
    countryCode: "256",
  },
  {
    slNo: 219,
    countryName: "Ukraine",
    countryCode: "380",
  },
  {
    slNo: 220,
    countryName: "United Arab Emirates",
    countryCode: "971",
  },
  {
    slNo: 221,
    countryName: "United Kingdom",
    countryCode: "44",
  },
  {
    slNo: 222,
    countryName: "United States",
    countryCode: "1",
  },
  {
    slNo: 223,
    countryName: "Uruguay",
    countryCode: "598",
  },
  {
    slNo: 224,
    countryName: "US Virgin Islands",
    countryCode: "1 340",
  },
  {
    slNo: 225,
    countryName: "Uzbekistan",
    countryCode: "998",
  },
  {
    slNo: 226,
    countryName: "Vanuatu",
    countryCode: "678",
  },
  {
    slNo: 227,
    countryName: "Venezuela",
    countryCode: "58",
  },
  {
    slNo: 228,
    countryName: "Vietnam",
    countryCode: "84",
  },
  {
    slNo: 229,
    countryName: "Wallis and Futuna",
    countryCode: "681",
  },
  {
    slNo: 230,
    countryName: "West Bank",
    countryCode: "970",
  },
  {
    slNo: 231,
    countryName: "Yemen",
    countryCode: "967",
  },
  {
    slNo: 232,
    countryName: "Zambia",
    countryCode: "260",
  },
  {
    slNo: 233,
    countryName: "Zimbabwe",
    countryCode: "263",
  },
];

