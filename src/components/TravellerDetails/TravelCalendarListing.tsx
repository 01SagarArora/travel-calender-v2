import { useEffect, useMemo, useState } from 'react';
import EmployeeDetails from './EmployeeDetails';
import styles from './EmployeeDetails.module.scss';
import { Box } from '@mui/material';
import TravelSearch from './SearchTraveller';
import NoDataSetting from './NoDateSelected';

const TravelCalendarListing = ({ selectedDetails, selectedTab }: any) => {
  const [searchQuery, setQuery] = useState('')

  useEffect(() => {
    // Reset search query when selectedDetails changes
    setQuery('');
  }, [selectedDetails]);

  // Calculate total traveller details
  const totalTravellerDetails = useMemo(() => {
    return selectedDetails?.reduce((acc: number, item: any) => acc + item?.travellerDetails?.length, 0);
  }, [selectedDetails]);

  // Filter travellers based on searchQuery
  const filteredTravellersDetails = useMemo(() => {
    if (!searchQuery) {
      return selectedDetails; // Return all details if searchQuery is empty
    }

    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    return selectedDetails.filter((travellerDetail: any) => {
      if (travellerDetail?.tripId) {
        const targetTripId = travellerDetail.tripId.toLowerCase();
        return targetTripId.includes(lowerCaseSearchQuery);
      }
      return false; // Exclude details without tripId
    });
  }, [searchQuery, selectedDetails]);

  const handleSearchChange = (query: string) => {
    setQuery(query)
  };  

 
  const handleSearchSubmit = () => {
    // You can directly rely on the state to filter results
    // No additional action needed for simple scenarios
  };
  
  return (
    <Box className={totalTravellerDetails > 0 ? styles.empTravelMod : `${styles.empTravelMod} ${styles.noDataMod}`}>
          <Box className={styles.empTravelModSearch}>
            <Box className={styles.travellerCount}>
              <span>Total Travellers: </span>
              <span>{totalTravellerDetails}</span>
            </Box>
            <Box className={styles.travellerCount}>
              <TravelSearch searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />
            </Box>
          </Box>
          {filteredTravellersDetails.length > 0 ? (
        <EmployeeDetails selectedTab={selectedTab} selectedData={filteredTravellersDetails} />
      ) : (
        <NoDataSetting />
      )}
          
    </Box>
  );
};

export default TravelCalendarListing;
