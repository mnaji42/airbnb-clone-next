"use client"

import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useCallback,
} from "react"

import { IoMdClose } from "react-icons/io"
import { ClickOutside, Button } from "@components/index"

import cn from "classnames"
import s from "./Modal.module.css"

interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  onSubmit?: () => void
  title?: string
  body?: ReactElement
  footer?: ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (!disabled && onClose) {
      setShowModal(false)
      setTimeout(() => {
        onClose()
      }, 300)
    }
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (!disabled && onSubmit) {
      onSubmit()
    }
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (!disabled && secondaryAction) {
      secondaryAction()
    }
  }, [disabled, secondaryAction])

  if (!isOpen) return null

  return (
    <>
      <div className={s.backdrop}>
        <div className={s.container}>
          <ClickOutside active={isOpen} onClick={handleClose}>
            <div className={cn(s.content, { [s.active]: showModal })}>
              <div className={s.modal}>
                <div className={s.header}>
                  <button className={s.closeButton} onClick={handleClose}>
                    <IoMdClose size={18} />
                  </button>
                  <div className={s.title}>{title}</div>
                </div>
                <div className={s.body}>{body}</div>
                <div className={s.actionContainer}>
                  <div className={s.action}>
                    {secondaryAction && secondaryActionLabel ? (
                      <Button
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                        outline
                      />
                    ) : null}
                    <Button
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                    />
                  </div>
                  {footer}
                </div>
              </div>
            </div>
          </ClickOutside>
        </div>
      </div>
    </>
  )
}

export default Modal
