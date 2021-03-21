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
    handleAddItem : function (component, event, helper) {
        let addItem = event.getParam('item');
        let action = component.get('c.saveItem');
        action.setParams({'item': addItem});
        action.setCallback(function (response) {
            let status = response.getStatus();
            if(status === 'SUCCESS') {
                let items = component.get('v.items');
                items.push(response.getReturnValue());
                component.set('v.items', items);
            }
        });
        $A.enqueueAction(action);        
    }
})