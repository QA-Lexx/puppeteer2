# Feature: Search a course
#     Scenario: Should search by text
#         Given user is on "/navigation" page
#         When user search by "тестировщик"
#         Then user sees the course suggested "Тестировщик ПО"

Feature: qamid.tmweb.ru tests one test
    Scenario: The first test one ticket
        Given user is on "/client/index.php" page
        When user search by "user search by"
        Then user sees the course suggested "Получить код бронирования"

Feature: qamid.tmweb.ru tests second test
    Scenario: The second test two tickets
        Given user is on "/client/index.php" page
        When user search by "user search by"
        Then user sees the course suggested "Получить код бронирования"

Feature: qamid.tmweb.ru tests third test
    Scenario: The third test no tickets
        Given user is on "/client/index.php" page
        When user search by "user search by"
        Then user sees the course suggested "Забронировать"
        