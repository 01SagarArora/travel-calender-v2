import { FormControl, TextField } from "@mui/material";
// import { Control, Controller, FieldValues } from "react-hook-form";


const InputText = (props: {
  label: string;
  defaultValue: string;
  id: string;
  handleChange: Function;
  sx?: any;
  isDisabled?:boolean;
  error?:string;
  onBlur?:Function;
  isReadOnly?:boolean;
}) => {
  return (
    <FormControl className="w-full">
      <TextField
        value={props.defaultValue}
        size="small"
        disabled={props.isDisabled}
        label={props.label}
        id={props.id}
        type="text"
        onChange={(event) => props.handleChange(event.target.value)}
        error={!!props.error}
        sx={{
          '& .Mui-disabled':{
            WebkitTextFillColor:'rgba(0,0,0)!important',
            cursor: 'not-allowed'
          }
        }}
        InputProps={{
          sx: props.sx,
          readOnly:props.isReadOnly
        }}
        helperText={props.error}
        
        onBlur={(e)=>props.onBlur && props.onBlur(e?.target.value)}
      />
    </FormControl>
  );
};

export default InputText;
