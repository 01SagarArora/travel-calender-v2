import { useState } from "react";
import {
  Autocomplete as MapAutoComplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface DynamicAutoCompleteProps {
  label: string; // Label for the Autocomplete
  control: any;
  error: any;
  required: boolean;
  name: string;
  queryProps: any;
  serviceType: string;
  transferType: string;
  getValues?: any;
  setValue?: any;
  defaultValue?: any;
}
const libraries = ["places"] as any;

const GoogleLocationInput: React.FC<DynamicAutoCompleteProps> = ({
  label,
  control,
  error,
  required,
  name,
  setValue,
}) => {
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [_location, setLocation] = useState<any>(null);
  const onLoad = (autocomplete: any) => {
    setAutocomplete(autocomplete);
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCPQm-Gl4aIgNuj5v8l_J34EEDfGJtZCbU",
    libraries,
  });

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      let place = autocomplete.getPlace();
      let latLongObj = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        address: place?.formatted_address,
        city: place?.name,
      };
      setValue(name, latLongObj);
      setLocation(latLongObj);
    } else {
    }
  };
  return (
    <div>
      {isLoaded && (
        <>
          <MapAutoComplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Controller
              name={name}
              control={control}
              // defaultValue={defaultValue}
              rules={{ required: required ? "Location is required" : "" }} // Add your validation rules
              render={({ field: { onChange } }) => (
                <TextField
                  label={label}
                  sx={{
                    width: 180,
                    "& .MuiInputBase-input": {
                      padding: "1px 0 5px", // Adjust this value to your desired padding
                    },
                  }}
                  // defaultValue={defaultValue}
                  variant="standard"
                  onChange={(e: any) => {
                    onChange(e?.target?.value);
                  }}
                  autoFocus={false}
                  autoComplete="off"
                />
              )}
            />
          </MapAutoComplete>
          {error && <span className="errorMsg">{error?.[name]?.message}</span>}
        </>
      )}
    </div>
  );
};

export default GoogleLocationInput;
