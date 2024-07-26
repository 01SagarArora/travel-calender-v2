import { Tabs, Tab, Box, Typography } from '@mui/material';
import TravelCalendarListing from './TravelCalendarListing';
import styles from './TravellerCalendarTabs.module.scss';
import { format, isValid, parseISO } from 'date-fns';
import NoDataSetting from './NoDateSelected';

interface TravellerCalendarTabsProps {
  data: Record<string, any>; 
  selectedTab: string;
  selectedDate: string;
  onTabChange: (newValue: string) => void;
}

const TravellerCalendarTabs = ({ data, selectedTab, selectedDate, onTabChange }: TravellerCalendarTabsProps) => {
  const tabTypes = Object.keys(data);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    onTabChange(newValue);
  };

  const formattedDate = isValid(parseISO(selectedDate)) ? format(parseISO(selectedDate), 'dd-MM-yyyy') : '';
  const defaultTab = tabTypes.includes(selectedTab) ? selectedTab : tabTypes[0]; 

  return (
    <Box className={styles.tabContent}> 
      {((!(!!data[selectedTab || defaultTab]))|| !selectedDate) ? (
     <NoDataSetting
      otherDateSelected={!selectedDate}
      noDataSelected={(!data[selectedTab || defaultTab]) && !!selectedDate}
     />
      ) : (
        <>
          <Typography variant="h2" textAlign="center">
            Employees who will be travelling on <strong>{formattedDate}</strong>
          </Typography>
          <Tabs
            value={selectedTab || defaultTab} 
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabTypes.map((type) => (
              <Tab key={type} label={type.charAt(0).toUpperCase() + type.slice(1)} value={type} />
            ))}
          </Tabs>
          <Box className={styles.tabPanel}>
            <TravelCalendarListing
              selectedDetails={data[selectedTab || defaultTab]} 
              selectedDate={selectedDate}
              selectedTab={selectedTab || defaultTab} 
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default TravellerCalendarTabs;
