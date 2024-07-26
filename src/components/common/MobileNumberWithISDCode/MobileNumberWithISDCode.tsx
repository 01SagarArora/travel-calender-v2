import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import InputText from "../InputText/InputText";
import { ISD_CODES } from "utils/constants";

const MobileNumberWithISDCode = (props: {
  mobile: string;
  isdCode: string;
  onMobileNumberChange: Function;
  onISDCodeChange: Function;
  id: string;
  isDisabled?:boolean;
  errorMobile?:string;
  onBlur?:Function
  errorIsd?:string;
  isReadOnly?:boolean;
}) => {
  return (
    <div className="flex flex-row">
      <FormControl sx={{ minWidth: "100px" }} size="small" error={!!props.errorIsd}>
        <InputLabel id={"isdCode_" + props.id}>ISD Code</InputLabel>
        <Select
          label="ISD Code"
          labelId={"isdCode_" + props.id}
          readOnly={props.isReadOnly}
          id={props.id + "_isdCode"}
          size="small"
          disabled={props.isDisabled}
          value={props.isdCode}
          renderValue={(value) => value}
          autoWidth={true}
          onChange={(event) => props.onISDCodeChange(event.target.value)}
          sx={{
            borderRadius: "4px 0 0 4px",
            '& .Mui-disabled':{
            WebkitTextFillColor:'rgba(0,0,0)!important',
            cursor: 'not-allowed'
          }
          }}
          onBlur={(e)=>props.onBlur && props.onBlur(e.target.value, 'isdCode')}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "320px",
              },
            },
          }}
        >
          {ISD_CODES.map((option: any) => (
            <MenuItem key={option.slNo} value={option.countryCode}>
              <div className="flex flex-row justify-between w-100">
                <strong>+({option.countryCode})</strong>
                <span>{option.countryName}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
        {props.errorIsd ? <FormHelperText>{props.errorIsd}</FormHelperText>: <></>}

      </FormControl>
      <div className="w-full">
        <InputText
          label="Mobile Number"
          defaultValue={props.mobile}
          isDisabled={props.isDisabled}
          isReadOnly={props.isReadOnly}
          id={props.id + "mobile"}
          handleChange={props.onMobileNumberChange}
          sx={{ borderRadius: "0 4px 4px 0" }}
          error={props.errorMobile}
          onBlur={(value:string)=>props.onBlur && props.onBlur(value, 'mobile')}
        />
      </div>
    </div>
  );
};

export default MobileNumberWithISDCode;
