({
    
    clickCreateItem : function (component, event, helper) {
        let formValid = component.find('campingitemform').reduce(function(validStr, inputComp) {
            return validStr && inputComp.get('v.validity').valid;
        }, true);
        
        if(formValid) {
            let item = component.get('v.newItem');
            helper.createItem(component, item);
        }
    }
})