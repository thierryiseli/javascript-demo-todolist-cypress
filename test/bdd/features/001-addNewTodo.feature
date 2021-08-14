Feature: Add new todo
    Scenario: Add new todo succeeded
        Given I am on the home page
        When I add the new todo "Test my webapp!"
        Then I can see the new todo "Test my webapp!"

    Scenario: Prepared empty input field for adding new todo 
        Given I am on the home page
        When I add the new todo "Test my webapp!"
        Then input field is ready to add next todo  