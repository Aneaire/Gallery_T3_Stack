"use client";

import { DiamondPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

export function UploadButton() {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      toast("Uploading...", { id: "upload-begin", duration: 100000 });
    },
    onClientUploadComplete() {
      toast("Upload complete!", { duration: 2000 });
      toast.dismiss("upload-begin");

      router.refresh();
    },
    onUploadError() {
      toast("Upload failed!", { style: { backgroundColor: "red" } });
      toast.dismiss("upload-begin");
    },
  });

  return (
    <div className="cursor-pointer rounded-full bg-blue-500 px-4 py-1">
      <label htmlFor="upload-button" className="flex cursor-pointer gap-4">
        <span className="hidden lg:block">Upload</span> <DiamondPlus />
      </label>
      <input
        type="file"
        id="upload-button"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
}
