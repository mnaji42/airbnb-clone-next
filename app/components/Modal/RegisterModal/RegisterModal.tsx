"use client"

import React, { FC, useState, useCallback } from "react"
import axios from "axios"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "@hooks/useRegisterModal"

import { Modal, Heading, Input } from "@components/index"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

import cn from "classnames"
import s from "./RegisterModal.module.css"

interface RegisterModalProps {
  className?: string
}

const RegisterModal: FC<RegisterModalProps> = ({ className }) => {
  const registerModal = useRegisterModal()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const bodyContent = (
    <div className={s.body}>
      <Heading title="Welcome to Airbnb" subTitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}

export default RegisterModal
