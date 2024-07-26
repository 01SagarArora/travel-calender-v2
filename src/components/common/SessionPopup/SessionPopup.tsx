import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
// import { hideAlert } from "../../../store/Alert/alertSlice";
import { useSelector } from "react-redux";
import SandClockSVG from "./SandClockSVG";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { SESSION_TIMEOUT_TIMER } from "utils/constants";
import { RootState } from "store/store";

function SessionPopup() {

  const handleModifyClick = () => {
    handleClose();
  };
  const [sessionState, setSessionStatus] = useState<boolean>(false);
  const loader = useSelector((state: RootState) => state.loader);
  
  useEffect(() => {
    if(!loader.isLoading){
      setTimeout(() => {
        setSessionStatus(true);
        }, SESSION_TIMEOUT_TIMER)
    }
  }, []);

  function handleClose() {
    setSessionStatus(false);
  }
  return (
    <div className="loader-lower-content">
      <Dialog open={sessionState}
      >
        <DialogTitle>
          {"Session Expired"}
          <IconButton
            onClick={() => handleClose()}
            sx={{
              position: "absolute",
              right: 8,
              top: 5,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="loader-lower-content" dividers>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <div className="margin-top" style={{marginTop:"25px"}}>
              <SandClockSVG />
            </div>
          </Stack>
          <Stack
            className="margin-b"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            direction={"column"}
          >
            <p>Timed Out</p>
            <Divider />
            <div
              className="scrollbar force-overflow"
              id="style-2"
              
            >
            
            </div>
          </Stack>
          <Stack
            className="margin-top margin-b section_text"
            justifyContent="center"
            alignItems="center"
            direction={"column"}
          >
            <span>Still interested</span>
            <span>We noticed you have been inactive for a while.</span>
            <span>
              Please refresh your search results .
            </span>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{ mr: 1 }}
            onClick={() => window.location.reload()}
          >
            Refresh
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ mr: 1 }}
            onClick={() => handleModifyClick()}
          >
            Modify Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SessionPopup;
