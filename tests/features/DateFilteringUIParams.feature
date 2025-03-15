Feature: Date Range Filtering on UI
  As a product manager
  I want to filter data by date range on the dashboard
  So that I can analyze data for specific time periods

  Scenario: Verify user is able to filter data with valid date range
    Given I navigate to the application "localhost:3000"
    When I select "2024-10-27" as start date
    And I select "2024-10-29" as end date
    Then I should see the data filtered with the selected date range

  # Scenario: Succesfully filter data by date range
  #   Given I am on the dashboard page
  #   When I select a date range from "2024-01-01" to "2024-01-31"
  #   Then the chart should update to show only January data
  #   And the table should display records from January
  #   And the URL should contain the date parameters

  # Scenario Outline: Verify user is not able to filter data with invalid date range
  #   Given I navigate to the application "localhost:3000"
  #   When I select "<start_date>" as start date
  #   And I select "<end_date>" as end date
  #   Then I should see the error message "<error_message>"

  #   Examples:
  #     | start_date | end_date | error_message |
  #     | 2024-10-27 | 2024-10-25 | End date should be greater than start date |
  #     | 2024-10-27 | 2024-10-27 | End date should be greater than start date |
  #     | 2024-10-27 | 2024-10-26 | End date should be greater than start date |
  #     | 2024-10-27 | 2024-10-28 |  |
  #     | 2024-10-27 | 2024-10-29 |  |
  #     | 2024-10-27 | 2024-10-30 |  |
  #     | 2024-10-27 | 2024-10-31 |  |
  #     | 2024-10-27 | 2024-11-01 |  |
  #     | 2024-10-27 | 2024-11-02 |  |
  #     | 2024-10-27 | 2024-11-03 |  |
  #     | 2024-10-27 | 2024-11-04 |  |
  #     | 2024-10-27 | 2024-11-05 |  |