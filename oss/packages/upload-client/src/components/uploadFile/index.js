import { message, Upload } from 'antd';
import React from 'react';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.info('目前只能上传JPG/PNG文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.info('图片大小需要小于2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UploadFile = (props) => {
  const {
    className,
    onSuccess,
    onLoadingChange,
    uploadToOss,
    bucketDir = 'test',
    listType = 'text',
    children,
  } = props;

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      onLoadingChange && onLoadingChange(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        onLoadingChange && onLoadingChange(false);
        // console.log('>>> url', url);
      });
    }
  };

  const customRequest = async (files) => {
    const file = files.file;
    const fileName = file.name;
    const { error, url } = await uploadToOss({ file, fileName, bucketDir })
    if (!error) {
      onSuccess && onSuccess(url);
      files.onSuccess();
      return true;
    } else {
      files.onError();
      return false;
    }
  };

  return (
    <Upload
      name="avatar"
      accept="image/*"
      listType={listType}
      className={className}
      showUploadList={false}
      customRequest={customRequest}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {children}
    </Upload>
  );
};

export default UploadFile;
