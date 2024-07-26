
import styles from './NoDataSetting.module.scss'; 

const NoDataSetting = ({ otherDateSelected ,noDataSelected}:any) => {
return(
    <div className={styles.noDataSetting}>
        {noDataSelected && <h3>{noDataSelected ? 'No details found, please select another date': ""}</h3>}
        {otherDateSelected && <h3>{otherDateSelected ? 'Please select a date to view traveller details': ""}</h3>}
        {!noDataSelected && !otherDateSelected && <h3>No Data Found.<br/><br />Please enter a valid Trip Id.</h3>}
    </div>
)
};

export default NoDataSetting;
