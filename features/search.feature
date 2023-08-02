Feature: qamid.tmweb.ru tests

    Scenario: The first test one ticket
        Given first user is on "/client/index.php" page
        When first user search by "user search by"
        Then first user sees the course suggested "Получить код бронирования"

    Scenario: The second test two tickets
        Given second user is on "/client/index.php" page
        When second user search by "user search by"
        Then second user sees the course suggested "Получить код бронирования"

    Scenario: The third test no tickets
        Given third user is on "/client/index.php" page
        When third user search by "user search by"
        Then third user sees the course suggested "Забронировать"
