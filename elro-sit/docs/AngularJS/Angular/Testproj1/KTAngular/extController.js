/**
 * Created by wx53 on 9/23/2014.
 */

function personController1($scope) {
    $scope.person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            var x;
            x = $scope.person;
            return x.firstName + "--- " + x.lastName;
        }
    };
    }

