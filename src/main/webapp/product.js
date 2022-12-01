


 $(function () {
         var maint = new Vue({
              el: "#productjs",
              data: {	products:[{}]}});
              
           $.get("productMaint").then(
			function (products) {
            products.forEach(function (product) {
                product.edit = "editProduct?productCode=" + product.code;
            });
			maint.products = products;
        }),$("body").click(".deleteProduct", function(event) {
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
        })})
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
			function (products) {
            products.forEach(function (product) {
                product.edit = "editProduct?productCode=" + product.code;
            });
			maint.products = products;
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
    