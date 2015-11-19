angular.module('starter.listLoved', [])

.controller('listLovedCtrl', function($scope) {

$scope.array_list_lovedones = [
          {
            id: 1,
            name: "Aish Gupta",
            age: "24",
            sex: "F",
            relation: "Daughter",
            last: "01/04/15 - Dr.Mala",
            next: "10/04/15 - ECG",
            drug: "BP-1/7-90/100 | BG-1/5-145",
            image: "img/aish.jpg",
            email: "aish@a.com",
            phone: "978989990",

          },
          {
            id: 2,
            name: "Amit Jain",
            age: "36",
            sex: "M",
            relation: "Brother",
            last: "05/05/15 - Dr.Vishwas",
            next: "10/05/15 - ECG",
            drug: "BP-1/7-80/100 | BG-1/5-145",
            image: "img/akshay.jpg",
            email: "aish@a.com",
            phone: "978989990",

          },
          {
            id: 3,
            name: "Ritesh Agrawal",
            age: "43",
            sex: "M",
            relation: "Cousin",
            last: "01/04/15 - Dr.Bharti",
            next: "10/04/15 - ECG",
            drug: "BP-1/7-90/100 | BG-1/5-145",
            image: "img/salman.jpg",
            email: "aish@a.com",
            phone: "978989990",

          },
          {
            id: 4,
            name: "Nisha Sharma",
            age: "21",
            sex: "F",
            relation: "Daughter",
            last: "01/04/15 - Dr.Sunitha",
            next: "10/04/15 - ECG",
            drug: "BP-1/7-90/100 | BG-1/5-145",
            image: "img/dipika.jpg",
            email: "aish@a.com",
            phone: "978989990",

          },
      ];
});
