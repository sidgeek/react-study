import React, { useState } from "react";
import UploadFile from "../uploadFile";
import CustomButton from "./customButton";

import uploadFileByOss from "../../lib/uploadFileByOss";
import uploadFileByOssSTS from "../../lib/uploadFileByOssSTS";
import uploadFileByOssDirect from "../../lib/uploadFileByOssDirect";

export default function TextButton() {
  const [src, setSrc] = useState("");

  return (
    <>
      <UploadFile
        src={src}
        bucketDir="img"
        onSuccess={setSrc}
        uploadToOss={uploadFileByOssDirect}
      >
        <CustomButton text={"前端签名上传"} />
      </UploadFile>

      <UploadFile
        src={src}
        bucketDir="img"
        onSuccess={setSrc}
        uploadToOss={uploadFileByOss}
      >
        <CustomButton text={"后端签名，前端上传"} />
      </UploadFile>

      <UploadFile
        src={src}
        bucketDir="img"
        onSuccess={setSrc}
        uploadToOss={uploadFileByOssSTS}
      >
        <CustomButton text={"后端生成STS,前端上传"} />
      </UploadFile>
    </>
  );
}
