import { Box } from "@mui/material";
import { PAGE } from "../../../seo/seo.constant";
import SEO from "../../../seo/Seo";
import { commonApi } from "api/commonApi/apis";
import TravelCalendar from "components/TravellerDetails/TravelCalendar";
import TripCalendar, { HighlightedDays } from "components/TripCalendar/TripCalendar"
import { useEffect, useState } from "react"
import { useAppDispatch } from "store/store"
import { TripCalendarDataMaker } from "utils/DataMaker";
import { GET_TRAVELLER_DATA } from "utils/constants";


export enum FilterType {
  TRIP_COUNT = 'tripCount',
  TRIP_DETAILS = 'tripDetails'
}
const Home = () => {
  const dispatch = useAppDispatch();
  const [tripCounts ,setTripCounts] = useState({}as HighlightedDays);
  const [isLoading,setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const [travellerData, setTravellerData] = useState<SegregatedData | null>(null);
  const [_isDataLoading,setDataLoading] = useState(false);
  const [_tripData,setTripData] = useState([]as any[])

  const getTripDetails = (filterType:FilterType,startDate:string,endDate:string)=>{
    if(filterType == FilterType.TRIP_COUNT)
      setLoading(true);
    else
      setDataLoading(true);
      dispatch(commonApi.endpoints.postApi.initiate({
      url: GET_TRAVELLER_DATA,
      data: {
        userId: window.headerUserInfo?.userProfileDetails?.userId,
        startDate: startDate,
        endDate: endDate,
        filter:filterType
      }
    })).then((res:any)=>{
      const resp = res.data;
      setLoading(false)
      setDataLoading(false);
      if(resp && resp.meta && resp.meta.statusCode == 200){
        if(filterType == FilterType.TRIP_COUNT){
          setTripCounts(resp?.data?.tripCount)
        }else if(filterType  == FilterType.TRIP_DETAILS){
          //adding product-type to make the api res dynamic for the case flight handled
          
          const trips = resp?.data?.tripDetails[startDate]?.map((trip: any) => ({
            ...trip,
            'product-type': 'flights' 
          }));
          setTripData(trips);
        }
      }
    })
  }
  /**On First time load fetch data
   * for the current month
   */
  useEffect(()=>{
    if(window){
      let currentMonth = new Date().getMonth() + 1;
      let year = new Date().getFullYear();
      let startDate = `${year}-${currentMonth.toString().padStart(2,'0')}-01`;
      let endDate = `${year}-${currentMonth.toString().padStart(2,'0')}-${new Date(year,currentMonth,0).getDate()}`;
      getTripDetails(FilterType.TRIP_COUNT, startDate, endDate);
    }
    
  },[]);

  /**ON CHANGE MONTH
   * Api is called when month is changed 
   */
  const onMonthChange = (month:number,year:string)=>{
    let startDate = `${year}-${month.toString().padStart(2,'0')}-01`;
      let endDate = `${year}-${month.toString().padStart(2,'0')}-${new Date(+year,month,0).getDate()}`;
      getTripDetails(FilterType.TRIP_COUNT, startDate, endDate);
  }

  const onDateChange = (date:string)=>{
    setSelectedDate(date)
    getTripDetails(FilterType.TRIP_DETAILS, date, date);
  }
  useEffect(() => {    
      const segregatedData = TripCalendarDataMaker(_tripData);
      setTravellerData(segregatedData);
  
  }, [_tripData]);
  return (
    <Box className="w-100 d-flex flex-row">
      <SEO title={PAGE.homePage.title} description={PAGE.homePage.description} />
      <div className="w-45 background-white m-2">
        <TripCalendar 
          tripCounts={tripCounts} 
          onMonthChange={onMonthChange} 
          isLoading={isLoading}
          onDateChange={onDateChange}/>
      </div>
      <div className={`w-45 background-white m-2 `}>
        { travellerData &&
         <TravelCalendar selectedDate={selectedDate} tripData={travellerData} />
        }
      </div>
    </Box>
  )
}

export default Home;