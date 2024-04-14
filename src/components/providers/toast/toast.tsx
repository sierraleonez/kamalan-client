"use client"

import { closeToast } from "@/lib/features/global/toastSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { Alert, Snackbar } from "@mui/material"

export default function Toast() {
  const { open, message, type } = useAppSelector(state => state.toast)
  const dispatch = useAppDispatch()
  return (
    <Snackbar open={open} onClose={() => dispatch(closeToast())} autoHideDuration={3000} anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
      <Alert onClose={() => { dispatch(closeToast()) }} sx={{ width: '100%' }} severity={type} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}