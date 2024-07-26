export const YTHELPER = {
	dynamicSort: function (property) {
	  var sortOrder = 1;
	  if (property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	  }
	  return function (a, b) {
		var result =
		  a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	  };
	},
	isAlphanumeric: function (c) {
	  var b = new RegExp("^[a-z0-9]+$", "i");
	  var a = b.test(c);
	  return a;
	},
	createField: function (elmName, elemAttr) {
	  var elem = document.createElement(elmName);
	  var res = this.setMultipleAttr(elem, elemAttr);
	  return res;
	},
	setMultipleAttr: function (elmName, obj) {
	  var elemName = elmName;
	  for (var key in obj) {
		elemName.setAttribute(key, obj[key]);
	  }
	  return elemName;
	},
	createFields: function (elmToAppend, elmName, elmArray) {
	  var _this = this;
	  var elmToAppend = elmToAppend;
	  elmArray.forEach(function (arr) {
		var elm = document.createElement(elmName);
		var res = _this.setMultipleAttr(elm, arr);
		elmToAppend.appendChild(res);
	  });
	  return elmToAppend;
	},
	encodeString: function (str) {
	  if (str != "") {
		str = str.replace(/(")/g, "\\$1");
		str = escape(str);
	  }
	  return str;
	},
	randomString: function (len) {
	  len = len || 10;
	  let charSet =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	  let randomString = "";
	  for (let i = 0; i < len; i++) {
		let randomPoz = Math.floor(Math.random() * charSet.length);
		randomString += charSet.substring(randomPoz, randomPoz + 1);
	  }
	  return randomString;
	},
	autocomplete: function (list) {
	  var list = window["airportJson"];
	  var itemList = [];
	  for (var i in list) {
		itemList.push({
		  label: list[i],
		  cn: list[i].ct + " (" + list[i].ac + ") - " + list[i].an,
		  cc: list[i].cc ? list[i].cc.toLowerCase() : "",
		});
	  }
	  return itemList;
	},
	decodeString: function (str) {
	  if (str != "") {
		str = decodeURI(unescape(str));
	  }
	  return str;
	},
	formatPrice: function (number, isNumber, as) {
	  if (isNaN(number)) {
		return number;
	  }
	  if (typeof number == "undefined" || number == "") {
		return number;
	  }
	  if (isNumber) {
		return as === undefined
		  ? parseInt(number.toString().replace(/,/g, ""))
		  : parseFloat(number.toString().replace(/,/g, ""));
	  }
	  if (number != undefined && number != "") {
		number = parseFloat(number);
		number = Math.round(number);
		//number =(as===undefined) ?  Math.round(parseInt(number)) : parseFloat(number); //fixed for multiple commas sometime
		if (number <= 999) {
		  return number;
		}
		var regexp = new RegExp(/\B(?=(\d{2})*(\d{3})$)/g);
		var fNumber = number.toString().replace(regexp, ",");
		return fNumber;
	  }
	  return number;
	},
	urlToObj: function (url) {
	  var url_details = {};
	  url_details.param = {};
	  try {
		var arr = url.split("?");
		var isParams = url.indexOf("&");
		if (arr.length == 1) {
		  if (isParams != -1) {
			var arr4 = arr[0].split("&");
			for (var i in arr4) {
			  if (arr4[i]) {
				var arr5 = arr4[i].split("=");
				var key = arr5[0];
				if (arr5.length > 1) {
				  var value = arr5[1];
				} else {
				  var value = "";
				}
				url_details.param[key] = value;
			  }
			}
		  } else {
			var arr1 = arr[0].split("//");
			if (arr1.length > 1) {
			  url_details.protocol = arr1[0].split(":")[0];
			  var arr2 = arr1[1].split("/");
			} else {
			  var arr2 = arr1[0].split("/");
			}
			var arr6 = arr2[0].split(":");
			url_details.domain = arr6[0];
			if (arr6.length > 1) {
			  url_details.port = arr6[1];
			}
			if (arr2.length > 1) {
			  var arr3 = arr2.slice(1);
			  if (arr3.length == 1 && arr3[0] == "") {
				url_details.resourceID = "/";
			  } else {
				url_details.resourceID = arr3.join("/");
			  }
			} else {
			  url_details.resourceID = "/";
			}
		  }
		} else {
		  var arr1 = arr[0].split("//");
		  if (arr1.length > 1) {
			url_details.protocol = arr1[0].split(":")[0];
			var arr2 = arr1[1].split("/");
		  } else {
			var arr2 = arr1[0].split("/");
		  }
		  var arr6 = arr2[0].split(":");
		  url_details.domain = arr6[0];
		  if (arr6.length > 1) {
			url_details.port = arr6[1];
		  }
		  if (arr2.length > 1) {
			var arr3 = arr2.slice(1);
			if (arr3.length == 1 && arr3[0] == "") {
			  url_details.resourceID = "/";
			} else {
			  url_details.resourceID = arr3.join("/");
			}
		  } else {
			url_details.resourceID = "/";
		  }
  
		  var arr4 = arr[1].split("&");
		  for (var i in arr4) {
			if (arr4[i]) {
			  var arr5 = arr4[i].split("=");
			  var key = arr5[0];
			  if (arr5.length > 1) {
				var value = arr5[1];
			  } else {
				var value = "";
			  }
			  url_details.param[key] = value;
			}
		  }
		}
	  } catch (e) {}
	  return url_details;
	},
	objToUrl: function (object, encode) {
	  function encodeString(str) {
		if (
		  typeof encode != "undefined" &&
		  (encode == true || encode == "true")
		) {
		  return encodeURIComponent(str);
		} else {
		  return str;
		}
	  }
  
	  function objToQueryString(obj, name) {
		var t = Object.prototype.toString.call(obj).match(/\[object\s(\w+)\]/)[1];
		var init_name = "";
		if (typeof name != "undefined" && name != "") {
		  init_name = name + ".";
		}
		var url = "";
		if (t == "Object") {
		  for (var key in obj) {
			var type = Object.prototype.toString
			  .call(obj[key])
			  .match(/\[object\s(\w+)\]/)[1];
			if (type != "Object" && type != "Array") {
			  if (obj.hasOwnProperty(key)) {
				url +=
				  encodeString(init_name + key) +
				  "=" +
				  encodeString(obj[key]) +
				  "&";
			  }
			} else {
			  if (type == "Object") {
				url += objToQueryString(obj[key], init_name + key);
			  } else if (type == "Array") {
				var len = obj[key].length;
				for (var i = 0; i < len; i++) {
				  if (typeof obj[key][i] != "object") {
					url +=
					  encodeString(init_name + key + "[" + i + "]") +
					  "=" +
					  encodeString(obj[key][i]) +
					  "&";
				  } else {
					url += objToQueryString(
					  obj[key][i],
					  init_name + key + "[" + i + "]"
					);
				  }
				}
			  }
			}
		  }
		  return String(url);
		} else if (t == "Array") {
		  var length = obj.length;
		  for (var j = 0; j < length; j++) {
			if (typeof obj[key][j] != "object") {
			  url +=
				encodeString(init_name + key + "[" + j + "]") +
				"=" +
				encodeString(obj[key][j]) +
				"&";
			} else {
			  url += objToQueryString(
				obj[key][j],
				init_name + key + "[" + j + "]"
			  );
			}
		  }
		  return String(url);
		}
	  }
	  if (typeof object == "object") {
		if (
		  typeof object.domain != "undefined" &&
		  typeof object.param == "object"
		) {
		  var queryString = "";
		  if (!common_func.isEmptyObject(object.param)) {
			queryString = objToQueryString(object.param).slice(0, -1);
		  }
		  var protocol =
			typeof object.protocol == "string"
			  ? object.protocol + "://"
			  : window.location.protocol + "//";
		  var resouceid =
			typeof object.resourceID == "string" ? "/" + object.resourceID : "";
		  var queryString = queryString ? "?" + queryString : queryString;
		  var port =
			typeof object.port == "string" &&
			object.port &&
			object.domain.indexOf(":") == -1
			  ? object.port.indexOf(":") != -1
				? object.port
				: ":" + object.port
			  : "";
		  return protocol + object.domain + port + resouceid + queryString;
		} else {
		  return objToQueryString(object).slice(0, -1);
		}
	  }
	},
	objToUrlWithoutEmptyValues: function ( obj) {
	  var urlString = "";
	  for (var key in obj) {
		if (urlString != "") {
		  urlString += "&";
		}
		if (obj[key]) {
		  urlString += key + "=" + encodeURIComponent(obj[key]);
		}
	  }
	  return urlString;
	},
	urlToObj: function (url) {
	  var url_details = {};
	  url_details.param = {};
	  try {
		var arr = url.split("?");
		var arr1 = arr[0].split("//");
		if (arr1.length > 1) {
		  url_details.protocol = arr1[0].split(":")[0];
		  var arr2 = arr1[1].split("/");
		} else {
		  var arr2 = arr1[0].split("/");
		}
		var arr6 = arr2[0].split(":");
		url_details.domain = arr6[0];
		if (arr6.length > 1) {
		  url_details.port = arr6[1];
		}
		if (arr2.length > 1) {
		  var arr3 = arr2.slice(1);
		  if (arr3.length == 1 && arr3[0] == "") {
			url_details.resourceID = "/";
		  } else {
			url_details.resourceID = arr3.join("/");
		  }
		} else {
		  url_details.resourceID = "/";
		}
		if (arr.length > 1) {
		  var arr4 = arr[1].split("&");
		  for (var i in arr4) {
			if (arr4[i]) {
			  var arr5 = arr4[i].split("=");
			  var key = arr5[0];
			  if (arr5.length > 1) {
				var value = arr5[1];
			  } else {
				var value = "";
			  }
			  url_details.param[key] = value;
			}
		  }
		}
	  } catch (e) {}
	  return url_details;
	},
	isArray: function (o) {
	  return Object.prototype.toString.call(o) == "[object Array]";
	},
	isObject: function (o) {
	  return Object.prototype.toString.call(o) == "[object Object]";
	},
	isNumber: function (o) {
	  return Object.prototype.toString.call(o) == "[object Number]";
	},
	isEmptyObject: function (obj) {
	  for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) return false;
	  }
  
	  return true;
	},
	// helper for merging two object with each other
	extend: function (oldObj, newObj, preserve) {
	  function copy(obj) {
		var F = function () {};
		F.prototype = obj.prototype || obj;
		return new F();
	  }
  
	  // failsave if something goes wrong
	  if (!oldObj || !newObj) return oldObj || newObj || {};
  
	  // make sure we work with copies
	  oldObj = copy(oldObj);
	  newObj = copy(newObj);
  
	  for (var key in newObj) {
		if (Object.prototype.toString.call(newObj[key]) === "[object Object]") {
		  extend(oldObj[key], newObj[key]);
		} else {
		  // if preserve is set to true oldObj will not be overwritten by newObj if
		  // oldObj has already a method key
		  oldObj[key] = preserve && oldObj[key] ? oldObj[key] : newObj[key];
		}
	  }
  
	  return oldObj;
	},
	pattern: {
	  default: "ddd mmm dd yyyy HH:MM:ss",
	  shortDate: "m/d/yy",
	  mediumDate: "mmm d, yyyy",
	  longDate: "mmmm d, yyyy",
	  fullDate: "dddd, mmmm d, yyyy",
	  shortTime: "h:MM TT",
	  mediumTime: "h:MM:ss TT",
	  longTime: "h:MM:ss TT Z",
	  isoDate: "yyyy-mm-dd",
	  isoTime: "HH:MM:ss",
	  isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
	  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
	  simpleDateTime: "dd/mm/yyyy",
	},
	names: {
	  dayNames: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	  ],
	  monthNames: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	  ],
	},
	date: {
	  days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	  months: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	  ],
	  isDateObj: function (obj) {
		return Object.prototype.toString.call(obj) == "[object Date]";
	  },
	  strToDate: function (dt, format) {
		var isDate =
		  Object.prototype.toString.call(dt) == "[object Date]" ? true : false;
		format = format || false;
		var date;
		if (isDate == true) {
		  date = dt;
		} else {
		  dt = String(dt);
		  var time = " 00:00:00";
		  var date_str;
		  if (dt.indexOf(":") == -1) {
			date_str = forumulateDateStr(dt);
		  } else {
			//check again if date is missing;
			if (
			  dt.indexOf("-") == -1 &&
			  dt.indexOf("/") == -1 &&
			  dt.indexOf("_")
			) {
			  var nd = new Date();
			  dt =
				nd.getDate() +
				"/" +
				(nd.getMonth() + 1) +
				"/" +
				nd.getFullYear() +
				" " +
				dt;
			}
			var dts_arr = dt.split(" ");
			date_str = forumulateDateStr(dts_arr[0]);
			time = " " + dts_arr[1];
		  }
		  if (isNaN(parseInt(dt)) == false && date_str == null) {
			// for timestamp
			date = new Date(parseInt(dt) * 1000);
		  } else if (date_str == null) {
			date = new Date(dt);
		  } else {
			// for date AS string
			date = new Date(date_str + time); // if a normal time stamp
		  } // E.g Date('January 1, 2008 2:54:16 am');
		}
		if (format != false) {
		  date = this.formatDate(date, format);
		}
		return date;
  
		//date formulate
		function forumulateDateStr(dts) {
		  if (dts.indexOf("-") > 0) {
			dt_arr = dts.split("-");
		  } else if (dts.indexOf("/") > 0) {
			dt_arr = dts.split("/");
		  } else if (dts.indexOf("_") > 0) {
			dt_arr = dts.split("_");
		  } else {
			dt_arr = {};
		  }
  
		  var date_str = null;
		  if (dt_arr[2] && dt_arr[2].length == 4) {
			//date/month/year
			date_str = dt_arr[2] + "/" + dt_arr[1] + "/" + dt_arr[0];
		  } else if (dt_arr[0] && dt_arr[0].length == 4) {
			//year/month/date
			date_str = dt_arr[0] + "/" + dt_arr[1] + "/" + dt_arr[2];
		  }
		  return date_str;
		}
	  },
	  formatDate: function (date, pattern) {
		date = String(this.strToDate(date, false));
		var utc = false;
		var token =
			/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		  timezone =
			/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		  timezoneClip = /[^-+\dA-Z]/g,
		  pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		  };
  
		var dF = YTHELPER;
		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date();
		if (isNaN(date)) throw new SyntaxError("invalid date");
		pattern = String(dF.pattern[pattern] || pattern || dF.pattern["default"]);
  
		var _ = utc ? "getUTC" : "get",
		  d = date[_ + "Date"](),
		  D = date[_ + "Day"](),
		  m = date[_ + "Month"](),
		  y = date[_ + "FullYear"](),
		  H = date[_ + "Hours"](),
		  M = date[_ + "Minutes"](),
		  s = date[_ + "Seconds"](),
		  L = date[_ + "Milliseconds"](),
		  o = utc ? 0 : date.getTimezoneOffset(),
		  flags = {
			d: d,
			dd: pad(d),
			ddd: dF.names.dayNames[D],
			dddd: dF.names.dayNames[D + 7],
			m: m + 1,
			mm: pad(m + 1),
			mmm: dF.names.monthNames[m],
			mmmm: dF.names.monthNames[m + 12],
			yy: String(y).slice(2),
			yyyy: y,
			h: H % 12 || 12,
			hh: pad(H % 12 || 12),
			H: H,
			HH: pad(H),
			M: M,
			MM: pad(M),
			s: s,
			ss: pad(s),
			l: pad(L, 3),
			L: pad(L > 99 ? Math.round(L / 10) : L),
			t: H < 12 ? "a" : "p",
			tt: H < 12 ? "am" : "pm",
			T: H < 12 ? "A" : "P",
			TT: H < 12 ? "AM" : "PM",
			Z: utc
			  ? "UTC"
			  : (String(date).match(timezone) || [""])
				  .pop()
				  .replace(timezoneClip, ""),
			o:
			  (o > 0 ? "-" : "+") +
			  pad(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
			S: ["th", "st", "nd", "rd"][
			  d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10) * d) % 10
			],
		  };
  
		return pattern.replace(token, function ($0) {
		  return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	  },
	  dateTostr: function (dd, format) {
		var value = "";
		var date = dd.getDate() > 9 ? dd.getDate() : "0" + dd.getDate();
		var month =
		  dd.getMonth() + 1 > 9 ? dd.getMonth() + 1 : "0" + (dd.getMonth() + 1);
		var year = dd.getFullYear();
		if (typeof format != "undefined" && format) {
		  var separator = format.indexOf("-") > 0 ? "-" : "/";
		  var format_arr =
			format.indexOf("-") > 0 ? format.split("-") : format.split("/");
		  var dt_arr = [];
		  if (format_arr.indexOf("dd") != -1) {
			dt_arr[format_arr.indexOf("dd")] = date;
		  }
		  if (format_arr.indexOf("mm") != -1) {
			dt_arr[format_arr.indexOf("mm")] = month;
		  }
		  if (format_arr.indexOf("yy") != -1) {
			dt_arr[format_arr.indexOf("yy")] = year;
		  }
		  value = dt_arr.join(separator);
		} else {
		  value = date + "/" + month + "/" + year;
		}
		return value;
	  },
	  displayDate: function (dt, year) {
		var date = this.strToDate(dt);
		var dDate =
		  this.days[date.getDay()] +
		  ", " +
		  date.getDate() +
		  " " +
		  this.months[date.getMonth()];
		if (year) {
		  dDate = dDate + " " + date.getFullYear();
		}
		return dDate;
	  },
	  getDayFromDate: function (dt) {
		var date = this.strToDate(dt);
		return this.days[date.getDay()];
	  },
	  getMonthFromDate: function (dt) {
		var date = this.strToDate(dt);
		return this.months[date.getMonth()];
	  },
	  displayDatefromDate: function (dt) {
		var date = this.strToDate(dt);
		return date.getDate();
	  },
	  isPastDate: function (dt) {
		var src_date = this.strToDate(dt);
		src_date = new Date(
		  src_date.getFullYear(),
		  src_date.getMonth(),
		  src_date.getDate(),
		  0,
		  0,
		  0
		);
		var target_date = new Date();
		target_date.setHours(0, 0, 0);
		if (
		  src_date.getFullYear() == target_date.getFullYear() &&
		  src_date.getMonth() == target_date.getMonth() &&
		  src_date.getDate() == target_date.getDate()
		) {
		  return false;
		}
		if (src_date.getTime() > target_date.getTime()) {
		  return false;
		}
		return true;
	  },
	  getDaysAhead: function (dt, days, as) {
		var date = this.strToDate(dt);
		date.setDate(date.getDate() + days);
		as = as || "string";
		return as == "string" ? this.formatDate(date, "dd/mm/yyyy") : date;
	  },
	  getDates: function (startDate, stopDate) {
		var daterray = new Array();
		var currentDate = startDate;
		var i = 0;
		while (currentDate <= stopDate) {
		  daterray[i] = this.strToDate(currentDate, "yyyy/mm/d");
		  currentDate = this.getDaysAhead(currentDate, 1);
		  i++;
		}
  
		return daterray;
	  },
	  numberOfDays: function (m, y) {
		return /8|3|5|10/.test(--m)
		  ? 30
		  : m == 1
		  ? (!(y % 4) && y % 100) || !(y % 400)
			? 29
			: 28
		  : 31;
	  },
	  getDaysBehind: function (dt, days) {
		var date = this.strToDate(dt);
		date.setDate(date.getDate() - days);
		return this.formatDate(date, "dd/mm/yyyy");
	  },
	  isDateInBetween: function (startDate, endDate, dateToCheck) {
		var startDateObj = this.strToDate(startDate);
		var endDateObj = this.strToDate(endDate);
		var dateToCheckObj = this.strToDate(dateToCheck);
		if (dateToCheckObj >= startDateObj && dateToCheckObj <= endDateObj) {
		  return true;
		}
  
		return false;
	  },
	  isDateGreater: function (oDate1, oDate2) {
		if (
		  oDate1.getDate() > oDate2.getDate() ||
		  oDate1.getMonth() > oDate2.getMonth() ||
		  oDate1.getFullYear() > oDate2.getFullYear()
		) {
		  return true;
		}
		return false;
	  },
	  formatPaymentDate: function (date) {
		try {
		  var dateArr = date.split("T");
		  var formatted_date =
			this.formatDate(dateArr[0], "mm/dd/yyyy") +
			" " +
			this.getFormattedTime(dateArr[1]);
		  return formatted_date;
		} catch (e) {}
		return date;
	  },
	  getParameterByName: function (name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
		  results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	  },
	  docuemntHeight: function () {
		var body = document.body,
		  html = document.documentElement;
  
		var height = Math.max(
		  body.scrollHeight,
		  body.offsetHeight,
		  html.clientHeight,
		  html.scrollHeight,
		  html.offsetHeight
		);
		return height;
	  },
	},
	hasClass: function (element, testClass) {
	  if ("classList" in element) {
		return element.classList.contains(testClass);
	  } else {
		return new RegExp(testClass).exec(element.className);
	  }
	  return false;
	},
  
	addClass: function (el, className) {
	  if (el.classList) el.classList.add(className);
	  else el.className += " " + className;
	},
  
	removeClass: function (el, className) {
	  if (el.classList) {
		el.classList.remove(className);
	  } else {
		el.className = el.className.replace(
		  new RegExp(
			"(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
			"gi"
		  ),
		  " "
		);
	  }
	},
  };
  