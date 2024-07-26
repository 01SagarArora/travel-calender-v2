import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import "./NotFound.scss";
import NotFoundImage from "./NotFoundSvg";

function NotFoundAlert() {
  const loader = useSelector((state: RootState) => state.loader);
  return (
    <div>
      <Stack spacing={2}>
        {!loader.isLoading && (
          <div className="alert_box margin-t">
            <span style={{paddingTop:"6px",marginRight:"18px"}}>
              <NotFoundImage />
            </span>
            <span>
              We could not find the flight options for your preferred airline(s)
              hence showing all the available options!
            </span>
          </div>         
        )}
      </Stack>
    </div>
  );
}
export default NotFoundAlert;
