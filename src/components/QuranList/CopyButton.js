import { useState } from "react";

const CopyButton = ({description, listNumber, startDate, users}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {

    const text = createCopyText()
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  const createCopyText = () => {

    const currentStartDate = new Date(startDate)

    let text = ""
    for (let a of description) {
      text += a + "\n\n"
    }

    text += "          List " + listNumber + "\n\n"
    text += currentStartDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }) + "\n\n";

    let count = 1
    for (let a of users) {
      text+= count + ". " + a + "\n"
      count +=1 
    }

    return text
  }

  return (
    <>
      <div className="bg-sky-200 font-bold text-center w-1/3 pt-3 pb-3 mb-4 ml-auto mr-auto cursor-pointer">
        <button

          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </>
  )
}

export default CopyButton;