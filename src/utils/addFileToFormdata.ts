const addFileToFormData = async (uri: string, filename: string, formData: FormData) => {
  try {
    // fetch를 사용해 로컬 파일 경로에서 Blob 가져오기
    const response = await fetch(uri);
    const blob = await response.blob();

    // Blob을 FormData에 추가
    formData.append('images', blob, filename);
  } catch (error) {
    console.error('Error adding file to FormData:', error);
    throw error;
  }
};

export default addFileToFormData;
