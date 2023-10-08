import { message } from "antd";

export default class ToastHelper {
    static genericErrorMessage = 'Something went wrong, please try again!'
    static genericSuccessMessage = 'Success!'

    static error(text?: string) {
        message.error({
            content: text || ToastHelper.genericErrorMessage,
            className: 'flex justify-end'
        })
    }

    static success(text?: string) {
        message.success({
            content: text || ToastHelper.genericSuccessMessage,
            className: 'flex justify-end'
        })
    }
}