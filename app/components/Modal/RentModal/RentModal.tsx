"use client"

import React, { FC } from "react"

import { Modal } from "@components/index"
import useRentModal from "@hooks/useRentModal"

interface RentModalProps {
  className?: string
}

const RentModal: FC<RentModalProps> = ({ className }) => {
  const rentModal = useRentModal()
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Airbnb your home!"
    />
  )
}

export default RentModal
