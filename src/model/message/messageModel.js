import messageSchema from "./messageSchema.js"

export const sendMessage = (obj) => {
    return messageSchema(obj).save()
}

export const getMessages = () => {
    return messageSchema.find();
}

export const deleteMessage = (_id) => {
    return messageSchema.findByIdAndDelete(_id);
}