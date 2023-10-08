import ToastHelper from "./toastHelper";

export default class MessageParser {
    static parseSuccessMessage(res: any) {
        return res?.data?.messages?.length ? res?.data?.messages[0] : ToastHelper.genericSuccessMessage
    }

    static parseErrorMessage(res: any) {
        return res?.data?.messages?.length ? res?.data?.messages.join() : ToastHelper.genericErrorMessage
    }

    static success(msg: any) {
        ToastHelper.success(msg)
    }

    static error(msg: any) {
        ToastHelper.error(msg)
    }
}