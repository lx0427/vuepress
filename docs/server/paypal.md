# paypal

1. [接入支付按钮](https://www.paypal.com/buttons)
2. smart buttons 配置生成代码
   ```html
   <div id="paypal-button-container"></div>
   <script
     src="https://www.paypal.com/sdk/js?client-id=AUCv8Q12Q6n-K3LFskz519dC0r5B3ymGZtWvOdQljXjOhe--1LsQtHDJAue__Ulmc6AajIELfXdjUoZX&currency=JPY"
     data-sdk-integration-source="button-factory"
   ></script>
   <script>
     paypal
       .Buttons({
         style: {
           shape: 'pill',
           color: 'gold',
           layout: 'vertical',
           label: 'buynow',
         },
         createOrder: function(data, actions) {
           return actions.order.create({
             purchase_units: [
               {
                 amount: {
                   value: '1',
                 },
               },
             ],
           })
         },
         onApprove: function(data, actions) {
           return actions.order.capture().then(function(details) {
             alert('Transaction completed by ' + details.payer.name.given_name + '!')
           })
         },
       })
       .render('#paypal-button-container')
   </script>
   ```
3. [开发文档](https://developer.paypal.com/docs/checkout/integrate/)
