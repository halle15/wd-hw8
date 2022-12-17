/**
 * 
 */
 $(function () {
		console.log("bruh");
        var cart = new Vue({
              el: "#vuejs",
              data: { entries: []
              },
            computed: {
              totalPrice: function () {
            	var total = 0;
            	entries.forEach(entry=> total += entry.qty * entry.product.price);
            	return total;
              }
            }
          })
        
        $.get("cart").done(function (entries) {
            cart.entries = entries;
        });
        
        $("body").submit(".updateQty", function(event) {
            event.preventDefault();
			var row = $(event.target).closest("tr");
            var productCode = row.attr("productCode");
            var qty = row.find("qty").val();
			
			
			
            $.post( "cart", {
                productCode: productCode,
                qty: qty
            })
        });
    })