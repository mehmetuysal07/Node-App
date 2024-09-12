const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // Bu opsiyon, oluşturulma ve güncellenme tarihlerini ekler

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;
