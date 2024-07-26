import Skeleton from "@mui/material/Skeleton"
import './Shimmer.scss';
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { memo } from "react";
import { Stack } from "@mui/material";
const Shimmer = (props:{isLoading?:boolean}) => {
const isLoading = useSelector((state:RootState)=>state.loader.isLoading) || props.isLoading;
  return isLoading?(
     <div >
    
       { Array(4).fill(1).map((_item,index)=>
         <div className="display-flex flex-d-c shimmer-container mt-2 border-bottom" key={index} >
                    <Stack direction={"row"}>
                        <div><Skeleton variant="rectangular" width={290} height={250} className="shimmer-image-container"/></div>
                        <Stack  justifyContent={"space-evenly"} width={"70%"} className="padding-x">
                            <Skeleton variant="text" width={300} height={50} />
                            <Skeleton variant="text" width={270} />
                            <Skeleton variant="text" width={220} />
                            <Skeleton variant="text" width={80} />
                            <Skeleton variant="text" width={150} />
                        </Stack>
                        <Stack  justifyContent={"space-evenly"} alignItems={"flex-end"} className="padding">
                            <Skeleton variant="text" width={100} height={50}/>
                            <Skeleton variant="text" width={120} />
                            <Skeleton variant="text" width={80} />
                            <Skeleton variant="text" width={150} height={50}/>
                            <Skeleton variant="text" width={150} />
                        </Stack>
                    </Stack>
        </div>)}
    
    </div>
  ):<></>
}

export default memo(Shimmer)