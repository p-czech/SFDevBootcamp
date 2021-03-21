({
    packItem: function(component, event, helper) {
        var buttonClicked = event.getSource();
        component.set("v.item.Packed__c", true);
        buttonClicked.set("v.disabled", true);

        
    }
})