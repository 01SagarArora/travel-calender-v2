import { ROUTE_CONSTANTS } from "constants/routeConstants";

export const isServer: boolean = !(typeof window !== "undefined");

export const checkPage = (url: string) =>
  Object.values(ROUTE_CONSTANTS).some(
    (route) => url.includes(route) && !url.includes(".") && route !== "/"
  ) || url === "/";

export const millisecondConversion = (newDate:any,time:any) => {
  const dateString = newDate;
  const timeString = time;

  // Parse the date
  const date = new Date(dateString);

  // Extract the time from the time string
  const [hours, minutes] = timeString.split(":").map(Number);

  // Set the time of the date object to the given time
  date.setHours(hours);
  date.setMinutes(minutes);

  // Convert to timestamp
  const timestamp = date.getTime();
return timestamp
};

export const timeConversionFromMillisecond = (timestamp: any) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month (0 for January)
  const day = date.getDate();
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  return {
    date: formattedDate,
    hour: formattedTime?.split(":")[0],
    min: formattedTime?.split(":")[1],
  };
};

export const urlFormatter = (str: any, data: any) => {
  if (typeof str === "string" && data instanceof Array) {
    return str.replace(/({\d})/g, function (i: any) {
      return data[i.replace(/{/, "").replace(/}/, "")];
    });
  } else if (typeof str === "string" && data instanceof Object) {
    for (let key in data) {
      return str.replace(/({([^}]+)})/g, function (i) {
        key = i.replace(/{/, "").replace(/}/, "");
        if (!data[key]) {
          return i;
        }
        return data[key];
      });
    }
  } else {
    return false;
  }
};

export const getKeyFromCookie = (key: string, cookieStr: string) => {
  let cookie = {} as any;
  cookieStr?.split(";").forEach(function (el) {
    let [k, v] = el.split("=");
    cookie[k.trim()] = v;
  });
  return cookie[key];
};


export function transformText(text: any) {
  const words = text.split("_");
  const capitalizedWords = words.map(
    (word: any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords.join(" ");
}


export const commonPatternRules = {
	patterns : {
		mobile: /^\d{10}$/,
		mobile17Digits: /^\d{3,17}$/,
        email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		alphanumeric: /^[A-Za-z\d\s]+$/,
		alphabet: /^[A-Za-z\s]+$/,
		tripName :  /^[ A-Za-z\d\s_@|.,:()-\/]*$/,
		numeric : /^[0-9]+(\.[0-9]{0,2})?$/,
		remarksRegEx: /^[ A-Za-z\d\s_@|.,:()&$#+-]*$/
  	}
}


export function applyThemeConfig(config: any, setThemeConfig: (config: any) => void) {
  if (config.applyTheme) {
      let bgColor = config.bgColor;
      let buttonTextColor = config.buttonTextColor;

      const navBar = document.querySelector('.nav-right a:first-child');
      if (navBar) {
          navBar.classList.add('dwtcls');
      }
      document.querySelectorAll('.dwtcls').forEach(element => {
          if (element instanceof HTMLElement) {
              element.style.color = buttonTextColor;
          }
      });
      document.querySelectorAll('.explore-category').forEach(element => {
          if (element instanceof HTMLElement) {
              element.style.color = buttonTextColor;
          }
      });
      document.querySelectorAll('.yatra-header').forEach(element => {
          if (element instanceof HTMLElement) {
              element.setAttribute('style', `background-color: ${bgColor} !important;`);
          }
      });
      if (!config.showFooter) {
          var elements = document.getElementsByClassName('servicesFooterHide');
          for (var e = 0; e < elements.length; e++) {
              elements[e].innerHTML = '';
          }
          var aboutUsElement = document.getElementsByClassName('footer-beetle-new');
          aboutUsElement[0].innerHTML = '';
      }

      document.documentElement.style.setProperty('--primary-border-color', config.bgColor);
      document.documentElement.style.setProperty('--primary-background-color', config.bgColor);
      document.documentElement.style.setProperty('--color-link', config.bgColor);
      document.documentElement.style.setProperty('--primary-color', config.bgColor);
      document.documentElement.style.setProperty('--primary-btn-color', config.buttonColor);
      document.documentElement.style.setProperty('--primary-gradient-color', config.bgColor);
      document.documentElement.style.setProperty('--secondary-gradient-color', config.buttonColor);

      setThemeConfig(config);
  }
}
