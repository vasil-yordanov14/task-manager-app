const convertToText = (data) => {
  let textData = ["Unfinished tasks\n"];
  data.map((item) => {
    const text = `ID:${item.id} Title: ${item.title} Description:${item.description}\n`;

    textData.push(text);
  });

  return textData.join("");
};

const handleDownload = () => {
  const data = localStorage.getItem("tasks");
  const textData = convertToText(JSON.parse(data));
  const blob = new Blob([textData], {
    type: "text/plain",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default handleDownload;
