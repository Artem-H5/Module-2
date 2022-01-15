(function() {
'use strict';

    angular.module ('ShoppingListCheckOff', [])
    .controller ('ToBuyController', ToBuyController)
    .controller ('AlreadyBoughtController', AlreadyBoughtController)
    .service ('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){


        var Buy=this;
      
        Buy.items=ShoppingListCheckOffService.getToBuyItems();


       
        Buy.buyItem=function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var Bought=this;
        
        Bought.items=ShoppingListCheckOffService.getBoughtItems();


        
    }

    function ShoppingListCheckOffService(){
        var service=this;
        var toBuy=[
            { itemName: "Milk", itemQuantity: "2 Gallons" },
            { itemName: "Cupcakes", itemQuantity: "6 pieces" },
            { itemName: "Cookies", itemQuantity: "4 pieces" },
            { itemName: "Chocolate", itemQuantity: "5 pieces" },
            { itemName: "Donats", itemQuantity: "3 pieces" }
        ];

        var alreadyBoughtItems=[];
        
        service.buyItem=function(itemIndex){
            var item=toBuy[itemIndex];

            alreadyBoughtItems.push(item);
            toBuy.splice(itemIndex,1);
        };

        service.getToBuyItems=function() {
            return toBuy;
        }
        service.getBoughtItems=function(){
            return alreadyBoughtItems;

        }
    }

})();