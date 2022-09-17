import axios from "axios";
import { useState } from "react";

export default function InputImage({ action, imgUrl, className }) {
  const [image, setImage] = useState(imgUrl);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "MedicApp");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dupwg1pgi/image/upload",
      data
    );
    if (res.data.secure_url) {
      setImage(res.data.secure_url);
      action(res.data.secure_url);
    }
  };

  return (
    <div className={className}>
      <label className="block w-full">
        <input
          type="file"
          className="block w-full text-[10px] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-[#292F53] file:hover:bg-[#1479FF] file:text-white hover:file:cursor-pointer"
          onChange={uploadImage}
        />
      </label>
      <div className="shrink-0">
        <img
          className="object-cover w-40 h-40 rounded-full border"
          src={image}
          alt="Perfil"
        />
      </div>
    </div>
  );
}
