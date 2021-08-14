Feature: Set todo done
    Scenario: Done todo is removed from open todos
        Given I am on the home page
        When I add the new todo "Test my webapp!"
        And I have done the todo "Test my webapp!"
        Then I do not see an open todo

    Scenario: Done todo is added to done todos
        Given I am on the home page
        When I add the new todo "Test my webapp!"
        And I have done the todo "Test my webapp!"
        Then I can see the done todo "Test my webapp!"