import { useDispatch } from 'react-redux';
import { AppDispatch } from  '../../store/store';
import { showAlert } from "../../store/Alert/alertSlice";
import { AlertData, AlertDialogData } from "./alert.interface";

const dispatch = useDispatch<AppDispatch>();

export const AlertService = {
    success : function(alertData : AlertData ){
        const data : AlertDialogData = { ...alertData , show : true }
        dispatch(showAlert(data));
    },
    error : function(alertData : AlertData ){
        const data : AlertDialogData = { ...alertData , show : true }
        dispatch(showAlert(data));
    }
    
    
}