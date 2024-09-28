"use client"
import useRentModal from "@/app/hooks/useRentModal"
import Modal from "./Modal"
import { useMemo, useState } from "react"
import Heading from "../Heading"
import { categories } from "../navbar/Categories"
import CategoryInput from "../inputs/CategoryInput"
import { FieldValues, useForm } from "react-hook-form"
import CountrySelect from "../inputs/CountrySelect"
import dynamic from "next/dynamic"
import Counter from "../Counter"
import ImgUpload from "../ImgUpload"

enum Steps {
  CATEGORY,
  LOCATION,
  INFO,
  IMAGES,
  DESCRIPTION,
  PRICE,
}
const RentModal = () => {
  const rentModal = useRentModal()

  const [step, setStep] = useState(Steps.CATEGORY)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  })

  const category = watch("category")
  const location = watch("location")
  const guestCount = watch("guestCount")
  const roomCount = watch("roomCount")
  const bathroomCount = watch("bathroomCount")
  const imgSrc = watch("imgSrc")

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  )

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const onBack = () => {
    setStep((value) => value - 1)
  }
  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === Steps.PRICE) {
      return "Create"
    }
    return "Next"
  }, [step])

  const SecondaryActionLabel = useMemo(() => {
    if (step === Steps.CATEGORY) {
      return undefined
    }
    return "Back"
  }, [step])

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-3
            max-h-[50vh]
            overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  if (step === Steps.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          onChange={(value) => setCustomValue("location", value)}
          value={location}
        />
        <Map center={location?.latlang} />
      </div>
    )
  }
  if (step === Steps.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basic about your place"
          subtitle="What amenities do you have?"
        />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you allow?"
          value={roomCount}
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />

        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you allow?"
          value={bathroomCount}
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    )
  }
  if (step === Steps.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImgUpload
          value={imgSrc}
          onChange={(value) => setCustomValue("imgSrc", value)}
        />
      </div>
    )
  }
  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={SecondaryActionLabel}
      secondaryAction={step === Steps.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  )
}

export default RentModal
