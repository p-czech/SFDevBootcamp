({
    doInit : function (component, event, helper) {
        let action = component.get('c.getItems');
        action.setCallback(this, function(response) {
            console.log('doInitFired');
            let state = response.getState();
            if(state === 'SUCCESS') {
                component.set('v.items', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);

    },

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