import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export interface PaginationData {
    endIndex: number,
    nextPageLink: string,
    pageNumber: number,
    previousPageLink: string,
    recordInPages: number,
    startIndex: number,
    totalPages: number,
    totalRecords: number
}
export default function PaginationButton(
    props: {
        [x: string]: any;
        data: PaginationData
    }) {

    const handleChange = (_event: React.ChangeEvent<unknown>, clickedOnPageNumber: number) => {

        return props.handlePageChange(clickedOnPageNumber);
    };
    return (
        <Stack spacing={2}>
            <Pagination
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                count={props?.data?.totalPages}
                onChange={handleChange} />
        </Stack>
    )
}



