# Feature: Search a course
#     Scenario: Should search by text
#         Given user is on "/navigation" page
#         When user search by "тестировщик"
#         Then user sees the course suggested "Тестировщик ПО"

Feature: qamid.tmweb.ru tests
    Scenario: The first test one ticket
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user search by "user search by"
        Then user sees the course suggested "user sees the course suggested"

Feature: qamid.tmweb.ru tests
    Scenario: The second test two tickets
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user search by "user search by"
        Then user sees the course suggested "user sees the course suggested"

Feature: qamid.tmweb.ru tests
    Scenario: The third test no tickets
        Given user is on "http://qamid.tmweb.ru/client/index.php" page
        When user search by "user search by"
        Then user sees the course suggested "user sees the course suggested"
        