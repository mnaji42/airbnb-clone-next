"use client"

import React, { FC, useState, useMemo } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { categories } from "@components/Navbar/Categories/Categories"
import { CategoryInput, CountrySelect, Counter } from "@components/index"
import dynamic from "next/dynamic"

import useRentModal from "@hooks/useRentModal"

import { Heading, Modal } from "@components/index"

import s from "./RentModal.module.css"

interface RentModalProps {
  className?: string
}

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal: FC<RentModalProps> = ({ className }) => {
  const rentModal = useRentModal()

  const [step, setStep] = useState<STEPS>(STEPS.CATEGORY)
  //
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

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    })
  }

  const Map = useMemo(
    () =>
      dynamic(() => import("../../Map"), {
        ssr: false,
      }),
    [location]
  )

  const onBack = () => setStep((v) => v - 1)
  const onNext = () => setStep((v) => v + 1)

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return "Create"
    return "Next"
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) return undefined
    return "Back"
  }, [step])

  let bodyContent = (
    <div className={s.categoryContent}>
      <Heading
        title="Which of these best describe your place?"
        subTitle="Pick a category"
      />
      <div className={s.subContainer}>
        {categories.map((item) => (
          <div key={item.label} className={s.item}>
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

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className={s.locationContent}>
        <Heading
          title="Where is your place located?"
          subTitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    )
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className={s.infoContent}>
        <Heading
          title="Share some basics about your place"
          subTitle="What amenitis do you have?"
        />
        <Counter
          onChange={(value) => setCustomValue("guestCount", value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests do you allow?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue("roomCount", value)}
          value={roomCount}
          title="Rooms"
          subtitle="How many rooms do you have?"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue("bathroomCount", value)}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Airbnb your home!"
      body={bodyContent}
    />
  )
}

export default RentModal
