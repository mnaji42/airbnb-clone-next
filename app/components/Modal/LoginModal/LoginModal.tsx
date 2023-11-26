"use client"

import React, { FC, useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { signIn } from "next-auth/react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useLoginModal from "@hooks/useLoginModal"
import useRegisterModal from "@hooks/useRegisterModal"

import { Modal, Heading, Input, Button } from "@components/index"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

import s from "./LoginModal.module.css"
import { toast } from "react-hot-toast"

interface LoginModalProps {
  className?: string
}

const LoginModal: FC<LoginModalProps> = ({ className }) => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true)

    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged in")
        router.refresh()
        loginModal.onClose()
      }

      if (callback?.error) toast.error(callback.error)
      setLoading(false)
    })
  }

  const bodyContent = (
    <div className={s.body}>
      <Heading title="Welcome back" subTitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
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

  const toggle = useCallback(() => {
    loginModal.onClose()
    registerModal.onOpen()
  }, [loginModal, registerModal])

  const footerContent = (
    <div className={s.footer}>
      <hr />
      <Button
        outline
        label="Continue with google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <p className={s.loginContainer}>
        First time using airbnb?
        <span className={s.login} onClick={toggle}>
          Create an account
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
