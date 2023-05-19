import { toast } from 'react-toastify'

export const errorHandler = (error) => {
      let status = error.response.status;
      let err = null;
      if (status == 422) {
        let key = Object.keys(error.response.data.errors[0])[0];
        let value = error.response.data.errors[0][key];
        err = `${key}: ${value}`;
      } else {
        if (error.response.data.error.name) {
          err = error.response.data.error.name;
        } else {
          err = error.response.data.error.message;
        }
      }
      toast.error(err);
    return err;
}