







 $(function () {
        var maint =
				new Vue({
					el: '#productjs',
					data: {
										products: 			  [ {code: 'pr1', description:'Product 1', price: 1.99},
																{code: 'pr2', description:'Product 2', price: 2.99},
																{code: 'pr3', description:'Product 3', price: 3.99}]
								}
					})
		})
            
            $.get("productMaint").done(function (prods){
	
	
				prods.forEach(function (product) {
					console.log(product);
					product.edit = "editProduct?productCode=" + product.code;
				})
				maint.prods = prods;
} )
            
            
            
/*
        $.get("http://localhost:8080/_lab3/productMaint").done(
			function (prods) {
            prods.forEach(function (product) {
                product.edit = "editProduct?productCode=" + product.code;
            });
			maint.prods = prods;
        });
        $("body").click(".deleteProduct", function(event) {
            event.preventDefault();
            var row = event.target.closest("tr");
            var productCode = row.attr("productCode");
            var confirmed = window.confirm("Are you sure you want to delete product?");
            if (confirmed == false) {
                return;
            }
            $.post( "deleteProduct", {
                productCode: productCode
            })
        });*/
    
              	/*	 
              		  

              /*methods: {
                loadUserInfo: function(resource) {
                    
                    $.ajax({
                             url: 'http://localhost:8080/_lab3/productMaint',
                             method: 'GET',
                             success: data => {
                               this.code = data.code;
                               
                             },
                             error: function(xhr,status,error)
                             {
                                alert(error);
                             }
                           });     
                }
              }
})	/*
            */
            
            
            /*
        $.get("productMaint").then(
			function (prods) {
            prods.forEach(function (product) {
                product.edit = "editProduct?productCode=" + product.code;
            });
			maint.prods = prods;
        });
        
        $("body").click(".deleteProduct", function(event) {
            event.preventDefault();
            var row = event.target.closest("tr");
            var productCode = row.attr("productCode");
            var confirmed = window.confirm("Are you sure you want to delete product?");
            if (confirmed == false) {
                return;
            }
            $.post( "deleteProduct", {
                productCode: productCode
            })
        });
        */
    