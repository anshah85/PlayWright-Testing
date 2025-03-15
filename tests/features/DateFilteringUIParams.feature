Feature: Date Range Filtering on UI

  Scenario: Verify user is able to filter data with valid date range
    Given I navigate to the application "localhost:3000"
    When I select "2024-10-27" as start date
    And I select "2024-10-29" as end date
    Then I should see the data filtered with the selected date range

  Scenario Outline: Verify user is not able to filter data with invalid date range
    Given I navigate to the application "localhost:3000"
    When I select "<start_date>" as start date
    And I select "<end_date>" as end date
    Then I should see the error message "<error_message>"

    Examples:
      | start_date | end_date | error_message |
      | 2024-10-27 | 2024-10-25 | End date should be greater than start date |
      | 2024-10-27 | 2024-10-27 | End date should be greater than start date |
      | 2024-10-27 | 2024-10-26 | End date should be greater than start date |
      | 2024-10-27 | 2024-10-28 |  |
      | 2024-10-27 | 2024-10-29 |  |
      | 2024-10-27 | 2024-10-30 |  |
      | 2024-10-27 | 2024-10-31 |  |
      | 2024-10-27 | 2024-11-01 |  |
      | 2024-10-27 | 2024-11-02 |  |
      | 2024-10-27 | 2024-11-03 |  |
      | 2024-10-27 | 2024-11-04 |  |
      | 2024-10-27 | 2024-11-05 |  |