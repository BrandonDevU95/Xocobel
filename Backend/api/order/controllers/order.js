"use strict";
const stripe = require("stripe")(
  "sk_test_51JqMw4FDgkDMxEY6LQ4BPyzxLncEItpaI6GEQO6zhtZtUW9rck8s30rpkEEvUJcWNIlc1QnDPlakcRzdF3QWDPY800awR2ApYB"
);
// TODO: Exportar clave provada a .env

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;
    let totalPayment = 0;
    products.forEach((product) => {
      totalPayment += product.price;
    });
    const charge = await stripe.charge.create({
      amount: totalPayment * 100,
      currency: "mxn",
      description: `ID Usuario: ${idUser}`,
      source: token.id,
    });

    const createOrder = [];
    for await (const product of products) {
      const data = {
        product: product.id,
        user: idUser,
        totalPayment,
        idPayment: charge.id,
        addressShipping,
      };
      const validData = await strapi.entityValidator.validateEntity(
        strapi.model.order,
        data
      );
      const entry = await strapi.query("order").create(validData);
      createOrder.push(entry);
    }
    return createOrder;
  },
};
