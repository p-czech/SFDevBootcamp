({
    clickCreateItem : function (component, event, helper) {
        let formValid = component.find('campingitemform').reduce(function(validStr, inputComp) {
            return validStr && inputComp.get('v.validity').valid;
        }, true);
        if(formValid) {
            let newItem = component.get('v.newItem');
            let items = component.get('v.items');
            items.push(newItem);
            component.set('v.items', items);
            component.set('v.newItem', { 'sObjectType' : 'Camping_Item__c',
            'Name' : '',
            'Quantity__c' : '0',
            'Price__c' : '0',
            'Packed__c' : 'false'});
        }
    }
})