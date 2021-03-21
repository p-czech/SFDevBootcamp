({
    doInit : function (component, event, helper) {
        let action = component.get("c.getExpenses");
        action.setCallback(this, function(response) {
            let state = response.getState();
            if(state === "SUCCESS"){
                component.set("v.expenses", response.getReturnValue());
            } else {
                console.log("Failed with state: " + state);
            }
        });

        $A.enqueueAction(action);
    },


    handleUpdateExpense : function (component, event, helper) {
        let updateExp = event.getParam("expense");
        helper.updateExpense(component, updateExp);
    },

    handleCreateExpense: function(component, event, helper) {
        let newExpense = event.getParam("expense");
        helper.createExpense(component, newExpense);
    },
})