import { Button, Card, Chip } from "@mui/material";
import "./DocumentUpload.scss";
import UploadIcon from "./../../assets/images/icons/upload_icon.png";
import { Image } from "components/image/Image";
import { useRef, useState } from "react";
import { RootState, useAppDispatch } from "store/store";
import { commonApi } from "api/commonApi/apis";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { setUploadedDocuments } from "store/TravellerData/TravellerDataSlice";

const DocumentUpload = () => {
    const inputRef = useRef(null) as any;
    const [error, setError] = useState("");
    const uploadedFiles = useSelector((state:RootState)=>state?.travellerData?.documents);
    const [isLoading, setIsLoading] = useState(false);
    const ALLOWED_TYPES = ["jpg", "jpeg", "pdf"];
    const dispatch = useAppDispatch();

    const onClickBrowseFile = (
      event:React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      event.stopPropagation();
      if (uploadedFiles.length >= 2) {
        setError("Maximum 2 files allowed");
        return;
      }
      inputRef?.current?.click();
    };

    const handleDragOver = (e: any) => e.preventDefault();

    const onDropImage = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      
      if (validateFiles(event.dataTransfer.files)) {
        handleFiles(Array.from(event.dataTransfer.files));
      }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();

      if (event.target.files && validateFiles(event.target.files)) {
        handleFiles(Array.from(event.target.files));
      }
    };

    const validateFiles = (newFiles: any) => {
      let isValid = true;
      let errorMessage = "";
      if (uploadedFiles.length + newFiles.length > 2) {
        isValid = false;
        errorMessage = "Maximum 2 files allowed";
        setError(errorMessage);
        return isValid;
      }

      for (let file of newFiles) {
        if (file.size > 2 * 1024 * 1024) {
          isValid = false;
          errorMessage = "Maximum file size is 2 MB";
          break;
        } else if (file.name.split(".").length > 2) {
          isValid = false;
          errorMessage = "Double file extension not allowed";
        }
        let fileExtension = file.name.split(".").pop().toLowerCase();
        if (!ALLOWED_TYPES.includes(fileExtension)) {
          isValid = false;
          errorMessage = "Only PDF, JPG, and JPEG files are allowed";
        }
      }
      setError(errorMessage);
      return isValid;
    };

    const handleFiles = (files: File[]) => {
      setIsLoading(true);
      Promise.allSettled(
        files.map((file: File) => {
          return new Promise<void>((resolve) => {
            callFileUploadApi(file, resolve);
          });
        })
      ).then(() => {
        setIsLoading(false);
      });
    };

    const callFileUploadApi = (file: File, resolve: any) => {
      const formData = new FormData();
      formData.append("fileName", file.name);
      formData.append("fileType", file.type);
      formData.append("mimeType", file.type);
      formData.append("documentStream", file);

      dispatch(
        commonApi.endpoints.postApiFormData.initiate({
          url: 'FILE_UPLOAD_API',
          body: formData,
          headersReq: { "Content-Type": undefined },
        })
      ).then((res: any) => {
        if (
          res.data &&
          res.data.responseStatus &&
          res.data.responseStatus.code == "200"
        ) {
          let uploadedFile = {
            name: file.name,
            type: file.type,
            id: res.data.documentId,
          };
          setUploadedDocuments([...uploadedFiles, uploadedFile]);
          resolve();
        }
      });
    };

    const onDeleteFile = (index: number) => {
      
      let files = [...uploadedFiles];
      files.splice(index, 1);
      setUploadedDocuments(files);
      setError('');
    };

  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3>Document Upload</h3>
      </div>
      <div className="file-upload">
        <div className="position-relative">
          {isLoading ? (
            <div className="loader-overlay">
              <div className="up-loader"></div>
            </div>
          ) : (
            <></>
          )}
          <div
            className="upload-container"
            onClick={onClickBrowseFile}
            onDrop={onDropImage}
            onDragOver={handleDragOver}
          >
            <Image src={UploadIcon} width="30px" alt="upload-icon" />
            <p className="fs-14 text-secondary">
              Formats supported - JPG, PDF | Max. size - 2 MB | UPTO 2 Files
            </p>
            <Button
              size="large"
              variant="outlined"
              color="error"
              onClick={(event) => {
                event.stopPropagation();
                onClickBrowseFile(event);
              }}
            >
              Browse Files
            </Button>
            {/* Hidden Input field */}
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              onClick={(e) => e.stopPropagation()}
              id="input-file-upload"
              multiple={false}
              accept="pdf,jpg,jpeg"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      {error && <p className="text-error text-right">{error}</p>}

      {uploadedFiles.length > 0 ? (
        <div className="my-2 flex gap-4">
          {uploadedFiles.map((upFile, index) => (
            <Chip
              key={upFile.id}
              label={upFile.name}
              color="error"
              variant="outlined"
              size="medium"
              onDelete={() => onDeleteFile(index)}
              deleteIcon={<DeleteIcon />}
            />
          ))}
        </div>
      ) : (
        <></>
      )}

      <p className="fs-12 text-secondary mt-5">Note: *If you have multiple images or documents please combine them into a single pdf and then upload.
      </p>
    </Card>
  );
};

export default DocumentUpload;
