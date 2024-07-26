import { MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const DropDown = (props: {
  control: any;
  name: string;
  defaultValue?: any;
  isRequired: boolean;
  error:any;
  label:string;
  width?:number
}) => {
  const { control, name, defaultValue, isRequired,error,label,width=60 } = props;
  return (
    <div>
      <Controller
        name={name} // Use a single name for both dropdowns
        control={control}
        defaultValue={defaultValue || ""}
        rules={{
          required: isRequired ? "This is required" : "",
        }} // Validation rule for combined dropdowns
        render={({ field: { value, onChange } }) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              select
              variant="standard"
              label={label}
              size="small"
              style={{ width: width, marginRight: 10 }}
              value={value}
              onChange={onChange}
              SelectProps={{
                MenuProps: {
                  style: {
                    width: 100,
                    maxHeight: 400,
                  },
                },
              }}
            >             
                <MenuItem sx={{textAlign:"center"}} key='t1' value='t1'>
                  Test
                </MenuItem>
             
            </TextField>
          </div>
        )}
      />
      {error && <span className="errorMsg">{error?.[name]?.message}</span>}
    </div>
  );
};

export default DropDown;
