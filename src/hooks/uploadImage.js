export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const url = import.meta.env.VITE_uploadImage;
    const response = await fetch(url, { method: "POST", body: formData });
    const data = await response.json();
    return data;
}