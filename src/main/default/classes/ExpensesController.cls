public with sharing class ExpensesController {

    @AuraEnabled
    public static List<Expense__c> getExpenses(){
        try {
            return [SELECT Id, Name, Amount__c, Client__c, Date__c,
            Reimbursed__c, CreatedDate FROM Expense__c
            ORDER BY CreatedDate DESC, LastModifiedDate DESC];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdateable() checking first, then
        try {
        upsert expense;
        return expense;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}