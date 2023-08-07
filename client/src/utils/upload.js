import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "Gigster");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dpicmdx9c/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};
// https://api.cloudinary.com/v1_1/dpicmdx9c/image/upload
// import.meta.env.VITE_UPLOAD_LINK
// https://api.cloudinary.com/v1_1/dpicmdx9c
export default upload;