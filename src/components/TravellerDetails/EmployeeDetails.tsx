import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { Box, Stack } from '@mui/material';
import styles from './EmployeeDetails.module.scss';
import { useEffect, useRef } from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 227,
});

const EmployeeDetails = ({ selectedData }: any) => {
  const groupedData = selectedData?.reduce((acc: any, item: any) => {
    if (!acc[item.tripId]) {
      acc[item.tripId] = {
        tripId: item?.tripId,
        bookerName: item?.bookerName,
        productType: item['product-type'],
        bookerEmail: item?.bookerEmail,
        billingEntity: item?.billingEntity,
        departureCity: item?.departureCity,
        arrivalCity: item?.arrivalCity,
        cartNumber: item?.cartNumber,
        travellerDetails: [],
      };
    }
    acc[item.tripId].travellerDetails?.push(...item.travellerDetails);
    return acc;
  }, {});

  const sortedData = groupedData ? Object.values(groupedData).sort((a:any, b:any) => (a.tripId > b.tripId ? 1 : -1)) : [];

  const listRef = useRef(null) as any;
  useEffect(() => {
    if (listRef.current) {
      cache.clearAll();
      listRef.current.recomputeRowHeights();
    }
  }, [selectedData]);

  const generateRandomString = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  };

  const navigateToTripDetail = (tripId: string) => {
    const randomString = generateRandomString();
    const url = `https://www.yatra.com/trip/tripDetailPage?tripId=${tripId}&_rn=${randomString}`;
    window.open(url,'_blank');

  };
  const rowRenderer = ({ index, key, parent, style }: any) => {
    const item = sortedData[index] as any;
    const departureCityShort = item?.departureCity?.slice(0, 3).toUpperCase();
    const arrivalCityShort = item?.arrivalCity?.slice(0, 3).toUpperCase();

    return (
      <CellMeasurer
        key={key}
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={{ ...style }} className={styles.flexRow}>
          <Box className={styles.tripBlock}>
            <div className={`fs-16 p-2 ${styles.tripHeader}`}>
              <div className={styles.tripHeaderLeft}>
                <a  href="#"
                  className={styles.tripIdLink}
                  onClick={() => navigateToTripDetail(item?.tripId)}>
                  Trip ID: {item?.tripId || "N/A"}
                </a>
                <p>Cart No: {item?.cartNumber}</p>
              </div>
              <div className={styles.tripHeaderRight}>
                <p>Billing Entity: {item?.billingEntity}</p>
                <p>Itinerary: <span>{departureCityShort}</span> <ArrowRightAltOutlinedIcon className={styles.arrowIcon} viewBox="0 0 30 30"/> <span>{arrivalCityShort}</span></p></div>
            </div>
            <div>
              <table className={styles.table}>
                <thead className={styles.tableHeader}>
                  <tr>
                    <th>Employee Name</th>
                    <th>Employee Number</th>
                    <th>Employee Email</th>
                  </tr>
                </thead>
                <tbody>
                  {item?.travellerDetails?.map((traveller: any, index: number) => (
                    <tr key={item.tripId + index} className={styles.tableRow}>
                      <td>{traveller?.name}</td>
                      <td>{traveller?.phone}</td>
                      <td>{traveller?.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Box>
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Stack height={"560px"} className={`"scrollbar" ${styles.empTableBlockMod}`}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={listRef}
            height={height}
            width={width}
            rowCount={sortedData.length}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            overscanRowCount={7}
          />
        )}
      </AutoSizer>
    </Stack>
  );
};

export default EmployeeDetails;
