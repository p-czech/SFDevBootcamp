({
    createItem : function (component, item) {
       let createNewItemEvent = component.getEvent("addItem");
       createNewItemEvent.setParams({'item' : item});
       createNewItemEvent.fire();
       component.set('v.newItem', {'sObjectType' : 'Camping_Item__c',
       'Name' : '',
       'Quantity__c' : '0',
       'Price__c' : '0',
       'Packed__c' : 'false'
       });
    }
})