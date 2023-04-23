import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const errorHandler = (exception: unknown) => {
  let errorMessage = 'It was not possible to book'

  if (exception instanceof AxiosError) {
    errorMessage = exception.response?.data.message
  }

  toast.error(errorMessage)
}
