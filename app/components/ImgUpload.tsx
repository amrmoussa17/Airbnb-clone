import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { TbPhotoPlus } from "react-icons/tb"

declare global {
  let cloudinary: any
}
interface ImgUploadProps {
  value: string
  onChange: (value: string) => void
}
const ImgUpload = ({ value, onChange }: ImgUploadProps) => {
  const handleUpload = (result: any) => {
    onChange(result.info.secure_url)
  }
  return (
    <CldUploadWidget
      uploadPreset="hji6ngcy"
      options={{ maxFiles: 1 }}
      onSuccess={handleUpload}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed
            border-2
            border-neutral-300
            p-20
            flex
            flex-col
            justify=-center
            items-center
            gap-4
            text-neutral-600
        "
          >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={value}
                  alt="Upload"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImgUpload
