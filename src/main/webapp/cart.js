(function() {
    'use strict';
    $(function () {
         var cart = new Vue({
          el: 'vuejs',
         data: {
            entries: []
        },
        computed: {
            totalPrice: function () {
                var total = 0;
                this.entries.forEach(
                    entry => total += entry.qty * entry.product.price);
                return total;
            }
        }
        })

        $.get("CartServlet")
        .then(function (entries) {
            cart.entries = entries;
        });
        $('body').on('submit', '.update-qty-form', function(event) {
            event.preventDefault();

            var row = $(event.target).closest("tr");
            var code = row.attr("code");
            var qty = row.find(".qty-input").val();

            $.post( "CartServlet", {
                code: code,
                qty: qty
            })
            .done(function () {
                if (qty == 0) {
                    cart.entries = cart.entries.filter(
                    entry => entry.product.code != code);
                }
                else {
                    var entry = cart.entries.find(
                        entry => entry.product.code == code);
                       entry.qty = qty;
                }
            });
        });
    });
    
})