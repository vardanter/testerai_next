myFileForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("file", inpFile.files[0]);
  
    try {
      fetch(${API_HOST}/file/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          addMessageToList(data)
          addMessageToList({
            text: "Please wait while your code will be tested",
            question_id: data["id"],
          })
        });
    } catch (error) {
      console.error("Error:", error);
    }
  });