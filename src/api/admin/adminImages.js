import axiosClient from "../apiClient";

const adminImage = {
  getImages() {
    const url = `image/all`;
    return axiosClient.get(url);
  },
  getImageByID(id) {
    const url = `image/${id}`;
    return axiosClient.get(url);
  },
  createImage(payload) {
    const url = "image/create";
    return axiosClient.post(url, payload);
  },
  updateImage(payload, id) {
    const url = `image/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteImage(id) {
    const url = `image/${id}`;
    return axiosClient.delete(url);
  },
};
export default adminImage;
