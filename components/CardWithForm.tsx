import * as React from "react";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithForm() {
  const [file, setFile] = React.useState();
  const [contentId, setContentId] = React.useState<string>();
  const [qrCodeText, setQrCodeText] = React.useState<string>();
  const [uploading, setUploading] = React.useState<boolean>(false);

  function handleChange(event: { target: { files: string | any[] } }) {
    if (!event.target.files) {
      console.log("No file selected");
      return;
      // Alert the user if they didn't select a file
    }
    setFile(event.target.files[0]);
  }

  function handleSubmit() {
    console.log(typeof file);
    fileUpload();
    setUploading(true);
  }

  const fileUpload = async () => {
    try {
      // Upload the file to nft.storage
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);
      const response = await fetch("https://api.nft.storage/upload", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBhZmVjM0FlMzZkMTlhNjFBZGRhMGFCMzVEMjZjOTdGMDZjODA3RjQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5NDA4MTk2MjAyMywibmFtZSI6IkhBQ0tBVEhPTiJ9.2PCTZQBPIg4y2dtxGRdpNO6Akp2UAXumJIdEOKpx9NQ", // Replace with your API key
        },
        body: formData,
      });

      const data = await response.json();
      setUploading(false);
      console.log("this is data", data);

      if (response.ok) {
        // Display the CID (Content Identifier) of the uploaded file
        setContentId(`File uploaded successfully! CID: ${data.value.cid}`);

        // Generate and display the QR code
        const text = `https://ipfs.io/ipfs/${
          data.value.cid
        }/${encodeURIComponent(file.name)}`;

        setQrCodeText(text);
      } else {
        // Handle the error
        console.log("Error while QR code generation");
        // resultDiv.textContent = `Error: ${data.error.message}`;
      }
    } catch (error) {
      console.error(error);
      // resultDiv.textContent = "An error occurred while uploading the file.";
    }
  };

  return (
    <div>
      <Card className="w-[550px] max-h-[600px]">
        <CardHeader>
          <CardTitle>Upload PDF</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>

              {/* Upload */}
              {file ? (
                <div className="">The uploaded file is {`${file.name}`}</div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">
                      Attach Document
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                        <div className="h-full w-full text-center flex flex-col items-center justify-center">
                          <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                            <img
                              className="has-mask h-36 object-center"
                              src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                              alt="freepik image"
                            />
                          </div>
                          <p className="pointer-none text-gray-500">
                            <span className="text-sm">Drag and drop</span> files
                            here <br /> or{" "}
                            <a
                              href=""
                              id=""
                              className="text-blue-600 hover:underline"
                            >
                              select a file
                            </a>{" "}
                            from your computer
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handleChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <p className="text-sm text-gray-300">
                      <span>File type: doc, pdf, types of images</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Upload</Button>
        </CardFooter>
      </Card>

      <div className="p-10 ">
        {
          // If the QR code text is available, display the QR Code
          uploading ? (
            <div>File is Being Uploaded .......</div>
          ) : (
            qrCodeText && (
              <div >
                <p>The uploaded QR code is here</p>
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={qrCodeText}
                  viewBox={`0 0 256 256`}
                />
              </div>
            )
          )
        }
      </div>
    </div>
  );
}
