export function formatDate(date: string) {
    try {
        const tempDate = new Date(date);
        const formatedDate = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "short",
            day: "2-digit"
        }).format(tempDate);
        return formatedDate;
    } catch (error) {
        return date;
    }
}
export function getDayName(date: string) {
    try {
        const tempDate = new Date(date);
        let dayName = tempDate.toLocaleString('en-us', {weekday:'long'});
        return dayName;
    } catch (error) {
        return date;
    }
}
export function getDate(date: string) {
    try {
        const tempDate = new Date(date);
        let dateFormatted = tempDate.getDate();
        return dateFormatted;
    } catch (error) {
        return date;
    }
}
export function getMonth(date: string) {
    try {
        const tempDate = new Date(date);
        let month = tempDate.toLocaleString('en-us', {month:'long'});
        return month;
    } catch (error) {
        return date;
    }
}
export function getMilitaryTime(time: string) {
    try {
        let formattedTime = time.replace(':', '');;
        return formattedTime;
    } catch (error) {
        return time;
    }
}
