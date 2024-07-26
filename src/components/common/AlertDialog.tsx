import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { AlertDialogData } from "../../services/uiServices/alert.interface";
import CloseIcon from '@mui/icons-material/Close';
import { AppDispatch } from "../../store/store";
import { hideAlert } from "../../store/Alert/alertSlice";
import { useDispatch } from "react-redux";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from "react";


export default function AlertDialog(props: AlertDialogData) {
    const alertDisapatch = useDispatch<AppDispatch>();
    function triggerAction(_action:string){
        alertDisapatch(hideAlert());
    }
    return (
        <>
            <Dialog open={props.show}>
                <DialogTitle>{props.title}
                    <IconButton onClick={()=>triggerAction('OK')}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Stack direction="column">
                        {
                            props.messages.map((message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, index: Key | null | undefined) => (<span key={index}>{message}</span>))
                        }
                    </Stack>
                </DialogContent>
                <DialogActions>
                    {
                        props?.actions.map((action: string) => (
                            <Button key={action} variant="contained" onClick={()=>triggerAction(action)}>{action}</Button>
                        ))
                    }
                </DialogActions>
            </Dialog>
        </>
    )
}
