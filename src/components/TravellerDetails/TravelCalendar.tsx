
import { useState } from 'react';
import TravellerCalendarTabs from './TravellerCalendarTabs';

const TravelCalendar = ({ selectedDate, tripData }: any) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tripData)[0] || '');

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };
  return (

    <TravellerCalendarTabs data={tripData} selectedDate={selectedDate} selectedTab={selectedTab} onTabChange={handleTabChange} />

  );
};

export default TravelCalendar;
